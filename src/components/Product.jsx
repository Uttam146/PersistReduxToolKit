import React from 'react';
import { useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from "react-redux";
import { add } from '../store/slices/cartSlice';
import { getProducts } from '../store/slices/productSlice';
import StatusCode from '../utils/StatusCode';

export default function Product() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.products);
    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
        //     .then(data => data.json())
        //     .then(result => setProducts(result))
        dispatch(getProducts());
    }, []);

    if (status === StatusCode.LOADING) {
        return <Alert key='primary' variant="primary">Loading...</Alert>
    }
    if (status === StatusCode.ERROR) {
        return <Alert key='danger' variant="danger">Something went wrong...</Alert>
    }
    const addToCart = (product) => {
        dispatch(add(product));
    }
    const cards = products.map(product => {
        return (
            <div className="col-md-3" style={{ marginBottom: '10px' }} key={product.id}>
                <Card key={product.id} className="h-100">
                    <div className="text-center">
                        <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                    </div>
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                            INR: {product.price}
                        </Card.Text>
                    </Card.Body>
                    <div className="text-center">
                        <Card.Footer style={{ backgroundColor: 'white' }}>
                            <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
                        </Card.Footer>
                    </div>
                </Card>
            </div>
        )
    })
    return (
        <>
            <h1>All Product</h1>
            <div className="row">
                {cards}
            </div>
        </>
    )
} 