import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class EmployeesList extends Component {
    constructor(props) {
        super(props)
        
        const data = JSON.parse(localStorage.getItem('data'))
        const deptId = +this.props.match.params.deptId

        this.state = {
            data,
            deptId,
            department: data.departments.find(el => el.id === deptId),
        }
    }
    render() {
        return(
            <div>
                <h3>Список сотрудников</h3>
                <p className="mb-5"><Link to={`/departments`}>&larr; вернуться к списку отделов</Link></p>
                <ul>
                    {this.state.department.employees.map((el,i) => {
                        let emp = this.state.data.employees.find(filtered => filtered.id === el)
                        return <li key={i}><Link to={`/employees/${emp.id}`}>{emp.name}</Link></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default EmployeesList