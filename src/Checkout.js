import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Subtotal';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />


                <div>
                    {/* Asynchronous period where it wont load the user 
                    because it is trying to fetch it from firebase (user not loaded), it will protect from error so hence user? */}
                    {/* Optional Chaining : ? */}
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout_title">
                        Your Shopping Basket
                </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>

    )
}

export default Checkout
