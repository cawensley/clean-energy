import React, { Component } from 'react';
import Fahrenheit from "../atoms/tempconversion";

class WeatherTable extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            eRRor: null,
            input: null,
            zipCode: null,
            currentWeather: {
                main: {
                    temp: null,
                    humidity: null,
                    temp_min: null,
                    temp_max: null,
                },
                name: null,
                wind: {
                    speed: null,
                },
                weather: [{
                    description: null,
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

        if (eRRor) {return (<div className="text-center text-white">
            <p>{eRRor.message}</p>
            <button type="button" value="Refresh" className="btn btn-primary" onClick={this.refreshPage}>Refresh</button>
            </div>)};

        if (isLoading) {return (<div className="text-center text-white"><p>Loading...</p></div>)};

        var windSpeed = (currentWeather.wind.speed)*2.237;

        return (
            <div className="container d-flex justify-content-center">
                <table className="table table-dark table-striped table-bordered table-sm text-center w-75">
                    <tbody>
                    <tr className="h6">
                        <td className="align-middle text-warning">Enter a Zip Code for current Weather data:</td>
                        <td>
                            <input type="text" size="8" maxLength="5" className="h6" onChange={this.onInputChange}/>
                            <button type="submit" value="Submit" className="btn btn-primary"
                                    onClick={this.onButtonSubmit}>Submit</button>
                        </td>
                    </tr>
                    <tr className="h6">
                        <td>Current Temp.:</td>
                        <td><Fahrenheit Ktemp={currentWeather.main.temp}/> F</td>
                    </tr>
                    <tr className="h6">
                        <td>High Temp.:</td>
                        <td><Fahrenheit Ktemp={currentWeather.main.temp_max}/> F</td>
                    </tr>
                    <tr className="h6">
                        <td>Low Temp.:</td>
                        <td><Fahrenheit Ktemp={currentWeather.main.temp_min}/> F</td>
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

