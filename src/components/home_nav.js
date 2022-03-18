import styles from './Home.module.scss'

export default function NavCard(props){

    const { Chapter, style, propClick, navStates, selectNavStates } = props;

    

    return(
        <div className={`${styles.padding} ${ styles.box}`} style={ style } >
            <div className={`${styles.boxTitle} ${styles.boxTitle_height}`}>
                <div className={ navStates===1?styles.active:'' } onClick={ () => selectNavStates(1) }>学习笔记</div>
                <div className={ navStates===2?styles.active:'' } onClick={ () => selectNavStates(2) }>速查表格</div>
            </div>
            <div style={{ paddingLeft: '20px' }}>
                {
                    Chapter.map((item, index)=>{
                        return(
                            <div 
                                onClick={() => propClick(item)} 
                                key={index} 
                                className={styles.titlenav}
                            >{item.title}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}