// File src/services/api.js

const callToApi = () => {
    // Llamamos a la API
  return fetch('https://')
    .then((response) =>
      response.json());
  };
  
  export default callToApi;