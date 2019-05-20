import React, { Component as ReactComponent } from "react";
import CharacterList from "./components/CharacterList";
import "./App.css";

class App extends ReactComponent {
  constructor() {
    super();
    this.state = {
      previous: null,
      next: null,
      results: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    if (URL == null) return;
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ previous: data.previous, next: data.next, results: data.results });
        console.log(this.state.next);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>

        <div>
          <div className="ButtonPanel">
            <div>
            {this.state.previous != null && 
                <button className="Button" onClick={() => this.getCharacters(this.state.previous)}>Previous</button>
            }
            </div>
            <div>
            {this.state.next != null && 
                <button className="Button" onClick={() => this.getCharacters(this.state.next)}>Next</button>
            }
            </div>
          </div>
          <CharacterList characterList={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
