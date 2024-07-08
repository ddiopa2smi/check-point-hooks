import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup({ show, handleClose, title, body }) {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {body}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose} size='sm'>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Popup;