import React, { Component } from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Description from './Components/Description';
import Movie from './movies.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies:[],
      moviesClone:[]
    }
    this.search = this.search.bind(this);
  }
  componentWillMount(){
 
  }
  componentDidMount(){
    //api call garcham
    // this.setState({movies:Movie.movies,moviesClone:Movie.movies});
       fetch('https://yts.am/api/v2/list_movies.json').then(resp => resp.json()).then(data => {
      this.setState({ movies: data.data.movies })
    });
    
  }
  search(e){
      const value = e.target.value;
      // const regex = new RegExp(value,'gi');
      // const newArr = this.state.moviesClone.filter(movie=>regex.test(movie.title));
    fetch(`https://yts.am/api/v2/list_movies.json?query_term=${value}`).then(resp => resp.json()).then(data => {
      if(data.data.movies){
        this.setState({ movies: data.data.movies })
      }
  });
      
  }
  render() {
    return (
      <div className="App">
      <div className = "page-bg"></div>
        <Navbar search = {this.search}/>
        <Body movies = {this.state.movies}/>
    </div>
    );
  }
}

export default App;
