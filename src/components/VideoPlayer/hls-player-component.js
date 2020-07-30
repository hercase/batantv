import React from 'react';
import PropTypes from 'prop-types';
import Hls from 'hls.js';

class ReactHls extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            playerId : Date.now()
        };
        this.hls = null;
    }

    componentDidUpdate () {
        this._initPlayer();
    }

    componentDidMount () {
        this._initPlayer();
    }

    componentWillUnmount () {
        let { hls } = this;

        if (hls) {
            hls.destroy();
        }
    }

    _initPlayer () {
        if (this.hls) {
            this.hls.destroy();
        }

        let { url, autoplay, hlsConfig } = this.props;
        let { video : $video } = this.refs;
        let hls = new Hls(hlsConfig);

        hls.loadSource(url);
        hls.attachMedia($video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            if (autoplay) {
                $video.play();
            }
        });

        this.hls = hls;
    }

    render () {
        let { playerId } = this.state;
        const { controls, poster, videoProps, isLoading} = this.props;

        return (
                <video 
                    className="video-player"
                    key={playerId} ref="video"
                    id={`react-hls-${playerId}`}
                    controls={controls}
                    poster={poster}
                    width='100%' 
                    height='100%'
                    onCanPlay={() => isLoading(false)}
                    {...videoProps}
                >
                </video>
        )
    }
}

ReactHls.propTypes = {
    url : PropTypes.string.isRequired,
    autoplay : PropTypes.bool,
    hlsConfig : PropTypes.object,
    controls : PropTypes.bool,
    width : PropTypes.number,
    height : PropTypes.number,
    poster : PropTypes.string,
    videoProps : PropTypes.object
}

ReactHls.defaultProps = {
    autoplay : false,
    hlsConfig : {},
    controls : true,
    width : 500,
    height : 375
}

export default ReactHls;