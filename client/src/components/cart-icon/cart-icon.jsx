import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartIconContainer } from "./cart-icon.styles";

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();
    const toggleCartHiddenClickHandler = () => dispatch(toggleCartHidden());

    return (
        <CartIconContainer onClick={toggleCartHiddenClickHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{itemCount}</span>
        </CartIconContainer>
    );
};

export default CartIcon;