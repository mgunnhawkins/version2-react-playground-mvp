import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AllCards from './AllCards'



class CardItem extends React.Component {
    constructor(props) {
    super(props);
    }


    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>{this.props.playground.name}</Card.Title>
                    <Card.Text>
                    This is Card Text
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
        </div>
        );
    };
}


export default CardItem;