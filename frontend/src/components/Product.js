import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 300px;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
    margin: 8px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 1232px) {
        width: 360px;
    }
    @media screen and (max-width: 1115px) {
        width: 330px;
    }
    @media screen and (max-width: 1028px) {
        width: 300px;
    }
    @media screen and (max-width: 950px) {
        width: 400px;
    }
    @media screen and (max-width: 830px) {
        width: 330px;
    }
    @media screen and (max-width: 700px) {
        width: 290px;
    }
    @media screen and (max-width: 630px) {
        width: 450px;
    }
    @media screen and (max-width: 500px) {
        width: 350px;
    }
    @media screen and (max-width: 400px) {
        width: 300px;
    }
`
const ProdcutImg = styled.img`
    height: 170px;
    border-radius: 8px;
`
const ProductInfo = styled.div`
    & > p {
        margin-bottom: 8px;
    }
`
const ProductName = styled.p`
    font-size: 1rem;
    overflow: hidden;
`
const ProductDescription = styled.p`
    font-size: 0.8rem;
`
const ProductPrice = styled.p`
    font-weight: bold;
`
const InfoButton = styled(Link)`
    display: block;
    width: 100%;
    text-align: center;
    color: #171717;
    background-color: #f4f4f4;
    padding: 8px 16px;
    border: 1px solid #171717;
    font-size: 1rem;
    &:hover {
        background-color: #171717;
        color: #f4f4f4;
    }
`

const Product = ({imageUrl, name, price, description, productId}) => {
    return (
        <Container>
            <ProdcutImg src={imageUrl} alt={name} />
            <ProductInfo>
                <ProductName>{name}</ProductName>
                <ProductDescription>
                    {description.substring(0, 100)}...
                </ProductDescription>
                <ProductPrice>${price}</ProductPrice>
                <InfoButton to={`/product/${productId}`}>View</InfoButton>
            </ProductInfo>
        </Container>
    )
}

export default Product
