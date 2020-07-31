import React, { useEffect, useState } from 'react';
import api from 'api';
import './style.sass';
import moment from 'moment';
import 'moment/locale/es'
import { useSelector, useDispatch } from 'react-redux';
import { playVideo } from 'redux/actions/player-actions';
import { scroller } from 'react-scroll';

const RelatedComponent = () => {
  const [ resp, setResp ] = useState();
  const channel = useSelector(state => state.currentChannel)
  const dispatch = useDispatch()

  useEffect(() => {

    api.getChannelsPreviewsById(channel.media.youtube_id) // Ej: UCPJt1Ugnfq-ZcoXsbWziafw
      .then(res => {
      if (!channel.media.url) {
        let lastVideo = res.data.shift();
        let title = lastVideo.title
        let url = generateYoutubeLink(lastVideo.videoId);
        dispatch( playVideo(title, url) )
        setResp(res.data);
      } else {
        setResp(res.data);
      }
      })
      .catch(err => console.error('Youtube', err))

  },[channel, dispatch]);

  function generateGrid(){
      let list;
      if ( resp ){
        list = resp.map( (item, index) => 
          <VideoPreview
            key={index}
            title={ item.title }
            thumbnails={item.thumbnails.medium.url}
            publishedAt={item.publishedAt}
            videoId={item.videoId}
          /> 
        );
      } else {
        list = 'Cargando...';
      }
    return list;
  }

  return (
    <div className="related">
      <div className="related-grid">
        { resp && generateGrid() }
      </div>
    </div>
  );
}

const VideoPreview = ({index, title, thumbnails, publishedAt, videoId}) => {
  const dispatch = useDispatch();
  let url = generateYoutubeLink(videoId);

  const scrollType = {
    duration: 500,
    delay: 500,
    smooth: true, // linear “easeInQuint” “easeOutCubic” 
    offset: -10,
  };

  const startPlayer = () => {
    dispatch( playVideo(title, url))
    scroller.scrollTo("video-player", scrollType);
  }

  return (
      <div className="video-preview" key={index} onClick={ () => startPlayer() }>
        <span className="video-preview-title">{title}</span>
        <img className="video-preview-image" alt={title} src={thumbnails} />
        <span className="video-preview-date">{ moment(publishedAt).locale('es').format('LL') }</span>
      </div>
  );
}

const generateYoutubeLink = (youtubeID) => {
  let url = `https://www.youtube.com/embed/${youtubeID}`
  return url;
}

export default RelatedComponent;