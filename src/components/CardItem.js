import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './PlaygroundObjects'; 

const CardItem = ({playgroundObjects}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const renderCard = playgroundObjects.map(props => {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    This is Card Text
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
        }); 
    return <div>{renderCard}</div>
};

export default CardItem;