import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Departaments extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: JSON.parse(localStorage.getItem('data'))
        }
    }
    render() {
        return(
            <div>
                <h3 className="mb-5">Отделы:</h3>
                <ul>
                    {this.state.data.departments.map(el => <li key={el.id}><Link to={`/departments/${el.id}/employees`}>{el.name}</Link></li>)}
                </ul>
            </div>
        )
    }
}

export default Departaments