import React from 'react'
import About from './About'
import Listing from './Listing'

export default function DynamicComponent(props) {
  const { contentTitle } = props
  let component = null
  switch (contentTitle) {
    case 'about':
      component = <About />
      break
    case 'listing':
      component = <Listing />
      break
    default:
      return null
  }
  return component
}
