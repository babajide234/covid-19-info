import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css'; 
import {fetchData} from './api';
import covidLogo from './img/covid-19-icon.png';

class App extends React.Component{
    state = {
        data: {},
        country:'',
    }

    async componentDidMount(){
        const fetchedData =  await fetchData();
        this.setState({ data:fetchedData });
    };

    handleCountryChange = async ( country ) => {
        // fecth the data
        const fetchedData =  await fetchData( country );
        console.log(fetchedData);
        // set the state
        this.setState({ data: fetchedData, country: country})
    }

    render(){
        const { data, country } = this.state;

        return(
            <div className={styles.container}>
                <img src={ covidLogo } className={styles.img}   alt='Covid img'/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;