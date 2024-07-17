import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {

    const { titre, description, posterURL, note, trailerLink } = props;

    const movieDetais = { titre, description, posterURL, note, trailerLink }

    const handleSaveMovie = () => {
        localStorage.setItem('movie', JSON.stringify(movieDetais));
    }

    return (
        <Card style={{ width: '18rem', height: '35rem', marginBlock: '10px' }}>
            <Card.Img variant="top" src={posterURL} />
            <Card.Body>
                <Card.Title>{titre}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link onClick={handleSaveMovie} to={`/details/${titre}`}> Voir details</Link>
            </Card.Body>
            <div style={{ fontWeight: 'bold' }}>{note}</div>
            <div hidden>{trailerLink}</div>
        </Card>
    );
}

export default MovieCard