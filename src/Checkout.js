import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal.js';
import {useStateValue} from './StateProvider.js';
import CheckoutProduct from './CheckoutProduct.js';

function Checkout() {
const [{basket, user}] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' 
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
                    alt="advertisment"/>
                <div>
                    <h3>Hello, {user? user?.email : 'Guest'}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map(item =>(
                        <CheckoutProduct
                            
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}

                        />
                    ))}
                </div>
                <div className='checkout__contents'>

                </div>

            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
