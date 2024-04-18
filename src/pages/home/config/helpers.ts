export const convertFahrenheit = (temp: number | undefined) => {
  return temp ? Math.round(temp * 1.8 + 32) : temp;
};

export const getIconUrl = (code: string) => {
  return `https://openweathermap.org/img/wn/${code}.png`;
};

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getWindDirectionAbbreviation = (speed: number) => {
  if (speed < 0) {
    return "N/A";
  }

  const degree = ((speed / 3.6) * 180) / Math.PI;
  if (degree >= 337.5 || degree < 22.5) {
    return "N";
  } else if (degree >= 22.5 && degree < 67.5) {
    return "NE";
  } else if (degree >= 67.5 && degree < 112.5) {
    return "E";
  } else if (degree >= 112.5 && degree < 157.5) {
    return "SE";
  } else if (degree >= 157.5 && degree < 202.5) {
    return "S";
  } else if (degree >= 202.5 && degree < 247.5) {
    return "SW";
  } else if (degree >= 247.5 && degree < 292.5) {
    return "W";
  } else {
    return "NW";
  }
};
