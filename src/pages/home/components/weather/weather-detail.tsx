import { AQI, TempUnit, weekday } from "../../config/constants"
import { convertFahrenheit, formatTime, getIconUrl, getWindDirectionAbbreviation } from "../../config/helpers"
import { AirPollution, CurrentWeather, Location } from "../../config/type"

type Props = {
  isCelsius: boolean
  currentLocation: Location | null
  currentWeather: CurrentWeather | null
  airPollution: AirPollution | null
  handleChangeTemp: (value : TempUnit) => void 
}
const WeatherDetail = ({ currentWeather, currentLocation, airPollution, isCelsius, handleChangeTemp }: Props) => {
  const dayOfWeek = weekday[new Date((currentWeather?.dt || 1) * 1000).getDay()]
  const currentTime = formatTime(new Date((currentWeather?.dt || 1) * 1000))
  return (
    <div className="p-[20px] rounded-t-[4px] border border-b-0 border-[#969696] space-y-[12px]">
      <div className="space-y-[4px]">
        <p className="text-[20px] font-bold leading-[23.44px] text-[#333333]">{`${currentLocation?.name}, ${currentLocation?.country}`}</p>
        <p className="text-[14px] font-normal leading-[16.41px] text-[#666666] capitalize">{`${dayOfWeek} ${currentTime} • ${currentWeather?.weather[0].description}`}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-x-[6px] flex">
          <div className="space-x-[6px] flex items-center">
          <img className="w-[64px]" src={getIconUrl(currentWeather?.weather[0].icon || "")} alt=""/>
          <div className="font-bold text-[44px] leading-[51.56px] text-[#000000]">{`${isCelsius ? Math.round(currentWeather?.temp || 1): convertFahrenheit(Math.round(currentWeather?.temp || 1))}°`}</div>
          </div>
          <div className="flex space-x-[4px] mt-[15px]">
            <div className={`text-[14px] font-bold leading-[16.41px] cursor-pointer ${!isCelsius ? "underline": ""} text-[${isCelsius ? "#666666": "#000000"}]`} onClick={()=> handleChangeTemp(TempUnit.F)}>{TempUnit.F}</div>
            <div className="text-[14px] font-bold leading-[16.41px]">/</div>
            <div className={`text-[14px] font-bold leading-[16.41px] cursor-pointer ${isCelsius ? "underline": ""} text-[${isCelsius ? "#000000": "#666666"}]`} onClick={()=> handleChangeTemp(TempUnit.C)}>{TempUnit.C}</div>
          </div>
        </div>
        <div className="space-y-[2px]">
          <p className="text-[14px] font-normal leading-[16.41px] text-[#222222]">{`Humidity: ${currentWeather?.humidity}%`}</p>
          <p className="text-[14px] font-normal leading-[16.41px] text-[#222222]">{`Wind: ${currentWeather?.wind_speed} KPH ${getWindDirectionAbbreviation(currentWeather?.wind_speed || 0)}`}</p>
          <p className="text-[14px] font-normal leading-[16.41px] text-[#222222]">{`Air Quality: ${AQI[(airPollution?.main.aqi || 1) - 1]}`}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetail
