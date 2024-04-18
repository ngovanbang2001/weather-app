import apiClient from "../../../api/api-client"
import { ForecastParam, QueryParam } from "../config/type"

const GEO_URL = '/geo/1.0/direct'
const FORECAST_URL = 'data/2.5/onecall'
const AIR_POLLUTION_URL = 'data/2.5/air_pollution'

export const getGeoInfoApi = async ({q}: QueryParam, signal?: AbortSignal) => {
  return apiClient.get(
    `${GEO_URL}?q=${q}&limit=1&appid=${process.env.REACT_APP_API_KEY}`,
    {
      signal
    }
  )
}

export const getWeatherInfoApi = async ({ lat, lon, cnt }: ForecastParam, signal?: AbortSignal) => {
  return apiClient.get(
    `${FORECAST_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
    {
      signal
    }
  )
}

export const getAirPollutionApi = async ({ lat, lon }: ForecastParam, signal?: AbortSignal) => {
  return apiClient.get(
    `${AIR_POLLUTION_URL}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
    {
      signal
    }
  )
}