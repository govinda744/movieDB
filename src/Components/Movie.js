import React from  'react';
import MoviePalatte from './MoviePalatte';

export default class Movie extends React.Component{
    render(){
        return (
            <div className = "movies">
                {this.props.movies.map((movie)=>(
                    <MoviePalatte movie = {movie}/>
                ))}
            </div>
        )
    }
}