import React, { Component } from 'react'
import Input from './Input.js'

class Form extends Component {
  state = {
    address: '',
    city: '',
    state: '',
    zip: '',
    rent: '',
    pic: '',
    available: '',
    category: ''
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.handleSubmit(event, {
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      rent: this.state.rent,
      pic: this.state.pic,
      available: this.state.available,
      category: this.state.category,
    })
    this.setState({
      address: '',
      city: '',
      state: '',
      zip: '',
      rent: '',
      pic: '',
      available: '',
      category: ''
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
          name={'address'}
          placeholder={'Address'}
          title={'Address'}
          type={'text'}
          value={this.state.address}
          id={'address'}
        />
        <Input
          handleChange={this.handleChange}
          name={'city'}
          placeholder={'City'}
          title={'City'}
          type={'text'}
          value={this.state.city}
          id={'city'}
        />
        <Input
          handleChange={this.handleChange}
          name={'state'}
          placeholder={'State'}
          title={'State'}
          type={'text'}
          value={this.state.state}
          id={'state'}
        />
        <Input
          handleChange={this.handleChange}
          name={'zip'}
          placeholder={'Zip'}
          title={'Zip'}
          type={'number'}
          value={this.state.zip}
          id={'zip'}
        />
        <Input
          handleChange={this.handleChange}
          name={'pic'}
          placeholder={'Pic'}
          title={'Pic'}
          type={'text'}
          value={this.state.pic}
          id={'pic'}
        />
        <Input
          handleChange={this.handleChange}
          name={'available'}
          placeholder={'Available'}
          title={'Available'}
          type={'text'}
          value={this.state.available}
          id={'available'}
        />
        <Input
          handleChange={this.handleChange}
          name={'category'}
          placeholder={'House/apartment'}
          title={'Category'}
          type={'text'}
          value={this.state.category}
          id={'category'}
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
