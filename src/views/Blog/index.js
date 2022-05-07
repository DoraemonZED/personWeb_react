// import React,{ useEffect, useState } from 'react'
// import { useHistory, useParams } from 'react-router-dom'
import styles from './blog.module.scss'
import Header from './header'
import Title from './title'
import NavCard from './navcard'

function BlogPage(){
    return(
        <div className={styles.bg}>
            <Header />
            <div className={`${styles.content} ${styles.article}`}>
                <div>
                    <NavCard />
                    <div className={styles.blog}>
                        <Title />                   
                        <div className={styles.blogMd}>
                            <div>1</div>
                            <div>1</div>
                        </div>
                        <div>
                            <div className={styles.footer}>
                                123
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height:'100px',background:'#111' }} className={styles.content}>
            
            </div>
        </div>
    )
}

export default BlogPage