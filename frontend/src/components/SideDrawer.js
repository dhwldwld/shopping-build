import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'

const Container = styled.div`
    width: 70%;
    height: 100vh;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    transform: ${({show}) => {return show ? `translateX(0)` : `translateX(-100%)`}};
    transition: all 0.3s ease-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 960px) {
        display: none;
    }
`
const SideDrawerList = styled.ul`
    display: flex;
    flex-direction: column;
`
const SideDrawerItem = styled.li`
    display: flex;
    align-items: center;
`
const CartLogoBadge = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #171717;
    color: #f4f4f4;
    font-size: 1rem;
    margin-left: 8px;
`
const SideDrawerItemLink =styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex: 1;
    padding: 1rem;
    color: #171717;
    font-size: 1.6rem;
    &:hover {
        background-color: #171717;
        color: #f4f4f4;
        ${CartLogoBadge} {
            background-color: #f4f4f4;
            color: #171717;
        }
    }
`
const SideDrawerItemCart = styled.span`
    display: flex;
    align-items: center;
    margin-left: 8px;
`

const SideDrawer = ({show, click}) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }
    
    return (
        <Container show={show} >
            <SideDrawerList onClick={click}>
                <SideDrawerItem>
                    <SideDrawerItemLink to='/cart'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <SideDrawerItemCart>
                            Cart
                            <CartLogoBadge>{getCartCount()}</CartLogoBadge>
                        </SideDrawerItemCart>
                    </SideDrawerItemLink>
                </SideDrawerItem>
                <SideDrawerItem>
                    <SideDrawerItemLink to='/'>
                        Shop
                    </SideDrawerItemLink>
                </SideDrawerItem>
            </SideDrawerList>
        </Container>
    )
}

export default SideDrawer
