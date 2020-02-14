import React from 'react';
import {connect} from 'react-redux'

import './cart-item.styles.scss'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <div className='cart-item'>
        <img className='' src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} X ${price}</span>
        </div>
    </div>
)


export default CartItem