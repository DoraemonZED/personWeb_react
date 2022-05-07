import styles from './blog.module.scss'

function Title(){
    return (
        <div className={styles.title}>
            <img alt="" className={styles.bgimg} src={require('@/static/img/head_bg.jpg').default}></img>
            <div className={styles.info}>
                12
            </div>
        </div>
    )
}

export default Title