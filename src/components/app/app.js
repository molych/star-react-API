import React, {Component} from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import PlanetDetails from '../planet-details/planet-details';
import StarshipDetails from '../starship-details/startship-details';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: null,
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPeople}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
            {/* <PlanetDetails />
            <StarshipDetails /> */}
          </div>
        </div>
      </div>
    );
  }
}
