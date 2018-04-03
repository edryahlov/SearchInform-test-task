import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Dropzone from 'react-dropzone'
import axios from 'axios'

class EmployeesDetails extends Component {
    constructor(props) {
        super(props)

        const empId = +this.props.match.params.empId
        const data = JSON.parse(localStorage.getItem('data'))

        this.state = {
            previewImage: '',
            loadedImage: '',
            empId,
            employee: data.employees.find(el => el.id === empId)
        }
    }
    onDrop = (files, reject) => {
        if (reject.length === 0) {
            this.setState({previewImage: files[0].preview})

            const formData = new FormData();
            formData.append("file", files[0]);

            axios.post(`http://egenius.rocks/sites/searchinform/api/savePic.php?id=${this.state.empId}`, formData)
                .then(response => {
                    // console.log('xxx')
                })
                .catch(error => {
                    console.log(error);
                });
        } else {
            alert('Файл не походящий')
        }
    }
    getImage = id => {
        axios.get(`http://egenius.rocks/sites/searchinform/api/getImage.php?id=${this.state.empId}`)
        .then(response => {
            this.setState({loadedImage: `data:image/jpeg;base64,${response.data}`})
        })
    }
    componentWillMount() {
        this.getImage(this.state.empId)
    }
    render() {
        return(
            <div>
                <h3>Карточка сотрудника</h3>
                <p className="mb-5"><Link to={`/departments/${this.state.employee.dept}/employees`}>&larr; вернуться к списку сотрудников</Link></p>

                <div className="row">
                    <div className="col-12 col-sm-5 col-md-4 col-lg-3 pb-5">
                        <Dropzone onDrop={this.onDrop} accept="image/jpeg" maxSize={512000} className="dropzone">
                            <img src={this.state.previewImage || this.state.loadedImage} width="196" height="196" />
                        </Dropzone>
                    </div>
                    <div className="col-12 col-sm-7 col-md-8 col-lg-9">
                        <p><b>ID:</b> {this.state.employee.id}</p>
                        <p><b>ИМЯ:</b> {this.state.employee.name}</p>
                        <p><b>ТЕЛЕФОН:</b> {this.state.employee.phone}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmployeesDetails