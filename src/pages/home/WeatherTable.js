import React, { Component } from 'react';

class WeatherTable extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            eRRor: null,
            input: '',
            zipCode: 'N/A',
            currentWeather: {
                main: {
                    temp: '255.38',
                    humidity: '',
                    temp_min: '255.38',
                    temp_max: '255.38',
                },
                name: '',
                wind: {
                    speed: '',
                },
                weather: [{
                    description: '',
                }],
            },
        }
    }

    onInputChange=(event) => {this.setState({input: event.target.value})};

    onButtonSubmit = () => {
        this.setState({isLoading: true});
        this.setState({zipCode: this.state.input});
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.input},us&APPID=7f838af83bf39591f00de86b6f7329e1`)
            .then(response=> {
                if (response.ok) {return response.json();}
                else {throw new Error(`Invalid Zip Code:  ${this.state.input}.`);}})
            .then(data => this.setState({ currentWeather: data,isLoading: false}))
            .catch(eRRor => this.setState({eRRor,isLoading: false}));
    };

    refreshPage = () => {window.location.reload(true)};

    render() {
        const {currentWeather,zipCode,isLoading,eRRor} = this.state;

        if (eRRor) {return (<div><p>{eRRor.message}</p>
            <button type="button" value="Refresh" className="btn btn-secondary" onClick={this.refreshPage}>Refresh</button></div>)};
        if (isLoading) {return <p>Loading...</p>};

        var windSpeed = (currentWeather.wind.speed)*2.237;
        var highTemp = (currentWeather.main.temp_max-273.15)*9/5+32;
        var currentTemp = (currentWeather.main.temp-273.15)*9/5+32;
        var lowTemp = (currentWeather.main.temp_min-273.15)*9/5+32;

        return (
            <div>
                <table className="table table-dark table-striped table-bordered table-sm w-75 ml-4">
                    <tbody>
                    <tr className="h6">
                        <td className="align-middle text-warning">Enter a Zip Code for current Weather data:</td>
                        <td>
                            <input type="text" size="8" maxLength="5" className="h6" onChange={this.onInputChange}/>
                            <button type="submit" value="Submit" className="h6" onClick={this.onButtonSubmit}>Submit</button>
                        </td>
                    </tr>
                    <tr className="h6">
                        <td>Current Temp.:</td>
                        <td>{currentTemp.toFixed(1)} F</td>
                    </tr>
                    <tr className="h6">
                        <td>High Temp.:</td>
                        <td>{highTemp.toFixed(1)} F</td>
                    </tr>
                    <tr className="h6">
                        <td>Low Temp.:</td>
                        <td>{lowTemp.toFixed(1)} F</td>
                    </tr>
                    <tr className="h6">
                        <td>Cloudiness:</td>
                        <td>{currentWeather.weather[0].description}</td>
                    </tr>
                    <tr className="h6">
                        <td>Wind Speed:</td>
                        <td>{windSpeed.toFixed(1)} mph</td>
                    </tr>
                    <tr className="h6">
                        <td>Humidity:</td>
                        <td>{currentWeather.main.humidity}%</td>
                    </tr>
                    <tr className="h6">
                        <td>City:</td>
                        <td>{currentWeather.name}</td>
                    </tr>
                    <tr className="h6">
                        <td>Zipcode:</td>
                        <td>{zipCode}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WeatherTable;

