import React from 'react'
import "./watch.scss"
import { ArrowBackOutlined } from '@material-ui/icons'

function Watch() {
  return (
    <div className='watch'>
    <div className='back'>
      <ArrowBackOutlined />
      Home
    </div>
    <video 
    className='video' 
    autoPlay 
    progress 
    controls 
    src="https://media.istockphoto.com/id/1190952221/video/epic-warriors-duel.mp4?s=mp4-640x640-is&k=20&c=TrRRNCLQQuJOfYymDnV3yVSqOpdgZrWa6II61cnpqWg=" 
    />

    </div>
  )
}

export default Watch