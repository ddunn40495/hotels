import React from 'react'
import Listing from './Listing.js'

export default function Listings (props) {
  const { listings, handleDelete, handleUpdate } = props
    return (
      <div>
        {listings.map(person => <Listing key={person.id} person={person}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
          />)}
      </div>
    )
}
