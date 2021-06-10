const searchCountry = async (country) => {
    try {
      let url = `http://localhost:3001/countries?name=%22${country}%22`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };