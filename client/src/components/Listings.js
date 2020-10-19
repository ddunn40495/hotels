import React from 'react';
import Listing from './Listing.js';
import {CardDeck} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

export default function Listings (props) {
  const { listings, handleDelete, handleUpdate } = props
    return (
      <CardDeck>
      <Card style={{ width: '23rem'}}>
        {listings.map(listing => <Listing key={listing.id} listing={listing}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
          />)}
            </Card>      
      </CardDeck>
    )
}
