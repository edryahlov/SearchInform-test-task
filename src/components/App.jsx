import React, {Component} from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import axios from 'axios'

import Departments from './Departments'
import EmployeesList from './EmployeesList'
import EmployeeDetails from './EmployeeDetails'

const saveLocalStorage = data => {
    try {
        localStorage.removeItem('data')
        localStorage.setItem('data',JSON.stringify(data))
        localStorage.getItem('data')
    }
    catch(e) {
        alert(e)
    }
}

class App extends Component {
    componentWillMount() {
        axios.get('http://egenius.rocks/sites/searchinform/api/getData.php')
        .then(response => {
            saveLocalStorage(response.data)
        })
        .catch(response => {
            // console.log('bad response:',response)
        });
    }
    render() {
        return(
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12">
                        <nav className="navbar bg-dark navbar-dark">
                            <Link to="/" className="navbar-brand">SearchInform test task</Link>
                            <ul className="navbar-nav d-none d-sm-block">
                                {this.props.location.pathname !== '/' ? <li className="nav-item"><Link to="/" className="nav-link">Главная страница</Link></li> : null}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 xs-center">
                        <Switch>
                            <Route exact path='/' component={Departments} />
                            <Route path='/departments/:deptId/employees' component={EmployeesList} />
                            <Route path='/departments' component={Departments} />
                            <Route path='/employees/:empId' component={EmployeeDetails} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

export default App