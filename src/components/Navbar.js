import React from 'react'
import PropTypes from 'prop-types'



const Navbar = ({ navimg1, navimg2, title }) => {
    return (
        <div className="infinity">
            <div className="solar-container">
                <div className="navigation">

                    <div>
                        <img src={navimg1} alt="irelia" />
                    </div>


                    <div className="center">
                        <h2>{title} Entertainment</h2>
                        <ul>
                            <li>
                                <a className="hover-gold" href="Solar">Home</a>
                            </li>
                            <li>
                                <a className="hover-gold" href="Solar">About</a>
                            </li>
                            <li>
                                <a className="hover-gold" href="Solar">Contact</a>
                            </li>



                        </ul>
                    </div>

                    <div id="img2">
                        <img src={navimg2} alt="caitlyn" />
                    </div>



                </div>
            </div>
        </div>
    )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    navimg1: PropTypes.string.isRequired,
    navimg2: PropTypes.string.isRequired
}


export default Navbar
