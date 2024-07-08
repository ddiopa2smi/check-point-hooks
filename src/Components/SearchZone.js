import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';


function SearchZone({ onchangeTitle, onchangeRate, handleShow, title, rate }) {


    return (
        <>
            <Stack direction="horizontal" gap={4} style={{ padding: '10px' }}>
                <Form.Control className="me-auto" value={title} placeholder="Rechercher par titre..." onChange={onchangeTitle} />
                <Form.Control className="me-auto" value={rate} placeholder="Rechercher par note..." onChange={onchangeRate} />
                <Button variant="secondary" onClick={handleShow}>New</Button>
            </Stack>
        </>

    )
}


export default SearchZone
