import React, { useEffect, useState } from "react";
import './style.sass'
import ReactHls from './hls-player-component';
import { Element } from 'react-scroll';
import Skeleton from 'react-loading-skeleton';

//Redux
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";

const VideoComponent = () => {
  const [ isLoading, setIsLoading ] = useState();
  const currentPlaying = useSelector(state => state.currentPlaying);
  
  useEffect(()=>{
    setIsLoading(true)
  }, [currentPlaying])

  const isHLS = (url) => {
    let isHLS = false;
    let lastPart = url.substr(url.lastIndexOf('.') + 1);
    if (lastPart === "m3u8") { 
      isHLS = true
    } 
    return isHLS;
    }

  return (
    <Element name="video-player">
      <h1 className="video-title">{currentPlaying.title}</h1>
      <div className="video-container">
        { isLoading && <Skeleton className="skeleton" height='100%' />}
        <div className="video-component">
          {( isHLS( currentPlaying.url )) ?
            <ReactHls 
              className="video-player" 
              url={currentPlaying.url} 
              autoplay
              isLoading={setIsLoading}
            />
            :
            <ReactPlayer 
              className="video-player" 
              controls={true} 
              url={ currentPlaying.url } 
              width='100%' 
              height='100%'
              onReady={() => setIsLoading(false)}
              /> 
          }
        </div> 
    </div>  
    </Element>
  )};

export default VideoComponent;
