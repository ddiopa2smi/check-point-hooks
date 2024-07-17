import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { films } from '../films';
import MovieCard from './MovieCard';
import SearchZone from './SearchZone';
import InfoHeader from './InfoHeader';
import Popup from './Popup';
import { Button, Form } from 'react-bootstrap';

const MovieList = () => {

    const [moviesFilter, setMoviesFilter] = useState([]);
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState(null);
    const [rate, setRate] = useState(null);


    const [newMovie, setNewMovie] = useState({
        titre: '',
        description: '',
        posterURL: 'img/avatar.avif',
        note: 5
    })

    useEffect((data) => {
        data = [...films];
        setMoviesFilter(data);

    }, []);

    const handleClose = () => {
        setShow(false);

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const _newMovie = newMovie;
        console.log(_newMovie);
        films.push(_newMovie);

        setShow(false);
    }

    // const addMovie = () => {
    //     films.push(newMovie);
    // }



    const handleShow = () => setShow(true);

    const handleFilterByTitle = (e) => {
        setTitle(null)
        if (rate !== '') { setRate('') }

        //
        let val = e.target.value;

        //conversion de la recherche en minuscule
        const val_min = val.toLowerCase();

        const listFilter = [...films].filter(film => {
            // conversion du titre du film en minuscule pour eviter les problemes de casse
            const titreFilmMinuscule = film.titre.toLowerCase();
            return titreFilmMinuscule.includes(val_min)
        });

        setMoviesFilter(listFilter)

    }
    const handleFilterByRate = (e) => {

        setRate(null)
        if (title !== '') { setTitle('') }
        let val = e.target.value;

        if (val !== '') {
            const listFilterRate = [...films].filter(film => {

                const valRate = film.note.toString();
                return valRate === val
            });

            setMoviesFilter(listFilterRate)
        } else {
            setMoviesFilter([...films])
        }


    }

    const onInputChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
    }

    const form = (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    size="sm"
                    required
                    type="text"
                    name='titre'
                    value={newMovie.titre}
                    onChange={(e) => onInputChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Rate</Form.Label>
                <Form.Control
                    size="sm"
                    required
                    min={5}
                    max={10}
                    type="number"
                    name='note'
                    value={newMovie.note}
                    onChange={(e) => onInputChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" as="textarea" style={{ height: '100px' }}
                    name='description'
                    value={newMovie.description}
                    onChange={(e) => onInputChange(e)} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Poster</Form.Label>
                <Form.Control type="file"
                    size="sm"
                    name='posterURL'
                // value={newMovie.posterURL}
                // onChange={(e) => onInputChange(e)}
                />
            </Form.Group>

            <Button variant="outline-primary" type='submit' size='sm'>
                Save
            </Button>

        </Form>)

    return (
        <div>
            <Container>
                <InfoHeader variant='primary'
                    style={{ fontWeight: 'bolder', marginTop: '12px' }}>
                    <h3>Liste des films</h3>
                </InfoHeader>
                <SearchZone
                    onchangeTitle={handleFilterByTitle}
                    onchangeRate={handleFilterByRate}
                    handleShow={handleShow}
                    title={title}
                    rate={rate}
                />

                <Row style={{ padding: '10px' }}>
                    {moviesFilter.map((f) =>
                        <Col sm={12} md={6} xs={4} xl={3}>
                            <MovieCard
                                titre={f.titre}
                                description={f.description}
                                posterURL={f.posterURL}
                                note={f.note}
                                trailerLink={f.trailerLink}
                            />
                        </Col>
                    )}
                </Row>

            </Container>
            <Popup
                show={show}
                handleClose={handleClose}
                title='Add New Movie'
                body={form}

            />
        </div>
    )
}

export default MovieList