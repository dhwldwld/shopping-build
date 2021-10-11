import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// Components
import CartItem from '../components/CartItem'

// Actions
import { addToCart, removeFromCart } from '../redux/actions/cartActions'

const Container = styled.div`
    display: flex;
    max-width: 1300px;
    margin: 2rem auto;
    @media screen and (max-width: 1320px) {
        max-width: 900px;
    }
    @media screen and (max-width: 960px) {
        max-width: 800px;
        flex-direction: column;
    }
`
const CartScreenLeft = styled.div`
    flex: 0.7;
    margin-right: 1rem;
    background-color: transparent;
    padding: 1rem;
    @media screen and (max-width: 960px) {
        margin: 0;
    }
`
const Title = styled.h2`
    margin-bottom: 1rem;
`
const CartScreenRight = styled.div`
    flex: 0.3;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
    height: fit-content;
    @media screen and (max-width: 960px) {
        margin: 1rem;
    }
`
const CartScreenInfo = styled.div`
    border-bottom: 1px solid rgba(0,0,0,0.2);
    padding: 1rem;
`
const CartScreenInfoDetail = styled.p`
    padding: 8px;
`
const CheckOutButtonWrapper = styled.div`
    padding: 1rem;
`
const CheckOutButton = styled.button`
    padding: 10px 17px;
    width: 100%;
    background-color: #171717;
    color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }
`

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty))
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => (item.price * item.qty) + price, 0)
    }

    return (
        <Container>
            <CartScreenLeft>
                <Title>Shopping Cart</Title>
                {cartItems.length === 0 ? (
                    <div>
                        your cart is empty <Link to='/'>Go Back</Link>
                    </div>
                ) : cartItems.map(item => 
                <CartItem 
                    key = {item.product}
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeHandler = {removeHandler}
                />)}
            </CartScreenLeft>
            <CartScreenRight>
                <CartScreenInfo>
                    <CartScreenInfoDetail>Subtotal ({getCartCount()}) items</CartScreenInfoDetail>
                    <CartScreenInfoDetail>${getCartSubTotal().toFixed(2)}</CartScreenInfoDetail>
                </CartScreenInfo>
                <CheckOutButtonWrapper>
                    <CheckOutButton>Proceed To Checkout</CheckOutButton>
                </CheckOutButtonWrapper>
            </CartScreenRight>
        </Container>
    )
}

export default CartScreen
