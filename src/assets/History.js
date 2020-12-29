import React, { Component } from 'react'

export default class History extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <ul><p>History</p>
          {this.props.history.map(match =>(
            <li ><b>{match.result} - </b>User <b>{match.userSelected}</b> VS <b>{match.cpuSelected}</b> CPU</li>
          ))}
        </ul>
            </div>
        )
    }
}
