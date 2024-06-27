function Weather() {
  const data = {
    location: {
      name: "London",
      region: "City of London, Greater London",
      country: "United Kingdom",
      lat: 51.52,
      lon: -0.11,
      tz_id: "Europe/London",
      localtime_epoch: 1719230750,
      localtime: "2024-06-24 13:05",
    },
    current: {
      last_updated_epoch: 1719230400,
      last_updated: "2024-06-24 13:00",
      temp_c: 24.3,
      temp_f: 75.7,
      is_day: 1,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        code: 1003,
      },
      wind_mph: 4.3,
      wind_kph: 6.8,
      wind_degree: 210,
      wind_dir: "SSW",
      pressure_mb: 1019.0,
      pressure_in: 30.09,
      precip_mm: 0.0,
      precip_in: 0.0,
      humidity: 54,
      cloud: 75,
      feelslike_c: 25.2,
      feelslike_f: 77.3,
      windchill_c: 26.5,
      windchill_f: 79.8,
      heatindex_c: 26.8,
      heatindex_f: 80.3,
      dewpoint_c: 13.8,
      dewpoint_f: 56.8,
      vis_km: 10.0,
      vis_miles: 6.0,
      uv: 6.0,
      gust_mph: 8.0,
      gust_kph: 12.9,
    },
  };
  return (
    <div
      style={{
        backgroundImage:
          "url(https://kunal24borah.files.wordpress.com/2013/10/rain.jpg)",
      }}
      className="bg-cover w-full  min-h-screen flex overflow-hidden "
    >
      <div
        style={{
          backdropFilter: "blur(5px) saturate(180%)",

          backgroundColor: "rgba(0, 0, 0, 0.15)",
        }}
        className="w-full min-h-screen  "
      >
        <div className="w-full h-full  flex-col flex text-white  items-center  mt-8">
          <div className="flex justify-between gap-2 items-center   w-full py-14 px-4">
            <h1 className=" font-bold text-2xl md:text-5xl capitalize ">
              waether
            </h1>
            <input
              type="text "
              style={{
                backdropFilter: "blur(5px) saturate(180%)",

                backgroundColor: "rgba(0, 0, 0, 0.55)",
              }}
              placeholder="check you city"
              className="capitalize bg-transparent text-white px-4 py-2 outline-none border-none"
            />
            <button className="bg-primary px-4 py-2">Search</button>
          </div>

          <div className="flex justify-center w-full flex-col md:flex-row p-9">
            <div
              style={{
                backdropFilter: "blur(15px) saturate(180%)",

                backgroundColor: "rgba(0, 0, 0, 0.55)",
              }}
              className=" bg-slate-100  min-h-fit "
            >
              <img
                className=" object-cover w-4/6 "
                src={data.current.condition.icon}
                alt="Weather icon"
              />
              <div className=" px-4">
                <p className="font-bold text-xl capitalize ">
                  {data.location.name}, {data.location.region}
                </p>
                <p className="mt-2 text-white">{data.location.country}</p>
              </div>
            </div>
            <div>
              <div
                style={{
                  backdropFilter: "blur(15px) saturate(180%)",

                  backgroundColor: "rgba(0, 0, 0, 0.55)",
                }}
                className="p-8 h-full"
              >
                <p className="block mt-1 text-lg leading-tight font-medium text-primary">
                  {data.current.temp_c}°C / {data.current.temp_f}°F
                </p>
                <p className="mt-2 text-white">{data.current.condition.text}</p>
                <p className="mt-2 text-white">
                  Feels like: {data.current.feelslike_c}°C /
                  {data.current.feelslike_f}°F
                </p>
                <p className="mt-2 text-white">
                  Humidity: {data.current.humidity}%
                </p>
                <p className="mt-2 text-white">
                  Wind: {data.current.wind_mph} mph / {data.current.wind_kph}{" "}
                  kph {data.current.wind_dir}
                </p>
                <p className="mt-2 text-white">
                  Pressure: {data.current.pressure_mb} mb
                </p>
                <p className="mt-2 text-white">
                  Visibility: {data.current.vis_km} km /{" "}
                  {data.current.vis_miles} miles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
