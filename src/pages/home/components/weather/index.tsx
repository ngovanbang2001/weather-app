import { TempUnit } from '../../config/constants'
import { AirPollution, CurrentWeather, DailyWeather, Location } from '../../config/type'
import WeatherDetail from './weather-detail'
import WeatherSelectDay from './weather-select-day'

type Props = {
  forecastWeather: Array<DailyWeather>
  currentWeather: CurrentWeather | null
  currentLocation: Location | null
  airPollution: AirPollution | null
  isCelsius: boolean
  handleChangeTemp: (value : TempUnit) => void 
  handleChangeCurrentWeather: (data: DailyWeather) => void
}

const WeatherList = ({ forecastWeather, currentWeather, currentLocation, airPollution, isCelsius, handleChangeTemp, handleChangeCurrentWeather }: Props) => {
  return (
    <div className="shadow-[0px_2px_2px_0px_#00000040] rounded-[4px]">
      <WeatherDetail handleChangeTemp={handleChangeTemp} isCelsius={isCelsius} airPollution={airPollution} currentLocation={currentLocation} currentWeather={currentWeather}/>
      <div className="grid grid-cols-7 rounded-b-[4px] rounded-table">
        {forecastWeather?.map((weather) => (
          <WeatherSelectDay weather={weather} handleChangeCurrentWeather={handleChangeCurrentWeather}/>
        ))}
      </div>
    </div>
  )
}

export default WeatherList
