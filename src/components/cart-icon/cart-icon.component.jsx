import React from 'react';

import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


import './cart-icon.styles.scss';

function CartIcon({toggleCartHidden}) {
    return (
        <div className="cart-icon">
            <ShoppingIcon onClick={toggleCartHidden} className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch({ type: 'TOGGLE_CART_HIDDEN' })
    }
}

export default connect(null, mapDispatchToProps)(CartIcon)
