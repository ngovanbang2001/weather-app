import Loading from '../../components/base/loading'
import MainLayout from '../../layout/main-layout'
import LocationSearch from './components/location-search'
import NoData from './components/no-data'
import WeatherList from './components/weather'
import useWeather from './hook/useWeather'

const Home = () => {
  const {
    query,
    isCelsius,
    isLoading,
    airPollution,
    currentWeather,
    currentLocation,
    forecastWeather,
    clearSearch,
    handleChangeTemp,
    handleEnterSearch,
    handleChangeSearch,
    handleChangeCurrentWeather,
    
  } = useWeather()

  return isLoading ? <Loading /> : (
      <MainLayout>
      <div className="space-y-[12px]">
        <LocationSearch
          valueText={query}
          handleEnterSearch={handleEnterSearch}
          clearSearch={clearSearch}
          handleChangeSearch={handleChangeSearch}
        />
        {!!forecastWeather?.length ? (
          <WeatherList
            isCelsius={isCelsius}
            airPollution={airPollution}
            currentLocation={currentLocation}
            currentWeather={currentWeather}
            forecastWeather={forecastWeather}
            handleChangeTemp={handleChangeTemp}
            handleChangeCurrentWeather={handleChangeCurrentWeather}
          />
        ) : (
          <NoData />
        )}
      </div>
    </MainLayout>
    )}


export default Home
