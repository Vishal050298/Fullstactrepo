import React from 'react'
import heroimg from './images/hero.jpg';

const Home = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', overflow:'hidden', marginTop:'10px'}}>
            
            <img src={heroimg} alt='Help-Desk'/>

        </div>
    )
}

export default Home