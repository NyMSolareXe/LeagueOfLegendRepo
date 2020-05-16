import React, { Component } from 'react';
import Navbar from './components/Navbar';

import Content from './components/content/Content';

import axios from 'axios';
import ep3 from './ep3.jpg';
import ep4 from './ep4.jpg';
import './App.css';
import './scss/solar.scss';





class App extends Component {

  state = {
    loading: false,
    userObject: [],
  }

  async componentDidMount() {
    this.setState({ loading: true });

    await setTimeout(async () => {
      // const { data } = await axios.get('https://api.github.com/users');
      const { data: { data } } = await axios.get('http://ddragon.leagueoflegends.com/cdn/10.10.3208608/data/en_US/champion.json');


      const solar = await Object.keys(data).forEach(async (champion_name, index, array) => {
        const championArray = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.10.3208608/data/en_US/champion/${champion_name}.json`);
        let champion = championArray.data.data;
        let skins = champion[champion_name].skins;
        const skimax = skins.length - 1;
        let randomizer = Math.floor(Math.random() * skimax);
        let num = skins[randomizer].num + '';
        const champion_splash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_name}_${num}.jpg`;
        data[champion_name].champion_splash = champion_splash;

        if ((array.length - 1) === index) {
          this.setState({ userObject: data, loading: false });
        }
      })



      // this.setState({ userObject: data, loading: false });
    }, 500);

    // console.log('fire');

    // this.setState({ loading: false });
    // this.setState({ userObject: data[0], loading: false });
    // console.log(data[0]);
  }

  render() {

    const { userObject, loading } = this.state;

    return (
      <div className="App" >
        <Navbar title={"Solar"} navimg1={ep3} navimg2={ep4} />
        <Content userObject={userObject} loading={loading} />
      </div>
    );
  }
}

export default App;
