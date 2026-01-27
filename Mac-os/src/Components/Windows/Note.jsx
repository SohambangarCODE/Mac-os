import React, { useEffect, useState } from 'react'
import './note.scss'
import MacWindow from './MacWindow'
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Note = () => {
    const [markdown, setmarkdown] = useState(null)
    const getData = async() =>{
        const response = await fetch('/Note.txt')
        const text = await response.text()
        setmarkdown(text)
    }
    useEffect( ()=>{
        getData()
    },[])
  return (
    <MacWindow>
        <div className='note-window'>
            {markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter>:<p>Loading...</p>}
        </div>
    </MacWindow>
  )
}

export default Note