import styles from './Home.module.scss'

export default function Home(){

    const chapter = ['css3','JavaScript','HTML5','浏览器','Linux','Unity']

    return(
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className={styles.title}>
                <div className={`${styles.padding} ${ styles.box}`}>
                    <div className={styles.boxTitle}>学习笔记</div>
                    {
                        chapter.map((item, index)=>{
                            return(
                                <div key={index} className={styles.titlenav}>{item}</div>
                            )
                        })
                    }
                </div>
                <div className={`${styles.padding} ${ styles.box}`} style={{ marginTop:'10px' }}>
                    <div className={styles.boxTitle}>学习笔记</div>
                    {
                        chapter.map((item, index)=>{
                            return(
                                <div key={index} className={styles.titlenav}>{item}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.detail}>
                <div className={styles.box}>
                <div className={styles.boxTitle}>标题</div>
                    <div>
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