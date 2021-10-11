import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'

const Container = styled.nav`
    width: 100%;
    height: 110px;
    background-color: #171717;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 1rem;
    z-index: 50;
`
const Logo = styled.div``
const Title = styled.h2`
    color: #f4f4f4;
    font-size: 1.4rem;
    cursor: pointer;
    @media screen and (max-width: 500px) {
        font-size: 1rem;
    }
`
const NavBarList = styled.ul`
    display: flex;
    align-items: center;
    @media screen and (max-width: 960px) {
        display: none;
    }
`
const NavBarListItem = styled.li`
    padding-left: 1.5rem;
    & > .cart_link {
            background-color: #333;
            padding: 10px;
            border-radius: 8px;
    }
    & > .cart_link:hover {
        background-color: #dd219e;
        color: #f4f4f4;
    }
`
const SideDrawerItemLink = styled(Link)`
    color: #f4f4f4;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
`
const NavBarListItemCart = styled.span`
    display: flex;
    align-items: center;
    margin-left: 8px;
`
const CartLogoBadge = styled.span`
    width: 30px;
    height: 30px;
    background-color: #f4f4f4;
    border-radius: 50%;
    margin-left: 8px;
    color: #171717;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align : center;
    font-size: 1rem;
`
const HamburgerMenuItem = styled.div`
    width: 100%;
    height: 3px;
    background-color: #f4f4f4;
`
const HamburgerMenu = styled.div`
    width: 30px;
    height: 30px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    &:hover {
        ${HamburgerMenuItem} {
            background-color: #dd219e;
        }
    }
    @media screen and (max-width: 960px) {
        display: flex;
    }
`

const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }
    
    return (
        <Container>
            {/* logo */}
            <Logo>
                <Title>mern shopping cart</Title>
            </Logo>
            
            {/* links */}
            <NavBarList>
                <NavBarListItem>
                    <SideDrawerItemLink to ='/cart' className='cart_link'>
                        <FontAwesomeIcon icon={faShoppingCart} />
                        {/* Icon */}
                        <NavBarListItemCart>
                            Cart
                            <CartLogoBadge>{getCartCount()}</CartLogoBadge>
                        </NavBarListItemCart>
                    </SideDrawerItemLink>
                </NavBarListItem>
                <NavBarListItem>
                    <SideDrawerItemLink to ='/'>
                        Shop
                    </SideDrawerItemLink>
                </NavBarListItem> 
            </NavBarList>

            {/* hamburger menu */}
            <HamburgerMenu onClick={click} >
                <HamburgerMenuItem/>
                <HamburgerMenuItem/>
                <HamburgerMenuItem/>
            </HamburgerMenu>
        </Container>
    )
}

export default Navbar
