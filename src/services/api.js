// File src/services/api.js

const callToApi = () => {
    // Llamamos a la API
  return fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adalabers-v1/promo-radsajsd.json')
    .then((response) =>
      response.json());
  };
  
  export default callToApi;