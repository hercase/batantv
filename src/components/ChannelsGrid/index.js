import React, { useEffect, useState } from 'react';
import './style.sass';

import api from 'api';

// Redux
import { playVideo } from 'redux/actions/player-actions'
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const GridComponent = () => {
  let [response, setResponse] = useState([]);
  let [ isLoading, setIsLoading ] = useState(true);
  let channel = useSelector( state => state.currentChannel)

  useEffect(()=>{
    api.getChannels()
    .then((response)=>{
        setResponse(response.data)
        setIsLoading(false)
    })
    .catch((error) => {
        console.log(error)
    })

  }, [channel] )

  function generateChannels(){
    let list = response.map( (channel, index) =>  
      <Channel  key={index} 
                id={channel.channel_id}
                title={channel.title}
                url={channel.media.url}
                isLoading={isLoading}
    />);
    return list;
  }

  return(
    <section className="grid">
      <div className="grid-container">
        <div className="grid-title">
          <p>Lista de canales</p>
          <div className="grid-controls">
            <FontAwesomeIcon icon={faArrowLeft} size='xs' />
            <FontAwesomeIcon icon={faArrowRight} size='xs' />
          </div>
        </div>
        <div className="grid-channels">
          {response && generateChannels()}
        </div>
      </div>
    </section>
  );
};

const Channel = ({id, title, url, isLoading}) => {
  const history = useHistory();
  const dispatch = useDispatch()

  const redirectandPlay = () => {
    history.push(`/channel/${id}`)
    dispatch(playVideo(title, url))
  }

  return (
      <div className={ isHome() ? "channel" : "channel small" } onClick={ () => redirectandPlay()} >
        { isLoading &&<Skeleton className="skeleton" /> }
        <img 
          alt={id} 
          src={require(`../../assets/images/covers/${id}.jpg`)}
        />
      </div>
  );
}

const isHome = () => {
  let response = ( window.location.pathname === "/" ) ? true : false;
  return response;
}

export default GridComponent;