import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import './Show.css'

export default class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    }
  }

  //haciendo la llamada a la API
  componentDidMount() {
    let url = `http://api.tvmaze.com/shows?page=1`;
    fetch(url)
    .then(response => response.json())
    .then(json => {
      const shows = json.slice(0,20); //limitando el número de resultados
      console.log(shows)
      this.setState({shows});
    })
  }

  render(){
    return(
      <Row>
        {this.state.shows.map((show, i) => {
          console.log(i,show.network)
          return (
            <Card sm="4" id="show-card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>
                <p>{show.name}</p>
                <p>{show.premiered}</p>
              </CardTitle>
              <CardText>
                {
                  //aquí va el ternary
                  //network in show
                }
                <p>{show.network.id}</p>
                <p><a href={show.officialSite}>Sitio oficial</a></p>
              </CardText>
            </Card>
          )
        })
        }
      </Row>
    )
  }
}