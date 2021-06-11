const searchCountry = async (country) => {
    try {
      let url = `http://localhost:3001/countries?name=%22${country}%22`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };


  export async function filterData(data, option) {
    let filteredData; // creo la const
    if (option.season) {
      filteredData = data.filter(
        (
          item // asigno a DF los filtros.
        ) =>
          item.db.Activity.find(
            (item) => item.season.toLowerCase() === option.season.toLowerCase()
          ) // aca filtro la season con la dataparafiltrar
      );
    }
  
    if (option.region) {
      filteredData = data.filter((item) =>
        item.region.includes(option.region)
      );
      // filtro la data por el nombre, mayus y si incluye tmb a Mayus.
    }
    return filteredData;
  }