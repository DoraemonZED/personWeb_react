import style from './Home.module.scss'

import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from '@codemirror/theme-one-dark';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import React from 'react';

export default function Text(props){
    const { modelState } = props
    
    let codeValue = ''

    // let [active, setActive] = useState(false)
    function getCodevalue(){
        console.log(codeValue)
        React.$api.saveBlog({content: codeValue}).then((res) => {
            if(res.code === 200){
                modelState(false, res.result)
            }
        })
    }

    return(
        <div className={ style.text_bg } >
            <div>
                <input placeholder='文章标题' />
                <CodeMirror
                    style={{'fontSize': '16px', 'flex': '1', 'overflow': 'auto'}}
                    width="100%"
                    height="100%"
                    theme={ oneDark }
                    onChange={(editor) => { codeValue = editor }}
                    extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
                />
                <div className={style.btn_com}>
                    <button onClick={ getCodevalue }>保存笔记</button>
                </div>
            </div>
        </div>
    )
}