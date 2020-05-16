import React from 'react'

import Koopa from '../../img/Koopa.gif';
import Luigi from '../../img/Luigi.gif';
import Mario from '../../img/Mario.gif';
import Peach from '../../img/Peach.gif';
import Toad from '../../img/Toad.gif';
import Yoshi from '../../img/Yoshi.gif';

import axios from 'axios';

const Content = ({ userObject, loading }) => {

    // console.log(userObject);
    // return <h1>hey</h1>

    if (loading) {
        return <div className="d-flex justify-content-center py-4 bg-success">
            <img src={Koopa} className="solar-img" alt="" />
            <img src={Luigi} className="solar-img" alt="" />
            <img src={Mario} className="solar-img" alt="" />
            <img src={Peach} className="solar-img" alt="" />
            <img src={Toad} className="solar-img" alt="" />
            <img src={Yoshi} className="solar-img" alt="" />
        </div>
    } else {
        return (
            <div>
                <div className="infinity">
                    <div className="solar-container">
                        <div className="solar-card-container">
                            {Object.keys(userObject).map(element => {


                                return <div className="solar-card py-3" key={userObject[element].id}>
                                    <h3 className="text-secondary">{userObject[element].name}</h3>
                                    <img src={userObject[element].champion_splash} className="round-img-effect img-150-150-effect" alt="" />
                                    <p className="text-secondary px-5 mt-3">{userObject[element].blurb}</p>
                                    <div className="btn btn-outline-secondary mt-3">See More</div>
                                </div>
                            })}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const makeRequest = async (champion_name) => {
    const { data: { data } } = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.10.3208608/data/en_US/champion/${champion_name}.json`);
    let skins = data[champion_name].skins;
    const skimax = skins.length - 1;
    let randomizer = Math.floor(Math.random() * skimax);
    let num = skins[randomizer].num + '';
    const champion_splash = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion_name}_${num}.jpg`;
    return champion_splash;
}




export default Content
