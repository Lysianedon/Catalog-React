import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import films from '../films.json'
import Film from '../views/Film'


export default class Home extends Component {
    render() {
        return (
            <div>

                <h1 style={{textAlign : "center", fontSize : "3rem"}}>ACCUEIL</h1>

                <ul style={{display : "flex", 
                flexDirection : "column", 
                justifyContent : "space-around"}}>

                {
                    films.map(film => {
                        return <li style={{margin : "1%",}}><Link to={`/film/${film.id}`} component={Film} 
                        style={{textDecoration : "none", 
                        color: "black", 
                        fontWeight : "bold"}}>{film.title}</Link></li>
                        
                    })
                }
                </ul>
                
            </div>
        )
    }
}
