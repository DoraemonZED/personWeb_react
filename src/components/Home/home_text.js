import style from './Home.module.scss'

import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from '@codemirror/theme-one-dark';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import React,{ useRef } from 'react';

export default function Text({ closeText, navId, titId, markContent, markTitle }){

    
    let codeValue = ''//保存文章内容
    let titInput = useRef()//获取文章标题

    function getCodevalue(){
        if(codeValue) {
            React.$api.saveBlog({
                content: codeValue,
                title: titInput.current.value,
                navid: navId
            }).then((res) => {
                if(res.code === 200){
                    closeText({navid: navId, titid: res.result})
                }
            })
        }else{
            closeText()
        }
    }

    return(
        <div className={ style.text_bg } >
            <div>
                <input ref={titInput} value={ markTitle } placeholder='文章标题' />
                <CodeMirror
                    style={{'fontSize': '16px', 'flex': '1', 'overflow': 'auto'}}
                    width="100%"
                    height="100%"
                    value={ titId?markContent:'' }
                    theme={ oneDark }
                    onChange={(editor) => { codeValue = editor }}
                    extensions={[markdown({ base: markdownLanguage, codeLanguages: languages })]}
                />
                <div className={style.btn_com}>
                    <button onClick={ () => closeText() }>关闭</button>
                    <button onClick={ getCodevalue }>保存笔记</button>
                </div>
            </div>
        </div>
    )
}