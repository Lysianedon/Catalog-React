import React, { Component } from 'react'
import films from '../films.json'

export default class Home extends Component {
    render() {
        return (
            <div>

                <h1>Accueil</h1>

                {
                    films.map(film => {
                        return <ul>
                            <li>{film.title} </li>
                        </ul>
                    })
                }
                
            </div>
        )
    }
}
