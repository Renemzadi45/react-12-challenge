import React, { Component } from 'react';

class TabSelector extends Component {
  constructor(props) {
    super(props);
    this.handleChangeTab = this.handleChangeTab.bind(this);
  }

  handleChangeTab(event) {
    const buttonId = event.target.id;
    this.props.setId(buttonId);
  }

  render() {
    const activeId = this.props.activeId;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.handleChangeTab}
          className={activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.handleChangeTab}
          className={activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.handleChangeTab}
          className={activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;