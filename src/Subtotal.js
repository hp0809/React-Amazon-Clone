import React from 'react';
import {useHistory} from 'react-router-dom';
import CurrencyFormat from "react-currency-format";
import './Subtotal.css';
import {useStateValue} from './StateProvider.js';
import {getBasketTotal} from "./reducer.js";

function Subtotal() {
    const [{basket}] = useStateValue();
    const history = useHistory(); 

    return (
        <div className="checkout__subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                    <p>
                    Subtotal ({basket.length}): <strong>{value}</strong>
                    </p>
                    <small className="checkout__subtotal__gift">
                        <input type="checkbox" /> This order contains a gift.
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefex={'$'}
                />

                <button className='checkout__subtotal__proceed'
                    onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
