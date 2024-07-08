import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormAdd(handleSubmit) {

    const [newMovie, setNewMovie] = useState({
        titre: '',
        description: '',
        posterURL: '',
        note: 0
    })

    const onInputChange = (e) => {
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name='titre'
                    value={newMovie.titre}
                    onChange={(e) => onInputChange(e)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Rate</Form.Label>
                <Form.Control
                    type="text"
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
                    name='posterURL'
                    value={newMovie.posterURL}
                    onChange={(e) => onInputChange(e)} />
            </Form.Group>

            <Button variant="outline-primary" type='submit' size='sm'>
                Save
            </Button>

        </Form>
    );
}

export default FormAdd;