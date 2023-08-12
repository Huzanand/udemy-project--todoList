import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employees-list/employees-list';
import EmployeersAddForm from '../employees-add-form/employees-add-form';//

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            data: [
                {name: "John C.", salary:"1500", increase: false, rise: true, id: 1},
                {name: "Alex M.", salary:"1000", increase: true, rise: true, id: 2},
                {name: "Carl W.", salary:"700", increase: false, rise: false, id: 3},
                {name: "Carl D.", salary:"900", increase: false, rise: true, id: 4}
            ],
            term:'',
            maxId: 5,
            filter: 'all'
        }
    }

    addNewItem = (name, salary) =>{
        const newItem = {
            name : name,
            salary: salary,
            increase: false,
            rise: false,
            id: this.state.maxId
        }
        this.setState(({data, maxId}) => {
            const newData = [...data, newItem];
            return{
                data: newData,
                maxId: ++maxId,
            }
        })
    }

    deleteItem = id => {
        this.setState(({data}) => {
             return{
                data: data.filter(item => item.id !== id)
             }
        })
    }

    onToggleProp = (id, prop) =>{
        this.setState(({data}) =>({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmp = (items, filter) => {
        switch (filter){
            case 'rise': 
                return items.filter(item => item.rise);
            case 'salary': 
                return items.filter(item => item.salary >= 1000);
            default: 
                return items;
        }
    }

    onFilter = (filter) =>{
        this.setState({filter})
    }

    render(){

        const{data, term, filter} = this.state;
        const visibleData = this.filterEmp(this.searchEmp(data, term), filter)


        return (
            <div className="app">
                <AppInfo
                data={data}
                />
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={this.state.filter} onFilter={this.onFilter}/>
                </div>
    
                <EmployeersList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeersAddForm
                    onAdd={this.addNewItem}
                />
            </div>
        )
    }
}

export default App;