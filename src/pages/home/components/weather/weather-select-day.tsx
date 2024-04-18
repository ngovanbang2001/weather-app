import { weekdayShort } from "../../../config/constants"
import { getIconUrl } from "../../../config/helpers"
import { DailyWeather } from "../../../config/type"

type Props = {
  weather: DailyWeather
  handleChangeCurrentWeather: (data: DailyWeather) => void
}

const WeatherSelectDay = ({ weather, handleChangeCurrentWeather }: Props) => {
  const dayOfWeek = weekdayShort[new Date((weather?.dt || 1) * 1000).getDay()]

  return (
    <div className="p-[20px] border border-[#969696] flex flex-col items-center cursor-pointer" onClick={() => handleChangeCurrentWeather(weather)}>
        <p className="text-[14px] font-bold leading-[16.41px]">{dayOfWeek}</p>
        <img src={getIconUrl(weather?.weather[0].icon || "")} alt=""/>
        <p className="text-[18px] font-bold leading-[21.09px]">{`${Math.round(weather?.temp?.max || 1 )}°`}</p>
        <p className="text-[14px] font-normal leading-[16.41px]">{`${Math.round(weather?.temp?.min || 1)}°`}</p>
    </div>
  )
}

export default WeatherSelectDay
