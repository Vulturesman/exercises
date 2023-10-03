export const DayForecast = ({ day, high, low, img }) => {

  return (
  <div className="day-forecast">
        <div className="day-forecast__header">{day}</div>
        <div className="day-forecast__body">
          <div className={`day-forecast__image weather-${img}`}></div>
          <div className="day-forecast__temps">
            <span className="temp-day">{high}°</span>
            <span className="temp-night">{low}°</span>
          </div>
        </div>
    </div>
        );
}