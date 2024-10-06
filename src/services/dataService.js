const getData = async (isGastronomia, isEventos) => {
    try {

      if(isGastronomia)
      {
        const responseGastronomia = await fetch('../gastronomia.json'); 
        if (!responseGastronomia.ok) {
            throw new Error('Error fetching gastronomic data');
        }
        const data = await responseGastronomia.json(); 
        return data; 
      }

      if(isEventos)
        {
          const responseEventos = await fetch('../eventos.json'); 
          if (!responseEventos.ok) {
              throw new Error('Error fetching events data');
          }
          const data = await responseEventos.json(); 
          return data; 
        }
    } catch (error) {
      console.error('Error:', error);
      return []; 
    }
  };
  
  export default getData;
  