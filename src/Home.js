import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_FT_PVD5388._CB406163142_.jpg" alt="" />
            </div>
            <div className='home_row'>
                <Product
                    title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con'
                    price={399.99}
                    image="https://m.media-amazon.com/images/I/41DQoLIfsRL._AC_SY200_.jpg"
                    rating={5}
                />
                <Product />
                <Product />

            </div>
            <div className='home_row'>
                <Product />
                <Product />
            </div>
            <div className='home_row'>
                <Product />
            </div>
        </div>
    )
}

export default Home
