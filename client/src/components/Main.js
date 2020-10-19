import React from 'react'
import Listings from './Listings.js'

function Main(props) {
  const { listings, handleDelete, handleUpdate } = props
    return (
      <main>
        <Listings
         listings={listings}
         handleDelete={handleDelete}
         handleUpdate={handleUpdate}
        />
      </main>
    )
}

export default Main
