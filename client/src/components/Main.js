import React from 'react'
import Listings from './Listings.js'

function Main(props) {
  const { people, handleDelete, handleUpdate } = props
    return (
      <main>
        <Listings
         people={people}
         handleDelete={handleDelete}
         handleUpdate={handleUpdate}
        />
      </main>
    )
}

export default Main
