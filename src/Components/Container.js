import React from 'react';
import { Container} from 'reactstrap';
import './Container.css'

//Components
import TvShow from './Show'


export default class Contenedor extends React.Component {
  render() {
    return (
      <Container tabIndex="-1">
        <TvShow />
      </Container>
    )
  }
}