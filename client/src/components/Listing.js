
import React from 'react';
import Form from './Form.js';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Listing extends React.Component {
  state = {
    formVisible: false
  }

  toggleForm = () => this.setState({ formVisible: !this.state.formVisible })

  render() {
    const { listing, handleDelete, handleUpdate } = this.props
    return (
      <>
          <Card.Img variant="top" src={listing.pic} />
            <Card.Body>
              <Card.Text>
              category: {listing.category} <br />
                Address: {listing.address} <br />
                {listing.city}, {listing.state} {listing.zip} <br />
                Monthly cost: {listing.rent}
              </Card.Text>
              <Button variant="primary" onClick={this.toggleForm}>Edit</Button>
              <Button variant="primary" onClick={() => handleDelete(listing)}>Delete</Button>
            </Card.Body>
      </>
    )
  }
}

export default Listing
