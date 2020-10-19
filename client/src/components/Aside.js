import React from 'react'
import Form from './Form.js'

export default function Aside(props) {
    return (
      <aside>
        <Form handleSubmit={props.handleSubmit}/>
      </aside>
    )
}
