import React from 'react';
import {Form} from 'react-bootstrap'

export default function Footer(props) {
    return (
      <footer>
      <Form handleSubmit={props.handleSubmit}/>
      </footer>
    )
}
