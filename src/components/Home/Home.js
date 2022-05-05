import styles from './Home.module.scss'
import NavCard from './home_nav.js'
import Title from './home_title.js'
import Text from './home_text.js'
import MyTable from './MyTable.js'
import { useEffect, useState } from 'react'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { marked } from 'marked'
import hljs from 'highlight.js'

export default function Home(){
    
    const history = useHistory()
    const params = useParams()

    let [navState1, SetNavState1] = useState([])//学习笔记的导航数据
    let [navState2, SetNavState2] = useState([])//速查表格的导航数据
    let [blogTitle, setBlogTitle] = useState([])//根据导航查询到的文章标题
    let [navStates, setNavStates] = useState(1)//判断文章导航是表格还是笔记
    

    function propClickNav(data){
        React.$api.getTitle({ navid: data._id  }).then(res => {
            if(res.code === 200){
                history.replace({ pathname: '/blog/' + data._id + '/' + res.result[0]._id })
                setBlogTitle(res.result)
                React.$api.getBlog({ id: res.result[0]._id, state: navStates }).then((r) => {
                    setmarkContent(r.result.content)
                })
            }else if(res.code === 404){
                if(navStates === 1){
                    showText(data._id)
                }
            }
        })
    }
    function propClickTit(data){
        history.replace({ pathname: '/blog/' + params.n + '/' + data._id })
        React.$api.getBlog({ id: data._id, state: navStates  }).then(res => {
            if( res.code === 200 ){
                setmarkContent(res.result.content)
            }
        })
    }

    let [textState, setTextState] = useState(false);//控制编辑框显示隐藏
    let [textnavid, settextnavid] = useState(null);//编辑框编辑时标识是哪个nav下的文章
    let [texttitid, settexttitid] = useState(null);//如果是重新编辑需要文章的id
    function showText(navid, titid){//显示blog编辑框
        if(navid) {
            textnavid = settextnavid(navid)
            texttitid = settexttitid(titid)
            if(!textState) setTextState(true)
        }
    }

    //首次加载 修改pramas所以不需要依赖项
    useEffect(() => {
        React.$api.getBlogNav().then((res) => {
            let nav = res.result.filter( v => v.state === 1)
            SetNavState1(nav)
            SetNavState2(res.result.filter( v => v.state === 2))

            let n = params.n
            if(n == null) n = nav[0]._id;

            React.$api.getTitle({ navid: n  }).then(re => {

                if(re.code === 200) {
                    let t = params.t
                    if(t == null) t = re.result[0]._id;
                    history.replace({ pathname: '/blog/' + n + '/' + t })
                    setBlogTitle(re.result)

                    React.$api.getBlog({ id: t, state: navStates }).then((r) => {
                        if(re.code === 200) {
                            setmarkContent(r.result.content)
                        }
                    })
                }
            })
        })
        
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    hljs.configure({
        tabReplace: '',
        classPrefix: 'hljs-',
        languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript'],
    });
    marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: code => hljs.highlightAuto(code).value,
        gfm: true, // 允许 Git Hub标准的markdown.
        pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
        sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
        tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
        breaks: false, // 允许回车换行（该选项要求 gfm 为true）
        smartLists: true, // 使用比原生markdown更时髦的列表
        smartypants: false, // 使用更为时髦的标点
    })
    
    let [markContent, setmarkContent] = useState('')
    
    function getMark({navid, titid}){
        
        history.replace({ pathname: '/blog/' + navid + '/' + titid })
        React.$api.getBlog({ id: titid, state: navStates }).then((res) => {
            setmarkContent(res.result.content)
        })
    }

    function selectNavStates(state){
        if(state !== navStates) setNavStates(state)
    }

    function addNav(data){
        if(navStates === 1){
            SetNavState1(navState1.concat([data]))
        }else{
            SetNavState2(navState2.push(data))
        }
        propClickNav(data)
    }
    
    return(
        <div style={{display: "flex", justifyContent: "space-between"}}>
            {   /* 文章编辑 */
                textState?<Text 
                            closeText={(val)=> {setTextState(false); if(val) getMark(val) } } 
                            navId={ textnavid } 
                            titId={ texttitid } 
                            />:''
            }
            <div className={styles.title}>
                <NavCard 
                    Chapter={ navStates===1?navState1:navState2 } 
                    navStates={navStates} 
                    propClick={ propClickNav } 
                    selectNavStates={ selectNavStates } 
                    addNav={ addNav } 
                />
            </div>
            <div className={styles.detail}>
                <div className={styles.box}>
                    <div className={styles.boxTitle}>
                        <Title 
                            blogTitle={ blogTitle } 
                            myEdit={ () => showText(params.n, params.t) } 
                            propClickTit={ propClickTit } 
                        />
                    </div>
                    <div className={styles.bg_c}>
                        {
                            navStates===1?<div dangerouslySetInnerHTML={{ __html: marked(markContent) }}></div>:<MyTable />
                        }
                    </div>
                    <em style={{ fontSize: '12px', color: '#fdcc8a' }}>注: 笔记仅供参考，如有错误欢迎留言指正。</em>
                </div>
            </div>
        </div>
    )
}