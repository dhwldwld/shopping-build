import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
    gap: 8px;
    background-color: #fff;
    border-radius: 2px;
    place-items: center;
`
const CartItemImg = styled.div``
const Img = styled.img``
const CartItemName = styled(Link)`
    color: #171717;
    &:hover {
        color: #dd219e;
    }
    @media screen and (max-width: 700px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.6rem;
    }
`
const ItemName = styled.p``
const CartItemPrice = styled.p`
    @media screen and (max-width: 700px) {
        font-size: 0.8rem;
    }
    @media screen and (max-width: 500px) {
        font-size: 0.6rem;
    }
`
const CartItemSelect = styled.select`
    padding: 10px 17px;
    @media screen and (max-width: 700px) {
        padding: 8px 13px;
    }
    @media screen and (max-width: 500px) {
        padding: 5px 8px;
    }
`
const CartItemOption = styled.option``
const CartItemDeleteButton = styled.button`
    padding: 10px 17px;
    color: red;
    background-color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
    transition: all 0.3s ease-out;
    &:hover,
    &:focus,
    &:active {
        background-color: #171717;
        transform: scale(1.2);
    }
    @media screen and (max-width: 700px) {
        padding: 8px 13px;
    }
    @media screen and (max-width: 500px) {
        padding: 5px 8px;
    }
`

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <Container>
            <CartItemImg>
                <Img src={item.imageUrl} alt={item.name} />
            </CartItemImg>

            <CartItemName to={`/product/${item.product}`}>
                <ItemName>{item.name}</ItemName>
            </CartItemName>

            <CartItemPrice>${item.price}</CartItemPrice>
            <CartItemSelect value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map((x) => (
                    <CartItemOption key={x+1} value={x+1}>{x+1}</CartItemOption>
                ))}
            </CartItemSelect>

            <CartItemDeleteButton type='button' onClick={() => removeHandler(item.product)}>
                <FontAwesomeIcon icon={faTrash}/>
            </CartItemDeleteButton>
        </Container>
    )
}

export default CartItem
