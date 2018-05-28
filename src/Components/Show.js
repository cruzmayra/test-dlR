import React from 'react';
import { Row, Card, CardTitle, CardText } from 'reactstrap';
import './Show.css'

export default class TvShow extends React.Component {
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
      this.setState({shows});
    })
  }

  render(){
    return(
      <Row>
        {this.state.shows.map((show, i) => {
          let channel = show.network ? show.network.id : 'Sin canal'
          let site = show.officialSite ? <span><a href={show.officialSite}>Sitio oficial</a></span> : <span>Sin sitio oficial :C</span>

          return (
            <Card key={show.id} sm="4" tabIndex="0">
              <img src={show.image.original} alt="" aria-describedby={`show-${show.id}`} tabIndex="-1"/>
              <div id={`show-${show.id}`} className="show-info" tabIndex="-1">
                <CardTitle>
                  <p>{show.name}</p>
                  <p>{show.premiered}</p>
                </CardTitle>
                <CardText>
                  <span>Canal {channel}</span>
                  {site}
                </CardText>
              </div>
            </Card>
          )
        })
        }
      </Row>
    )
  }
}