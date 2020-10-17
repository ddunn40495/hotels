import React from 'react'
import axios from 'axios'
import Aside from './components/Aside.js'
import Footer from './components/Footer.js'
import Header from './components/Header.js'
import Main from './components/Main.js'
import Nav from './components/Nav.js'

class App extends React.Component {
  state = {
    listingss: []
  }

  componentDidMount = () => {}
  getListings = () => {}
  handleAdd = (event, formInputs) => {}
  handleDelete = deletedListing => {}
  handleUpdate = (event, formInputs) => {}
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Aside handleSubmit={this.handleAdd} />
          <Main
            listings={this.state.listing}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
