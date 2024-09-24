const fetchData = async () => {
  try {
    const response = await fetch('./data.json'); // Ruta al archivo JSON
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json(); // Procesa el JSON
    return data; // Retorna los datos procesados
  } catch (error) {
    console.error('Error:', error);
    return []; // Retorna un array vacío en caso de error
  }
};

export default fetchData;

