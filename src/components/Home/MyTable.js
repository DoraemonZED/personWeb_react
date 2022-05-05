// import 

export default function MyTable(){

    let tables =[
        {
            title: "字体属性",
            th: ["值","属性"],
            tr: [
                ["aligen-content", "规定弹性容器之间的对其方式"],
                ["align-items", "规定弹性容器内项目的对齐方式"],
                ["align-self", "规定弹性容器内所选项目的对齐方式"],
            ]
        }
    ]

    return <>{
        tables.map(( tableItem, tableIndex) => <div key={tableIndex}>
            <h4>{ tableItem.title }</h4>
            <table>
                <thead>
                    <tr>
                        {
                            tableItem.th.map((trItem, trIndex) => <th key={trIndex}>{trItem}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableItem.tr.map((trItem, trIndex) => <tr key={trIndex}>
                            {
                                trItem.map((tdItem, tdIndex) => <td key={tdIndex}>{ tdItem }</td>)
                            }
                        </tr>)
                    }
                </tbody>
            </table>
        </div>)
    }</>
}