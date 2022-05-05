import styles from './Home.module.scss'
import { useParams } from 'react-router-dom'

export default function Title({ myEdit, blogTitle, propClickTit }){

    const params = useParams()

    return(
        <div className={ styles.home_title }>
            <div className={styles.section_icon}>
                <i className='iconfont icon-liebiao' style={{ fontSize: '23px' }}></i>
                <div>
                    <span></span>
                    <div>
                        <div style={{ fontWeight: '500' }}>
                           { blogTitle.map((val, index) => 
                            <div 
                                style={{ padding: '5px 10px', cursor: 'pointer' }} 
                                key={index}
                                className={val._id===params.t?styles.activeTitle:null}
                                onClick={() => propClickTit(val) }
                                >{ val.title }</div>) }
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.main_title}>
                <h3>VUE中传参的几种方式</h3>
                <span>&nbsp;&nbsp;已完结&nbsp;<span>更新于: 2022-2-21</span></span>
            </div>
            <div className={ styles.handle }>
                <i title="编辑" onClick={() => myEdit(true)}  className='iconfont icon-bianji'></i>
                <i title="点赞" className='iconfont icon-dianzan'></i>
                <i title="删除" className='iconfont icon-shanchu'></i>
                <i title='分享' className='iconfont icon-fenxiang'></i>
            </div>
        </div>
    )
}