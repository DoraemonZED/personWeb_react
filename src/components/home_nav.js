import styles from './Home.module.scss'

export default function NavCard(props){

    const { Chapter, Title, style, propClick } = props

    return(
        <div className={`${styles.padding} ${ styles.box}`} style={ style } >
            <div className={`${styles.boxTitle} ${styles.boxTitle_height}`}>{ Title }</div>
            {
                Chapter.map((item, index)=>{
                    return(
                        <div onClick={() => propClick(item)} key={index} className={styles.titlenav}>{item}</div>
                    )
                })
            }
        </div>
    )
}