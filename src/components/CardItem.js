import React, {useState} from 'react';
import Card from 'react-bootstrap';
import Button from 'react-bootstrap';
import './PlaygroundObjects'; 

const CardItem = ({playgroundObjects}) => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>This is a Card Title</Card.Title>
                <Card.Text>
                This is Card Text
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )   
}

export default CardItem;