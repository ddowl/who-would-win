import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import TitleModal from './TitleModal.jsx'

const Header = (props) => {
  return <div className="Header"><h1>{props.title}</h1></div>;
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Who Would Win?"/>
        <TitleModal/>
      </div>
    );
  }
}

export default App;
