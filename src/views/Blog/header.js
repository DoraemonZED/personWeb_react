import styles from './blog.module.scss'

function Header(){
    return (
        <div className={`${styles.header} ${styles.content}` }>
            <div>
                <div className={styles.nav}>
                    {/* {
                        linkArr.map((item, index) => (
                            <div key={index}>
                                <NavLink className="link" activeStyle={{ color: '#00a1d6' }} to={item.url} exact>
                                    <img alt="" src={item.img} />{item.str}
                                </NavLink>
                            </div>
                        ))
                    } */}
                    <div className={styles.link}>学习笔记</div>
                    <div className={styles.link}>速查表格</div>
                    <div className={styles.search}><img alt="" src={require('@/static/img/sousuo.png').default} /><input type="text" placeholder="搜索" /></div>
                </div>

                <div className={styles.logs}>
                    <div title="12">
                        <p>文章数</p>
                        <span>12</span>
                    </div>
                    <div title="99">
                        <p>阅读数</p>
                        <span>99</span>
                    </div>
                    <div title="6">
                        <p>获赞数</p>
                        <span>6</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header