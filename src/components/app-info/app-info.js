import './app-info.css';

const AppInfo = (props) => {
    let increased =props.data.filter(item => item.increase).length ;
    let emploees = props.data.length;
    
    return (
        <div className="app-info">
            <h1>Облік співробітників у компанії N</h1>
            <h2>Загальна кількість співробітників: {emploees}</h2>
            <h2>Премію отримають: {increased}</h2>
        </div>
    )
}

export default AppInfo;