import React, { useEffect, useState, useCallback } from 'react';
import './style.sass';

import api from 'api';

// Redux
import { playVideo } from 'redux/actions/player-actions'
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPlus, faPlayCircle, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const GridComponent = () => {
  let [ isLoading, setIsLoading ] = useState(true);
  let [ grid , setGrid] = useState([]) 
  let channel = useSelector( state => state.currentChannel)

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(()=>{
    api.getChannels()
    .then((response)=>{
        setGrid(response.data)
        setIsLoading(false)
    })
    .catch((error) => {
        console.log(error)
    })
  }, [] )

  function generateChannels(){  
    let list = grid.map( (channel, index) =>  
      <ChannelCover  
        key={index} 
        index={index}
        id={channel.channel_id}
        title={channel.title}
        url={channel.media.url}
        isLoading={isLoading}
    />);
    return list;
  }

  const prevCover = () => {
    let last = grid.pop()
    grid.unshift(last)
    forceUpdate(last);
  }

  const nextCover = () => {
    let first = grid.shift()
    grid.push(first)
    forceUpdate(first);
  }

  return(
    <section className="grid">
      <div className="grid-container">
        <div className="grid-title">
          <p>Lista de canales</p>
          <div className="grid-controls">
            <button onClick={() => prevCover()}>
              <FontAwesomeIcon icon={faArrowLeft} size='lg'/>
            </button>
            <button onClick={() => nextCover()}>
              <FontAwesomeIcon icon={faArrowRight} size='lg'/>
            </button>
          </div>
        </div>
        <div className="grid-content">
          {grid && generateChannels()}
        </div>
      </div>
    </section>
  );
};

const ChannelCover = ({index, id, title, url, isLoading}) => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [isHome, setisHome] = useState()

  useEffect(()=>{
    if (window.location.hash === "#/"){
      setisHome(true)
    } else {
      setisHome(false)
    }
  },[window.location.hash])

  const redirectandPlay = () => {
    history.push(`/channel/${id}`)
    dispatch(playVideo(title, url))
  }

  let visible = (index < 5) ? " active" : "";
  let size = isHome ? " large" : "";

  return (
      <div className={ "cover" + visible + size} onClick={ () => redirectandPlay()} >
        { isLoading &&<Skeleton className="skeleton" /> }
        <img 
          alt={id} 
          src={require(`../../assets/images/covers/${id}.jpg`)}
        />
        <div className="play_button">
          <FontAwesomeIcon className="" icon={faPlay} size="2x" color="#fff"/>
        </div>
      </div>
  );
}

export default GridComponent;