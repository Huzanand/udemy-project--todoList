import {Component} from 'react';

import "./employees-add-form.css";

class EmployeersAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
            statusClassName: true
        }
    }

    onValueChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();

        if((this.state.name && this.state.name.length > 3) &&
            (this.state.salary && this.state.salary !== 0)){
                this.props.onAdd(this.state.name, this.state.salary);
                this.setState({statusClassName: true})
        } else {
            this.setState({statusClassName: false})
        }
        
        this.setState({
            name: '',
            salary: '',
        })
    }

    render(){
        const {name, salary} = this.state
        const statusClassName = this.state.statusClassName === true ? 'status' : 'status-error';
        
        return (
            <div className="app-add-form">
                <h3>Додати нового співробітника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                        <input type="text"
                            className="form-control new-post-label"
                            name='name'
                            value={name}
                            placeholder="Ім'я співробітника" 
                            onChange={this.onValueChange}/>
                        <input type="number"
                            className="form-control new-post-label"
                            name='salary'
                            value={salary}
                            placeholder="З/П у $?" 
                            onChange={this.onValueChange}/>
        
                        <button type="submit"
                                className="btn btn-outline-light"
                                onClick={this.onSubmit}>
                                    Додати
                        </button>
                        <div className={statusClassName}>
                            Помилка з ім'ям або З\П!
                        </div>
                </form>
            </div>
        )
    }
}

export default EmployeersAddForm;