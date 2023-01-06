import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forcast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuseday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forcast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forCastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-items">
                  <img
                    alt="Weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="days">{forCastDays[idx]}</label>
                  <label className="description">
                    {" "}
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-items">
                  <label>pressure</label>
                  <label>{item.main.pressure} hpa</label>
                </div>
                <div className="daily-details-grid-items">
                  <label>humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-items">
                  <label>clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-items">
                  <label>wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-items">
                  <label>sea-level:</label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-items">
                  <label>Feels-like:</label>
                  <label>{Math.round(item.main.feels_like)}°C </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forcast;
