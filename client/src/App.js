import React from "react";
import axios from "axios";
import Aside from "./components/Aside.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";
import testData from "./data/data";

class App extends React.Component {
  state = {
    listings: testData,
  };

  componentDidMount = () => {
    // axios.get("http://rentals.local/rent").then((response) => {
    //   this.setState({
    //     listings: response.data,
    //   });
    // });
  };
  getListings = () => {};
  handleAdd = (event, formInputs) => {
    axios
      .post("/people", formInputs)
      .then(
        (response) => this.setState({ people: response.data }),
        (err) => console.error(err)
      )
      .catch((error) => console.error(error));
  };
  handleDelete = (deletedListing) => {};
  handleUpdate = (event, formInputs) => {};
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <Aside handleSubmit={this.handleAdd} />
          <Main
            listings={this.state.listings}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
          <Nav />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
