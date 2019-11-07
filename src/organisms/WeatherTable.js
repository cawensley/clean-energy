import React, { Component } from 'react';
import Fahrenheit from "../atoms/tempconversion";

class WeatherTable extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            error: null,
            input: null,
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

    onInputChange=(event) => {this.setState({input: event.target.value});};

    keyPressed=(event) => {if (event.key === "Enter") {this.onButtonSubmit()}};

    onButtonSubmit = () => {
        this.setState({isLoading: true});
        localStorage.setItem('storedZip',this.state.input);
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.input},us&APPID=7f838af83bf39591f00de86b6f7329e1`)
            .then(response=> {
                if (response.ok) {return response.json();}
                else {throw new Error(`Invalid Zip Code:  ${this.state.input}.`);}})
            .then(data => this.setState({ currentWeather: data,isLoading: false}))
            .catch(error => this.setState({error,isLoading: false}));
    };

    componentDidMount() {
        this.setState({isLoading: true});
        navigator.geolocation.getCurrentPosition(position => {
            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`)
                .then(response=> {
                    if (response.ok) {return response.json();}
                    else {throw new Error(`Can't Locate Your Zip Code.`);}})
                .then(data => {
                    if (localStorage.getItem('storedZip')===`null`) {
                        this.setState({input: data.postcode})}
                    else {
                        this.setState({input: localStorage.getItem('storedZip')})
                    }})
                .then(this.onButtonSubmit)
                .catch(error => this.setState({error,isLoading: false}))
        });
    };

    refreshPage = () => {
        localStorage.setItem('storedZip',null);
        window.location.reload(true)
    };

    render() {
        const {currentWeather,isLoading,error,input} = this.state;

        if (error) {return (
            <div className="text-center text-white">
            <p>{error.message}</p>
            <button type="button" value="Refresh" className="btn btn-primary mb-3" onClick={this.refreshPage}>Refresh</button>
            </div>)};

        if (isLoading) {return (<p className="text-center text-white">
            <i className="fas fa-5x fa-cog fa-spin"></i></p>)};

        var windSpeed = (currentWeather.wind.speed)*2.237;

        return (
            <div className="container d-flex justify-content-center">
                <table className="table table-dark table-striped table-bordered table-sm text-center w-auto">
                    <tbody>
                    <tr className="h6">
                        <td className="align-middle text-warning">Enter a Zip Code for current Weather data:</td>
                        <td>
                            <input type="text" size="8" maxLength="5" className="h6" onChange={this.onInputChange}
                            onKeyPress={this.keyPressed}/>
                            <button type="submit" value="Submit" className="btn btn-primary btn-sm"
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
                        <td>{localStorage.getItem('storedZip')}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default WeatherTable;

