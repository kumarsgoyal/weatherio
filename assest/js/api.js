'use strict';

const apiKey= "b1b15e88fa797225412429c1c50c122a1"; // notsecret

export const fetchData = (URL,callback)=>{
    fetch(`${URL}&appid=${apiKey}`)
    .then(res=>res.json())
    .then(data=>callback(data))
}

export const url ={
    currentWeather(lat,lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat,lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airPollution(lat,lon){
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat,lon){
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * @param {string} query search query e.g. :"london" , "New Yourk"  
     */
    geo(query){
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}
