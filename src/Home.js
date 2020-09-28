import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-CA_FT_PVD5388._CB406163142_.jpg" alt="" />
                <div className='home_row'>
                    <Product
                        title='Nintendo Switch with Neon Blue and Neon Red Joy‑Con'
                        price={399.99}
                        image="https://m.media-amazon.com/images/I/41DQoLIfsRL._AC_SY200_.jpg"
                        rating={5}
                    />
                    <Product
                        title='NVIDIA Titan RTX Graphics Card'
                        price={3499.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71OpiCVK%2B0L._AC_SX425_.jpg"
                        rating={5}
                    />
                    <Product
                        title='Cyberpunk 2077 PlayStation 4 - Standard Edition'
                        price={79.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/8168dOA2wpL._AC_SX569_.jpg"
                        rating={5}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        title='Xbox Wireless Controller – Cyberpunk 2077 Limited Edition - Xbox One'
                        price={130.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6154ustEyPL._AC_SX679_.jpg"
                        rating={5}
                    />
                    <Product
                        title='Microsoft Windows 10 Home | USB Flash Drive'
                        price={129.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71zXA2YWB7L._AC_SY679_.jpg"
                        rating={5}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        title='Oculus Rift S PC-Powered VR Gaming Headset - Windows'
                        price={549.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71URNvzoWqL._AC_SX679_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
