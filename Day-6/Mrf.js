// Get all the countries from Asia continent /region using Filter method 
function getAsiaCountries(countries) {
    return countries.filter(country => country.region === "Asia" || country.continents.includes("Asia"))
  }
  
  // Get all the countries with a population of less than 2 lakhs using Filter method 
  function getPopulationBelowTwoLacs(countries){
      return countries.filter(country => country.population < 2000000)
  }
  
  // Print the following details name, capital, flag, using forEach method
  function printCountryDetails(countries){
      countries.forEach(country => {
          console.log("Country name", country.name)
          console.log("Country Capital", country.capital)
          console.log("Country flag", country.flag)
      })
  }
  
  // Print the country that uses US dollars as currency
  function getCountriesForUSD(countries) {
      return countries.filter(country => country?.currencies && Object.keys(country.currencies).includes("USD"))
  }
  
  // Print the country that uses US dollars as currency
  function getTotalPopulation(countries) {
      let totalPopulation = 0;
      countries.forEach(country => {
          totalPopulation += country.population
      })
  
      return countries.reduce(
          (
              acc, // Previous Value
              country // Iterating value
          ) => acc + country.population, // Call back function
          0 // initial value
      )
  }
  
  // API CONFIG
  const API_URL = "https://restcountries.com/v3.1/all";
  
  // XML HTTP REQUEST
  const apiXHR = new XMLHttpRequest();
  
  // Initialize the request
  apiXHR.open("GET", API_URL);
  
  // Send the request
  apiXHR.send();
  
  // Handle when the request is completed
  apiXHR.onreadystatechange = function () {
    let data = {};
    if (this.readyState === 4 && this.status === 200) {
      data = JSON.parse(this.response);
      console.log("Data", data);
      console.log("Asian Countries", getAsiaCountries(data));
      console.log("Countries below 2 lacs population", getPopulationBelowTwoLacs(data))
      console.log("Countries with USD", getCountriesForUSD(data))
      console.log("Total population", getTotalPopulation(data))
      // printCountryDetails(data)
    }
  };