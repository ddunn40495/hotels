
import React from 'react'
import Form from './Form.js'

class Listing extends React.Component {
  state = {
    formVisible: false
  }

  toggleForm = () => this.setState({ formVisible: !this.state.formVisible })

  render() {
    const { listing, handleDelete, handleUpdate } = this.props
    return (
      <>
        <div className="listing">
          <h3>
            <img src={listing.pic} /><span> Address: {listing.address} {listing.city}, {listing.state} {listing.zip} </span><span>Monthly cost: {listing.rent} </span><span></span><span>category: {listing.category}</span>
          </h3>
          <div className="listing-actions">
            <button onClick={this.toggleForm}>Edit</button>
            <button
              className="delete-button"
              onClick={() => handleDelete(listing)}
            >
              X
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Listing
