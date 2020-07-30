import React from 'react';
import 'assets/styles/style.sass';
import { Switch,  Route, HashRouter } from "react-router-dom";

//Redux
import { useDispatch } from 'react-redux';
import { clearChannel } from 'redux/actions/channel-actions';

//Components
import Header from 'components/Header'
import Grid from 'components/ChannelsGrid'
import Channel from  'components/ChannelLayout'
import Recommended from  'components/RecommendedVideos'
import Footer from 'components/Footer'

function App() {
  return (
    <HashRouter>
        <Header />
        <Grid />
        <Switch>
          <Route exact path="/">
            <Home />
            <Recommended />
          </Route>
          <Route path="/channel/canal-universidad">
            <Channel id='canal-universidad' />
          </Route>
          <Route path="/channel/canal41-xfn">
            <Channel id='canal41-xfn' />
          </Route>
          <Route path="/channel/magazine-empresario">
            <Channel id='magazine-empresario' />
          </Route>
          <Route path="/channel/batancoop">
            <Channel id='batancoop' />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
  );
}

const Home = () => {
  const dispatch = useDispatch();

  dispatch( clearChannel() )

  return (
    <section className="content">
        <div className="container">
          <div className="about">
            <div className="about-image-box">
                <img src={require('./assets/images/content-image.png')} alt="Family Cover" />
            </div>
            <div>
              <h2 className="title">Una nueva version de TV </h2>
              <h3 className="sub-title">Más flexible, donde vos quieras...</h3>
              <hr />
              <p>Cambió la forma de comunicarnos, de aprender, de escuchar música, de ver tele. Viajamos más rápido y elegimos entre miles de opciones. No esperamos en la vereda a un auto que nos lleve, o una semana para el próximo capítulo. Descubrimos música todo el tiempo y compartimos todo con amigos. Elegimos qué, cuándo y dónde. Y esa elección nos libera. Todo esto tenía que llegar algún día a la forma en que manejás tu contenido. </p>
              <p>¿Recuerdas cuando ver televisión tenía un horario y un día fijo y la única forma de hacerlo era sentado en el sofá enfrente del televisor en tu casa? Sí, la prehistoria.</p>
              <p>A veces los límites no están más que para ser sobre pasados.</p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default App;
