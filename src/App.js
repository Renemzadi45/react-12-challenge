import React, { Component } from 'react';
import TabSelector from './TabSelector';
import './App.css';

const Home = () => <p>Welcome to the Home !</p>;
const About = () => <p>About me!</p>;
const Contact = () => <p>Contact us!</p>;
const Error = () => <p>Something went <strong>wrong</strong>!</p>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 'home'
    };
  }
  
  setId = (buttonId) => {
    this.setState({ activeId: buttonId });
  }

  getTabContent() {
    switch(this.state.activeId) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />; 
      default:
        return <Error />;
    }
  }

  render() {
    return (
      <div className="App">
        <TabSelector activeId={this.state.activeId} setId={this.setId}/>
        <div className="App-content">
          {
            this.getTabContent()
          }
        </div>
      </div>
    );
  }
}

export default App;