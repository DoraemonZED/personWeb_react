import styles from './Home.module.scss'
import NavCard from './home_nav.js'
import Title from './home_title.js'
import Text from './home_text.js'
import { useState } from 'react'

export default function Home(){

    const chapter = ['css3','JavaScript','HTML5','浏览器','Linux','Unity']

    function propClick(data){
        console.log(data)
    }

    let [section, setSection] = useState(false)
    
    return(
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <Text />
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
                        <ul>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                            <li>内容</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}