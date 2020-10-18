import React, { Component } from 'react'
import Input from './Input.js'

class Form extends Component {
  state = {
    name: '',
    age: ''
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(event, {
      name: this.state.name,
      age: this.state.age,
      id: this.state.id
    })
    this.setState({
      name: '',
      age: ''
    })
    if (this.props.listing) {
      this.props.toggleForm()
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={'name'}
          placeholder={'Name'}
          title={'Name'}
          type={'text'}
          value={this.state.name}
          id={'name'}
        />
        <Input
          handleChange={this.handleChange}
          name={'age'}
          placeholder={'Age'}
          title={'Age'}
          type={'number'}
          value={this.state.age}
          id={'age'}
        />
        <input
          type="submit"
          value={this.props.listing ? 'update this listing' : 'add a listing'}
        />
        {this.props.children}
      </form>
    )
  }
}

export default Form
