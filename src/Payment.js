import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import axios from './axios';

function Payment() {
    const [{ user, basket }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a user
        const getClientSecret = async () => {
            //axios is get request or post request
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                // $ => cents. Hence *100
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        //Stripe
        event.preventDefault();
        //Prevents the Buy Now btn to be clicked multiple times
        setProcessing(true);
        //clientSecret: how much to pay
        const payload = await stripe.confirmCardPayment(clientSecret, {
            //the card
            payment_method: {
                //find the card
                card: elements.getElement(CardElement)
            }
            //paymentIntent is the payment confirmation
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders');
        })


        // const payload = await stripe
    }
    const handleChange = e => {
        //Listen for changes in the CardElement
        // and display any errors as the user types their credit card
        setDisabled(Event.empty);
        setError(Event.error ? Event.error.message : "");
    }
    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                {/* Payment section - Delivery address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        {/* ? to protect it from loading an undefined user */}
                        <p>{user?.email}</p>
                        <p>22 React Street</p>
                        <p>Montreal, QC</p>
                    </div>
                </div>

                {/* Payment section - Review items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment_items">
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


                {/* Payment section - Payment method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stripe functionality */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> :
                                        "Buy Now"}</span>
                                </button>
                            </div>
                            {/* Error for Card*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment
