const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else throw new Error("Unable to get puzzle");
};

const getPuzzleOld = (wordCount) => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw Error("Unable to fetch the puzzle");
      }
    })
    .then((data) => data.puzzle);
};

const getCountryDetailsOld = (countryCode) => {
  return fetch("http://restcountries.eu/rest/v2/all")
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch data");
      }
    })
    .then((data) => {
      return data.find((country) => country.alpha2Code === countryCode);
    });
};
const getCountryDetails = async (countryCode) => {
  const res = await fetch("http://restcountries.eu/rest/v2/all");
  if (res.status == 200) {
    const data = await res.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else throw new Error("Unable to fetch data");
};

const getLocation = async () => {
  const res = await fetch(`http://ipinfo.io/?token=4a131b7da849d0`);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  } else throw new Error("Unable to fetch data");
};
const getLocationOld = () => {
  return fetch(`http://ipinfo.io/?token=4a131b7da849d0`)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else throw Error("Unable to fetch data");
    })
    .catch((err) => console.log(err));
};
const getCurrentCountry = async () => {
  const location = await getLocation();
  const country = await getCountryDetails(location.country);
  return country;
};
