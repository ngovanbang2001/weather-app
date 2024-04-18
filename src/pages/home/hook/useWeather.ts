import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react"
import * as _ from 'lodash';
import { getAirPollutionApi, getGeoInfoApi, getWeatherInfoApi } from "../api/homeServices";
import { CNT, TempUnit } from "../config/constants";
import { AirPollution, CurrentWeather, DailyWeather, Location } from "../config/type";

const useWeather = () => {
  const [query, setQuery] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [forecastWeather, setForecastWeather] = useState<Array<DailyWeather> | null>()
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null)
  const [currentLocation, setCurrentLocation] = useState<Location | null>(null)
  const [airPollution, setAirPollution] = useState<AirPollution | null>(null)
  const [isCelsius, setIsCelsius] = useState<boolean>(true)

  const handleGetWeatherInfo = async ( value: string) => {
    setIsLoading(true)
    try {
        const res = await getGeoInfoApi({ q: value});
        const cnt = CNT

        if(!res.data.length) { 
          setForecastWeather([])
          return
        }
        const { lat, lon } = res?.data[0]
        setCurrentLocation(res?.data[0])

        const resWeather = await getWeatherInfoApi({ lat, lon, cnt });
        const resAir = await getAirPollutionApi({ lat, lon, cnt });
        
        setForecastWeather(resWeather.data.daily.slice(0,7))
        setAirPollution(resAir.data.list[0])
        setCurrentWeather(resWeather.data.current)
    } catch (err) {
      console.log(err);
      clearData()
    }
    setIsLoading(false)
  }

  const handleChangeTemp = (value: TempUnit) => {
    setIsCelsius(TempUnit.C === value)
  }

  const debounceFn = useCallback(_.debounce(handleGetWeatherInfo, 1000), []);

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value)
    debounceFn(value)
  }

  const handleChangeCurrentWeather = (data: DailyWeather) => {
    setCurrentWeather({ ...data, temp: data.temp.day})
    setIsCelsius(true)
  }

  const handleEnterSearch = async(e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  }

  const clearData = () => {
    setForecastWeather(null)
    setCurrentWeather(null)
    setCurrentLocation(null)
    setAirPollution(null)
  }

  const clearSearch = () => {
    setQuery("")
    setIsCelsius(true)
  }

  return {
    query,
    isLoading,
    isCelsius,
    airPollution,
    currentWeather,
    forecastWeather,
    currentLocation,
    clearSearch,
    handleChangeTemp,
    handleEnterSearch,
    handleChangeSearch,
    handleChangeCurrentWeather,
  }
}

export default useWeather