import React, {Component}from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes ={
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }
    //component func은 항상 show something 그래서 render를 꼭 작성해야해
    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
class MoviePoster extends Component {

    static propTypes={
        poster: PropTypes.string.isRequired
    }

    render() {
        return (
            <img src={this.props.poster} alt="Movie poster"/>
        )
    }
}

export default Movie;
