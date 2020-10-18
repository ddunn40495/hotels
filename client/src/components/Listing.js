
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
            <span> {listing.address}</span> <span>{listing.city}</span>
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
