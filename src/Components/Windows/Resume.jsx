import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({windowName, setwindowState}) => {
  return (
    <div>
        <MacWindow windowName={windowName} setwindowState={setwindowState} height='70vh'y='50'>
            <div className='resume-window'>
                <embed src="/Resume.pdf" type="" />
            </div>
        </MacWindow>
    </div>
  )
}

export default Resume