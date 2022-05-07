import styles from './blog.module.scss'

let blognav = [
    {
        id:'',
        title:'',
        sub_title:[{
            id:'',
            title:''
        }]
    },
    {
        id:'',
        title:'',
        sub_title:[{
            id:'',
            title:''
        }]
    },
]

function NavCard(){
    return(
        <div className={styles.navcard}>
            <div></div>
        </div>
    )
}

export default NavCard