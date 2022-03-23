import styles from './Home.module.scss'
import NavCard from './home_nav.js'
import Title from './home_title.js'
import Text from './home_text.js'
import { useEffect, useState } from 'react'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { marked } from 'marked'
import hljs from 'highlight.js'

export default function Home(){
    
    const history = useHistory()
    const params = useParams()

    let [navState1, SetNavState1] = useState([])
    let [navState2, SetNavState2] = useState([])
    let [blogTitle, setBlogTitle] = useState([])
        

    function propClickNav(data){
        React.$api.getTitle({ navid: data._id  }).then(res => {
            if(res.code === 200){
                history.replace({ pathname: '/blog/' + data._id + '/' + res.result[0]._id })
                setBlogTitle(res.result)
                React.$api.getBlog({ id: res.result[0]._id }).then((r) => {
                    setmarkContent(r.result.content)
                })
            }
        })
    }
    function propClickTit(data){
        history.replace({ pathname: '/blog/' + params.n + '/' + data._id })
        React.$api.getBlog({ id: data._id  }).then(res => {
            if( res.code === 200 ){
                setmarkContent(res.result.content)
            }
        })
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

                    React.$api.getBlog({ id: t }).then((r) => {
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
    let [textState, setTextState] = useState(false)
    let [markContent, setmarkContent] = useState('')
    
    function getMark(id){
        React.$api.getBlog({ id }).then((res) => {
            setmarkContent(res.result.content)
        })
    }

    let [navStates, setNavStates] = useState(1)
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
            <div  style={{ display: textState ? "block":"none" }}>
                <Text modelState={ (val, id) => { setTextState(val); if(!val) getMark(id) }} />
            </div>
            <div className={styles.title}>
                <NavCard Chapter={ navStates===1?navState1:navState2 } navStates={navStates} propClick={ propClickNav } selectNavStates={ selectNavStates } addNav={ addNav } />
            </div>
            <div className={styles.detail}>
                <div className={styles.box}>
                    <div className={styles.boxTitle}>
                        <Title blogTitle={ blogTitle } myEdit={ (val) => setTextState(val) } propClickTit={ propClickTit } />
                    </div>
                    <div className={styles.bg_c}>
                        <div dangerouslySetInnerHTML={{ __html: marked(markContent) }}></div>
                    </div>
                    <em style={{ fontSize: '12px', color: '#fdcc8a' }}>注: 笔记仅供参考，如有错误欢迎留言指正。</em>
                </div>
            </div>
        </div>
    )
}