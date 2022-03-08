import styles from './Home.module.scss'
import NavCard from './home_nav.js'
import Title from './home_title.js'
import Text from './home_text.js'
import { useEffect, useState } from 'react'

import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

export default function Home(){

    const chapter = ['css3','JavaScript','HTML5','浏览器','Linux','Unity']

    function propClick(data){
        console.log(data)
    }
    useEffect(() => {
        // let [section, setSection] = useState(false)
        hljs.configure({
            tabReplace: '',
            classPrefix: 'hljs-',
            languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript'],
        });
        // let [ my_markdown, setMy_markdown] = useState(``)
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: code => hljs.highlightAuto(code).value,
            gfm: true, // 允许 Git Hub标准的markdown.
            // pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
            // sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
            tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
            breaks: false, // 允许回车换行（该选项要求 gfm 为true）
            // smartLists: true, // 使用比原生markdown更时髦的列表
            // smartypants: false, // 使用更为时髦的标点
        })
    })
    

    let aaa = '### a\n ```javascript\n console.log(a) \n``` '
    
    return(
        <div style={{display: "flex", justifyContent: "space-between"}}>
            {/* <Text /> */}
            <div className={styles.title}>
                <NavCard Chapter={ chapter } Title='学习笔记' propClick={ propClick } />
                <NavCard Chapter={ chapter } Title='表格查询' propClick={ propClick } style={{marginTop:'10px' }} />
            </div>
            <div className={styles.detail}>
                <div className={styles.box}>
                    <div className={styles.boxTitle}>
                        <Title />
                    </div>
                    <div className={styles.bg_c}>
                        <div dangerouslySetInnerHTML={{ __html: marked(aaa) }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}