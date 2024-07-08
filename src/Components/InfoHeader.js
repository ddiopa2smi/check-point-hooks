import React from 'react'
import Alert from 'react-bootstrap/Alert';

export default function InfoHeader(props) {
    return (

        <Alert key='primary' variant={props.variant} style={props.style}>
            {props.children}
        </Alert>
    )
}
