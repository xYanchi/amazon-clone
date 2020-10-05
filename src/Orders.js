import React, { useEffect, useState } from 'react'
import { db } from './firebase';
import Order from './Order';
import './Orders.css'
import { useStateValue } from './StateProvider';

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();

    //Initial value of empty array
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc') //most recent order at the top
                .onSnapshot(snapshot => (
                    //update(add, delete) in real-time response 
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        }
        else {
            setOrders([])
        }
    }, [user])

    return (
        <div className='orders'>
            <div className="orders_order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
