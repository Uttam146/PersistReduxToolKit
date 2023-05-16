import React from 'react';
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from "react-redux";
import { remove } from '../store/slices/cartSlice';

export default function Cart() {
    const products = useSelector(state => state.cart);
    console.log(products);
    const dispatch = useDispatch();
    const removeFromCart = (id) =>{
        dispatch(remove(id));
    }
    const cards = products.map(product => {
        return (
            <div className="col-md-12" style={{ marginBottom: '10px' }} key={product.id}>
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
                            <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove Item</Button>
                        </Card.Footer>
                    </div>
                </Card>
            </div>
        )
    })
    return (
        <>
            <div className="row">
                {cards}
            </div>
        </>
    )
}