import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider.js';

function Product({ id, title, image, price, rating, key}) {
   
    const [dispatch] = useStateValue();
    //console.log('this is the basket >>>', basket)

    const addToBasket = () => {
        //dispatch the item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                key: key,
                id: id, 
                title: title,
                image: image,
                price: price, 
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className='product__info'>
                <p className='product__name'>{title}</p>
                <p className='product__price'>{price}</p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i)=> (
                        <p key={key}><span key={key} role="img" aria-label="star">⭐ </span></p>
                        ))}
                </div>
                
            </div>
            <img src={image} alt="product" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
