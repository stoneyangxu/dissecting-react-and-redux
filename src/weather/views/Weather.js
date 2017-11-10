import React, { Component } from 'react';
import * as Status from '../status'
import { connect } from 'react-redux';
import * as weatherActions from '../actions'

const Weather = ({status, cityName, weather, lowestTemp, highestTemp}) => {

  switch(status) {
    case Status.LOADING: {
      return <div>Loading...</div>
    }
    case Status.SUCCESS: {
      return (
        <div>
          {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp}
        </div>
      );
    }
    case Status.FAILURE: {
      return <div>Failed...</div>
    }
    default:
    throw new Error(`unexcepted status ${status}`)
  }
}

const mapStateToProps = (state) => {
  const weatherData = state.weather
  return {
    status: weatherData.status,
    cityName: weatherData.city,
    lowestTemp: weatherData.temp1,
    highestTemp: weatherData.temp2
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch(weatherActions.fetchWeather(101280601))
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather)
