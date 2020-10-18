import React from 'react'
import Listing from './Listing.js'

export default function Listings (props) {
  const { listings, handleDelete, handleUpdate } = props
    return (
      <div>      
        {listings.map(listing => <Listing key={listing.id} listing={listing}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
          />)}
      </div>
    )
}
