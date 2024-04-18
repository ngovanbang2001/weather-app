export type QueryParam = {
  q?: string,
}

export type ForecastParam = {
  lat?: string
  lon?: string
  cnt?: number
  q?: string
}

export type Location = {
  country: string
  lat: number
  local_names: Local_names
  name: string
  lon: number
}

export interface Weather {
  dt: number,
  sunrise: number,
  sunset: number,
  moonrise: number,
  moonset: number,
  moon_phase: number,
  feels_like: {
    day: number,
    night: number,
    eve: number,
    morn: number
  },
  pressure: number,
  humidity: number,
  dew_point: number,
  wind_speed: number,
  wind_deg: number,
  wind_gust: number,
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  clouds: number,
  pop: number,
  uvi: number
}

export interface CurrentWeather extends Weather {
  temp: number
}

export interface DailyWeather extends Weather {
  temp: Temperature
}

export type Temperature = {
  day: number,
  min: number,
  max: number,
  night: number,
  eve: number,
  morn: number
}

export type AirPollution = {
  dt: number,
  main: {
    aqi: number
  },
  components: {
    co: number,
    no: number,
    no2: number,
    o3: number,
    so2: number,
    pm2_5: number,
    pm10: number,
    nh3: number
  }
}

type Local_names = {
  [key: string]: string
}