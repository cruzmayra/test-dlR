import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Container.css'

//Components
import Show from './Show'


export default class Contenedor extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12">
            <Show />
          </Col>
        </Row>
      </Container>
    )
  }
}