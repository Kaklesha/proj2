import { useRef } from "react";

const VideoPlayer = ()=>{
    const ref = useRef()
    const handlePlay=()=>{
        ref.current.play()
    }
    const handlePause=()=>{
        ref.current.pause()
    }
    return(

<div>
    <button onClick={handlePlay}>Play</button>
    <button onClick={handlePause}>Pause</button>
    <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" 
    ref={ref} 
        width="300px"
        height="500px"
    />
</div>

    )
}

export default VideoPlayer;