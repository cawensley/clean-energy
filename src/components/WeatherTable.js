import React, { Component } from 'react';

class WeatherTable extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            zipCode: '80503',
            currentWeather: {
                main: {
                    temp: '',
                    humidity: '',
                    temp_min: '',
                    temp_max: '',
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

    componentDidMount() {
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=80503,us&APPID=7f838af83bf39591f00de86b6f7329e1')
            .then(response=> response.json())
            .then(data => {this.setState({ currentWeather: data})});
    };

    onInputChange=(event) => {this.setState({input: event.target.value})};

    onButtonSubmit = () => {
        this.setState({zipCode: this.state.input});
        let weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip=32233,us&APPID=7f838af83bf39591f00de86b6f7329e1";
        fetch(weatherURL)
            .then(response=> response.json())
            .then(data => {this.setState({ currentWeather: data})});
    };

    render() {
        const {currentWeather,zipCode} = this.state;
        var highTemp = (currentWeather.main.temp_max-273.15)*9/5+32;
        var currentTemp = (currentWeather.main.temp-273.15)*9/5+32;
        var lowTemp = (currentWeather.main.temp_min-273.15)*9/5+32;

        return (
            <div>
                <p className="h4">Enter in your Zip Code for Weather info:</p>
                <div>
                    <input type='tex' className="h4" onChange={this.onInputChange}/>
                    <button type="submit" value="Submit" className="mb-4 h4" onClick={this.onButtonSubmit}>Submit</button>
                </div>
                <table className="table table-dark table-striped table-bordered table-sm">
                    <tbody>
                    <tr className="h5">
                        <td>Current Temp.:</td>
                        <td>{currentTemp.toFixed(1)} F</td>
                    </tr>
                    <tr className="h5">
                        <td>High Temp.:</td>
                        <td>{highTemp.toFixed(1)} F</td>
                    </tr>
                    <tr className="h5">
                        <td>Low Temp.:</td>
                        <td>{lowTemp.toFixed(1)} F</td>
                    </tr>
                    <tr className="h5">
                        <td>Cloudiness:</td>
                        <td>{currentWeather.weather[0].description}</td>
                    </tr>
                    <tr className="h5">
                        <td>Wind Speed:</td>
                        <td>{currentWeather.wind.speed} m/h</td>
                    </tr>
                    <tr className="h5">
                        <td>Humidity:</td>
                        <td>{currentWeather.main.humidity}%</td>
                    </tr>
                    <tr className="h5">
                        <td>City:</td>
                        <td>{currentWeather.name}</td>
                    </tr>
                    <tr className="h5">
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

