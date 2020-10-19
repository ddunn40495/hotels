import React from "react";
import axios from "axios";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import testData from "./data/data";

class App extends React.Component {
  state = {
    listings: testData,
  };

  componentDidMount = () => {
    console.log(this.state.listings);
  };
  getListings = () => {};
  handleAdd = (event, formInputs) => {};
  handleDelete = (deletedListing) => {};
  handleUpdate = (event, formInputs) => {};
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header handleSubmit={this.handleAdd} />
          <Main
            listings={this.state.listings}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
