import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getProductDetails } from '../redux/actions/productActions'
import { addToCart } from '../redux/actions/cartActions'

const Container = styled.div`
    max-width: 1300px;
    margin: 1rem auto;
    display: flex;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`
const ProductScreenLeft = styled.div`
    display: flex;
    flex: 0.8;
    @media screen and (max-width: 960px) {
        flex-direction: column;
        flex: 1;
    }
`
const LeftImg = styled.div`
    margin: 1rem;
    flex: 0.6;
    @media screen and (max-width: 960px) {
        flex: 1;
    }
`
const ProdcutImg = styled.img``
const LeftInfo = styled.div`
    margin: 1rem;
    flex: 0.4;
    background-color: #fff;
    height: fit-content;
    font-size: 0.9rem;
    & > p {
        padding: 1rem;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        &:last-child {
            border: none;
        }
    }
    @media screen and (max-width: 960px) {
        flex: 1;
    }
`
const LeftName = styled.p`
    font-weight: bold;
    font-size: 1.3rem;
`
const LeftPrice = styled.p``
const LeftDescription = styled.p``
const ProductScreenRight= styled.div`
    flex: 0.2;
    @media screen and (max-width: 960px) {
        flex: 1;
        padding: 1rem;
    }
`
const RightInfo = styled.div`
    width: 250px;
    margin: 1rem;
    background-color: #fff;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
    @media screen and (max-width: 960px) {
        width: 100%;
        margin: 0;
    }
`
const InfoWrapper = styled.p`
    padding: 1rem;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    font-size: 0.8rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    &:last-child {
        border: none;
    }
`
const RightPrice = styled.span``
const RightStatus = styled.span``
const AddToCartButton = styled.button`
    grid-column: 1/-1;
    padding: 10px 16px;
    background-color: #171717;
    color: #f4f4f4;
    border: 1px solid #171717;
    cursor: pointer;
`
const ProductScreenSelect = styled.select`
    padding: 10px 16px;
`
const ProductScreenOption = styled.option``

const ProductScreen = ({ match, history }) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if(product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id))
        }
    }, [dispatch, product, match])

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty))
        history.push('/cart');
    }

    return (
        <Container>
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
                <>
                <ProductScreenLeft>
                    <LeftImg>
                    <ProdcutImg src={product.imageUrl} alt={product.name} />
                    </LeftImg>
                    <LeftInfo>
                        <LeftName>{product.name}</LeftName>
                        <LeftPrice>Price: ${product.price}</LeftPrice>
                        <LeftDescription>{product.description}</LeftDescription>
                    </LeftInfo>
                </ProductScreenLeft>
                <ProductScreenRight>
                    <RightInfo>
                        <InfoWrapper>
                            Price: <RightPrice>${product.price}</RightPrice>
                        </InfoWrapper>
                        <InfoWrapper>
                            Status: <RightStatus>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</RightStatus>
                        </InfoWrapper>
                        <InfoWrapper>
                            Qty
                            <ProductScreenSelect value={qty} onChange={(e) => setQty(e.target.value)}>
                                {[...Array(product.countInStock).keys()].map((x) => (
                                    <ProductScreenOption 
                                    key={x+1} 
                                    value={x+1}
                                    >
                                        {x+1}
                                    </ProductScreenOption>
                                ))}
                            </ProductScreenSelect>
                        </InfoWrapper>
                        <InfoWrapper>
                            <AddToCartButton type='button' onClick={addToCartHandler}>Add To Cart</AddToCartButton>
                        </InfoWrapper>
                    </RightInfo>
                </ProductScreenRight>
                </>
            )}
        </Container>
    )
}

export default ProductScreen
