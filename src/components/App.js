import React, { Component } from 'react';
import '../styles/App.css';
import styled from 'styled-components';
import LinkList from './LinkList';

const Header = styled.div`
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
class App extends Component {

  render() {
    return (
      < LinkList />
    );
  }
}

export default App;
