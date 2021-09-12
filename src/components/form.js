import React, { Component } from "react";
import searchIcon from './images/searchIcon.png';
import './style.css';
import {
  Main,
  Card,
} from './styled';



class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      img: '#',
      abilities: '',
      types: [],
      stats: '',
      id: '',
      descr: '',
      tempname: '',
      hp: '',
      attack: '',
      deffense: ''
    }
  }


  fetchInfo = async () => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
    let data = await res.json()

    let types = [...this.state.types];

    types.push(data.types.map(type => type.type.name + ', '))

    this.setState({
      tempname: ' ' + data.name,
      img: data.sprites.other.dream_world.front_default,
      //types: data.types[0].type.name
      types,
      id: data.id,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      deffense: data.stats[2].base_stat



    })
    let res2 = await fetch(`https://pokeapi.co/api/v2/ability/${this.state.id}`)
    let desc = await res2.json()

    this.setState({

      descr: desc.effect_entries[1].effect

    })
  }





  handleName = event => {
    this.setState({
      name: event.target.value,

    })
  }


  handleSubmit = event => {

    this.fetchInfo()
    //limpiar
    this.setState({
      name: '',
      types: ''
    })
    event.preventDefault()
  }



  render() {
    return (
      <Main>
        <Card>

          <div className="tittle">PokeSearch</div>

          <div className="wrapper">
            <div className="search-input">
              <form onSubmit={this.handleSubmit}>

                <input
                  type="text"
                  placeholder="Label"

                  onChange={this.handleName}
                />

                <div class="icon"><i class="fas fa-search"></i>
                  <button type="submit" className="searchButton" > <img src={searchIcon}></img> </button>
                </div>
              </form>
            </div>
          </div>


          <div className="imagen">
            <img src={this.state.img} />

          </div>
          <div className="h1">No {this.state.id}{this.state.tempname} </div>

          <div className="h2">About</div>

          <div className="description"><p>
            {this.state.descr}
          </p>
          </div>

          <div className="container">
            <div className="card-types">
              <div className="h2">Types
                <p>
                  {this.state.types}
                </p>
              </div>



            </div>


            <div className="card-stats">
              <div className="stats-mini">
                <div className="h2">Stats</div>

                <div className="h3">Stats</div>
                <div className="card-stats"><p>Hp</p></div>
                <div className="card-stats"><p>Attack</p></div>
                <div className="card-stats"><p>Deffense</p></div>

              </div>

              <div className="stats-values">
                <div className="h3">Values</div>
                <div className="card-values"><p>{this.state.hp}</p></div>
                <div className="card-values"><p>{this.state.attack}</p></div>
                <div className="card-values"><p>{this.state.deffense}</p></div>
              </div>



            </div>




          </div>




        </Card>


      </Main>

    );
  }

}


export default Form