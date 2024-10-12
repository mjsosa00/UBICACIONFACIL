const getData = async (isGastronomia, isEventos, isHospedaje, isBusqueda, termino) => {
  try {

    if(isBusqueda)
      {
        const responseGastronomia = await fetch('../gastronomia.json');
        const dataGastronomia = await responseGastronomia.json(); 
        const responseEventos = await fetch('../eventos.json');
        const dataEventos = await responseEventos.json(); 
        const responseHospedaje = await fetch('../hospedaje.json'); 
        const dataHospedajes = await responseHospedaje.json(); 
        
        const resultadosTextoGastronomia = dataGastronomia.filter(item => 
          item.texto.toLowerCase().includes(termino.toLowerCase())
      );
      
      const resultadosTextoEventos = dataEventos.filter(item => 
          item.texto.toLowerCase().includes(termino.toLowerCase())
      );
  
      const resultadosTextoHospedajes = dataHospedajes.filter(item => 
          item.texto.toLowerCase().includes(termino.toLowerCase())
      );

         const resultadosTituloGastronomia = dataGastronomia.filter(item => 
          item.titulo.toLowerCase().includes(termino.toLowerCase())
      );
      
      const resultadosTituloEventos = dataEventos.filter(item => 
          item.titulo.toLowerCase().includes(termino.toLowerCase())
      );
  
      const resultadosTituloHospedajes = dataHospedajes.filter(item => 
          item.titulo.toLowerCase().includes(termino.toLowerCase())
      );
        
        return  [
          ...resultadosTituloGastronomia,
          ...resultadosTituloEventos,
          ...resultadosTituloHospedajes,
          ...resultadosTextoGastronomia,
          ...resultadosTextoEventos,
          ...resultadosTextoHospedajes
      ]; }


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

      if(isHospedaje)
        {
          const responseHospedaje = await fetch('../hospedaje.json'); 
          if (!responseHospedaje.ok) {
              throw new Error('Error fetching hosting data');
          }
          const data = await responseHospedaje.json(); 
          return data; 
        }


  } catch (error) {
    console.error('Error:', error);
    return []; 
  }
};

export default getData;
  