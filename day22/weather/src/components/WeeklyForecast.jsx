import { DayForecast } from "./DayForecast";

export const WeeklyForecast = () => {
return(
<div className="week-forecast">
            <DayForecast
                day="Mon"
                img="cloudy"
                high="18"
                low="11"
            />
            <DayForecast
                day="Tue"
                img="partly-cloudy"
                high="21"
                low="5"
            />
            <DayForecast
                day="Wed"
                img="rainy"
                high="8"
                low="1"
            />
            <DayForecast
                day="Thu"
                img="rainy"
                high="8"
                low="1"
            />
            <DayForecast
                day="Thu"
                img="snowy"
                high="-2"
                low="-7"
            />
            <DayForecast
                day="Fri"
                img="stormy-rain"
                high="28"
                low="21"
            />
            <DayForecast
                day="Sat"
                img="stormy"
                high="35"
                low="27"
            />
            <DayForecast
                day="Sun"
                img="sunny"
                high="28"
                low="22"
            />
        </div>

)

}