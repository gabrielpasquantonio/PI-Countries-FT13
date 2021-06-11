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
          item.activities.find(
            (item) => item.season.toLowerCase() === option.season.toLowerCase()
          ) // aca filtro la season con la dataparafiltrar
      );
    }
  
    if (option.region) {
      filteredData = data.filter((item) =>
        item.region.includes(option.region)
      );
      
    }
    return filteredData;
  }

  export async function order(data, option) {
    let sortedData;console.log(option.name)
    if (option.name) {
     
     
     
      sortedData = data.sort((a, b) => {
        if (option.name === "Descendent") {
          console.log("this is "+ a.name)
          console.log("this is b  " + b.name)
          // https://developer.mozilla.org/es/search?q=sort
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
        } else {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
        }
        
        return 0;
      }); 
    }
    if (option.population) {
      const dataOrdenadaClear = data.filter((item) => item.area && item )
      sortedData = dataOrdenadaClear.sort((a, b) => {
        
        
        
        if (option.population === "Descendent") {
         
          if (a.population < b.population) {
            return 1;
          }
          if (a.population > b.population) {
            return -1;
          }
        } else {
          if (a.population > b.population) {
            return 1;
          }
          if (a.population < b.population) {
            return -1;
          }
        }
        // ordeno la data que me trae con un sort por primera letra del name
        return 0;
      }); // funcion que ordena
    }
    
    return sortedData;
   
  }