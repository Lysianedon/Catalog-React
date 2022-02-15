import React, { Component } from 'react'
import films from '../films.json'
import { Link } from 'react-router-dom'
import Home from './Home';

export default class Film extends Component {

    render() {
        return (
            <div>

                <h1 style={{textAlign : "center"}}> ABOUT THE FILM :</h1>
                
                <ul>

                {
                    films.map(film => {

                        if (film.id === parseInt(this.props.match.params.id)) {
                            
                            return <div> 
                                <ul> <li style={{margin : "2%",}}>{film.title}</li>
                                        <li style={{margin : "2%",}}>{film.director}</li>
                                        <li style={{margin : "2%",}}>{film.stars}</li>
                            </ul>

               
                            <Link to="/" style={{margin : "2%", padding : ".6%", border: "solid 1px black", borderRadius : "5px", textDecoration : "none", color: "black"}}> Go Back Home</Link>
                            </div>
                        }

                        return null;
                    })


                }
                
                </ul>

            </div>
        )
    }
}
