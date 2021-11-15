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
                    <Card.Img variant="top" src={this.props.playground.playgroundImg} />
                    <Card.Body>
                    <Card.Title>{this.props.playground.name}</Card.Title>
                    <Card.Subtitle>
                        {this.props.playground.location}
                        <br />
                        {this.props.playground.neighborhood}
                    </Card.Subtitle>
                        <br />
                    <Card.Link href={this.props.playground.link}>Directions</Card.Link>
                        <br /> 
                    <Button variant="primary">Click here for more details</Button>
                    </Card.Body>
                </Card>
        </div>
        );
    };
}


export default CardItem;