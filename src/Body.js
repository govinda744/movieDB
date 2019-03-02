import React from "react";
import Description from './Components/Description';
import Movie from './Components/Movie';

class Body extends React.Component {
    render() {
        return (
            <div className="body">
                <Description />
                <Movie movies = {this.props.movies}/>
            </div>)
    }
}

export default Body;