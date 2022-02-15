import React, { Component } from 'react'
import films from '../films.json'
import { Link } from 'react-router-dom'
import Home from './Home';

export default class Film extends Component {

    constructor(){
        super();

        this.state = {

            title : "",
            director : "",
            stars : null,
            description : "",
            image : "",
        }
    }

    componentDidMount(){

        const film = films[(this.props.match.params.id) - 1]
        console.log("film : ",film);
        
        this.setState({
            title : film.title,
            director : film.director,
            stars : film.stars,
            description : film.description,
            image : film.image,
        })

    }

    render() {
        return (
            <div>

                <h1 style={{textAlign : "center", fontSize : "3rem"}}> ABOUT THE FILM :</h1>
                
                {/* METHOD 1 : USING A MAP METHOD TO FIND THE GOOD FILM AND THEN RETURN THE MOVIE INFO */}
                {/* <ul>

                {
                    films.map(film => {

                        if (film.id === parseInt(this.props.match.params.id)) {
                            
                            return <div> 
                                <ul> <li style={{margin : "2%",}}> Title : {film.title}</li>
                                        <li style={{margin : "2%",}}>Director : {film.director}</li>
                                        <li style={{margin : "2%",}}>Casting : {film.stars}</li>
                            </ul>
               
                            <Link to="/" style={{margin : "2%", 
                            padding : ".6%", 
                            border: "solid 1px black", 
                            borderRadius : "5px", 
                            textDecoration : "none", 
                            color: "black"}}> Go Back Home</Link>
                            </div>
                        }

                        return null;
                    })
                }
                
                </ul> */}
    
            {/*-------------- METHOD 2 : GETTING THE ELEMENTS VIA THE COMPONENTDIDMOUNT -------------- */}

                <ul> <li style={{margin : "2%",}}> Title : {this.state.title}</li>
                                        <li style={{margin : "2%",}}>Director : {this.state.director}</li>
                                        <li style={{margin : "2%",}}>Casting : {this.state.stars}</li>
                                        <li> Synopsis : {this.state.description}</li>
                                        <img src={this.state.image} alt="image movie" />
                            </ul>

                <Link to="/" style={{margin : "2%", 
                        padding : ".6%", 
                        border: "solid 1px black", 
                        borderRadius : "5px", 
                        textDecoration : "none", 
                        color: "black"}}> Go Back Home</Link>
            </div>
        )
    }
}
