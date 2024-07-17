import React from 'react'
import { useNavigate, useParams } from 'react-router'
import InfoHeader from './InfoHeader';
import { Button, Container } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BandeAnnonce from './BandeAnnonce';


const MovieDetails = () => {

    const navigate = useNavigate();
    const params = useParams();
    const _movie = JSON.parse(localStorage.getItem('movie'));

    return (
        <>
            <Container>
                <InfoHeader variant='primary'
                    style={{ fontWeight: 'bolder', marginTop: '12px' }}>
                    <h2>{params.titre}</h2>
                </InfoHeader>
                <div style={{ textAlign: 'start' }}>
                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={350}
                                    height={400}
                                    alt="171x180"
                                    src={`/${_movie.posterURL}`}
                                />
                                <Figure.Caption>
                                    <h3>{_movie.description}</h3>
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <BandeAnnonce src={_movie.trailerLink} />
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><Button style={{ display: 'block', width: '250px' }} onClick={() => navigate('/')}>Retour</Button></Col>
                        <Col></Col>
                    </Row>

                </div>

            </Container>
        </>

    )
}

export default MovieDetails