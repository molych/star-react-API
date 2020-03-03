import React, {Component} from 'react';
import SwapiService from '../../services/swapi-service';
import './random-planet.css';

export default class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
  };

 
  componentDidMount(){
   this.updatePlanet();
   this.intervav = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount(){
    clearInterval(this.intervav)
  }

  omPlanetLoaded = planet => {
    this.setState({planet});
  };

  onError = err => {};

  updatePlanet = () => {
    
    const id = Math.floor(Math.random() * 25 + 3);
    this.swapiService
      .getPlanet(id)
      .then(this.omPlanetLoaded)
      .catch(this.onError);
  };

  render() {
  
    const {
      planet: {id, name, population, rotationPeriod, diameter},
    } = this.state;

    return (
      
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="pic"
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}