import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AllCards from './AllCards'



class CardItem extends React.Component {
    constructor(props) {
    super(props);
    }


    render() { 
        let { id, playgroundImg, name, location, neighborhood, listItemOne, listItemTwo, listItemThree, linkText, link } = this.props.playground;

        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.playground.playgroundImg} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>
                        {location}
                        <br />
                        {neighborhood}
                    </Card.Subtitle>
                        <br />
                    <Card.Link href={link}>Directions</Card.Link>
                        <br /> 
                    <Button variant="primary" onClick={() => this.props.clickMoreDetails(id)}>Click here for more details</Button>
                    </Card.Body>
                </Card>
        </div>
        );
    };
}


export default CardItem;