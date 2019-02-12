import React, { Component } from 'react';
import styled from 'styled-components';
import LinkList from './LinkList';
import CreateLink from './CreateLink';

const Header = styled.div`
  background-color: accent-4;
  min-height: 100vh;
  color: black;
`
class App extends Component {

  render() {
    return (<Header><CreateLink /></Header>)
  }

  // render() {
  //   return (
  //     <Header>
  //       <LinkList/>
  //     </Header>
  //   );
  // }
}

export default App;
