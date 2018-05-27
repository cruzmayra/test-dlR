import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    let url = `http://api.tvmaze.com/shows?page=1`;
    fetch(url)
    .then(response => response.json()).then(json => {
      console.log(json)
    })
  }

  render(){
    return(
      <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>  
          <h2>Title</h2>
          <p>Año</p>
        </CardTitle>
        <CardText>
          <p>Canal</p>
          <p>Sitio oficial</p>
        </CardText>
      </Card>
    </div>
    )
  }
}