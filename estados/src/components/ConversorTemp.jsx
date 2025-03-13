import React from "react";
import "./ConversorTemp.css";
import { useState } from "react";

function ConversorTemp() {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  function converterCelsiusParaFahrenheit() {
    let entrada = Number(prompt("Celsius:"));
    setFahrenheit((entrada * 1.8 + 32).toFixed(2));
    setCelsius(entrada);
  }
  function converterCelsiusParaKelvin() {
    let entrada = Number(prompt("Celsius:"));
    setKelvin((entrada + 273.15).toFixed(2));
    setCelsius(entrada);
  }

  function converterFahrenheitParaCelsius() {
    let entrada = Number(prompt("Fahrenheit:"));
    setCelsius(((entrada - 32) / 1.8).toFixed(2));
    setFahrenheit(entrada);
  }

  function converterFahrenheitParaKelvin() {
    let entrada = Number(prompt("Fahrenheit:"));
    setKelvin(((entrada - 32) / 1.8 + 273.15).toFixed(2));
    setFahrenheit(entrada);
  }
  function converterKelvinParaCelsius() {
    let entrada = Number(prompt("Kelvin:"));
    setCelsius((entrada - 273.15).toFixed(2));
    setKelvin(entrada);
  }

  return (
    <div className="container-conversorTemp">
      <h3>Conversor De Temperatura</h3>
      <button onClick={converterCelsiusParaFahrenheit}> Fahrenheit </button>
      <p>Celsius: {celsius}°C</p>
      <p>Fahrenheit: {fahrenheit}°F</p>
      <button onClick={converterCelsiusParaKelvin}> Kelvin </button>
      <p>Celsius: {celsius}°C</p>
      <p>Kelvin: {kelvin}K</p>
      <button onClick={converterFahrenheitParaCelsius}> Celsius </button>
      <p>Fahrenheit: {fahrenheit}°F</p>
      <p>Celsius: {celsius}°C</p>
      <button onClick={converterFahrenheitParaKelvin}> Kelvin </button>
      <p>Fahrenheit: {fahrenheit}°F</p>
      <p>Kelvin: {kelvin}K</p>
      <button onClick={converterKelvinParaCelsius}> Celsius </button>
      <p>Kelvin: {kelvin}K</p>
      <p>Celsius: {celsius}°C</p>
    </div>
  );
}

export default ConversorTemp;
