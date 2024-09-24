const fetchData  = async () => {
  const fileId = '1VrGuss8u16j81vWJ89rTMkE26haXLDg1'; // Reemplaza con tu ID de archivo
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json(); // Cambiado a JSON
    return data; // Retorna los datos procesados
  } catch (error) {
    console.error('Error:', error);
    return []; // Retorna un array vacío en caso de error
  }
};

export default fetchData ;
