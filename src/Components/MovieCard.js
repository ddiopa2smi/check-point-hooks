import React from 'react'
import Card from 'react-bootstrap/Card';

const MovieCard = (props) => {

    const { titre, description, posterURL, note } = props;

    return (
        <Card style={{ width: '18rem', height: '35rem', marginBlock: '10px' }}>
            <Card.Img variant="top" src={posterURL} />
            <Card.Body>
                <Card.Title>{titre}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>

            </Card.Body>
            <div style={{ fontWeight: 'bold' }}>{note}</div>
        </Card>
    );
}

export default MovieCard