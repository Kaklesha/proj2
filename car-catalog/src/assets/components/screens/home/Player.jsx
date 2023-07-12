import  React  from 'react'

const VideoPlayer = ({ src , ...props})=>{
    const ref = React.useRef();
const handlePlay =()=>{
    ref.current.play();
};
const handlePause=()=>{
    ref.current.pause();
};

return(

    <div>

        <button onClick={handlePlay}> Play</button>
        <button onClick={handlePause}>Pause</button>
        <video src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' 
        ref={ref} 
        width='300'
        
        />

    </div>  

)

}

export default VideoPlayer 