const getFromLs = () => {
  const savedCountriesString = localStorage.getItem("saved-countries");
  if (savedCountriesString) {
    const savedCountries = JSON.parse(savedCountriesString);
    return savedCountries;
  } else {
    return [];
  }
};

const addToLs = (id) => {
  let storedCountries = getFromLs();
  storedCountries.push(id);
  setToLs(storedCountries);
};

const setToLs = (storedCountries) => {
  localStorage.setItem("saved-countries", JSON.stringify(storedCountries));
};

export { getFromLs, setToLs, addToLs };
