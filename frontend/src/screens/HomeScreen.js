import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

// Components
import Product from '../components/Product'

// Actions
import { getProducts as listProducts } from '../redux/actions/productActions'

const Container = styled.div`
    max-width: 1300px;
    margin: 1rem auto;
`
const Title =styled.h2`
    font-size: 1.5rem;
    color: #171717;
    margin-bottom: 1rem;
    margin-left: 8px;
`
const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    @media screen and (max-width: 1232px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 630px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Homescreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector((state) => state.getProducts);
    const { products, loading, error } = getProducts;
    
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    return (
        <Container>
            <Title>Latest Products</Title>
            <ProductList>
                {loading ? (
                    <h2>Loading...</h2>
                ) : (error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map(product => 
                    <Product 
                        key={product._id}
                        productId={product._id} 
                        name={product.name}
                        price={product.price}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />)
                ))}
            </ProductList>
        </Container>
    )
}

export default Homescreen
