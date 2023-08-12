
import "./app-filter.css";

const AppFilter = (props) => {

    const buttons = [
        {name: 'all', label: 'Всі співробітники'},
        {name: 'rise', label: 'Співробітники на підвищення'},
        {name: 'salary', label: 'З/П більше 1000$'},
    ];

    const button = buttons.map(({name, label}) => {
        const clazz = props.filter === name ? "btn btn-light" : "btn btn-outline-light";
        return (
            <button 
                className={clazz}
                type="button"
                data-filter={name}
                onClick={(e) => props.onFilter(e.target.getAttribute('data-filter'))}
                key={name}
            >
                {label}
            </button>
        )
    })

        return (
            <div className="btn-group">
                {button}
            </div>  
        )
}

export default AppFilter;