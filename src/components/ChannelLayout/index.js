import React, { useEffect, useState } from 'react';
import VideoComponent from '../VideoPlayer/video-component';
import './style.sass';
import RelatedComponent from './related-component';
import api from 'api';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { setChannel } from 'redux/actions/channel-actions';
import { playVideo } from 'redux/actions/player-actions';
import { scroller } from 'react-scroll';

const ChannelComponent = ({ id }) => {
  let [ isLoading, setIsLoading ] = useState(true);
  const dispatch = useDispatch()
  const channel = useSelector( state => state.currentChannel)

  const scrollType = {
    duration: 500,
    delay: 50,
    smooth: true, // linear “easeInQuint” “easeOutCubic” 
    offset: -10,
  };

  useEffect(() => {
    getChannel();
    setTimeout(()=>{
      scroller.scrollTo("video-player", scrollType);
    },1000)
  },[id]);
  

  const getChannel = ( ) => {
    api.getChannelById(id)
    .then((response)=>{
        let resp = response.data[0]
        dispatch( setChannel(resp) )
        dispatch( playVideo(resp.title, resp.media.url) )
        setIsLoading(false)
    })
    .catch((error) => {
        console.warn(error)
    })
  }

  return (
    <section className="channel">        
      <div className="channel-container">
        { !isLoading && <>
          <VideoComponent />
          <div className="description-container">
            <h1 className="description-title"> { channel.title } </h1>
            <span className="description-text"> { channel.description } </span>
          </div>
          <RelatedComponent />
        </> } 
    </div>
  </section>
  );
}

export default ChannelComponent;