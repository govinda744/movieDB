import React from 'react';

class MoviePalatte extends React.Component{
    render(){
        const { title, medium_cover_image,rating} = this.props.movie;
        return(
            <div className = "moviepalatte">
                    <div className = "name">{title}</div>
                <div className="image"><img src={medium_cover_image}/></div>
                <div className = "rating">{rating}</div>
            </div>
        )
    }
}

export default MoviePalatte;