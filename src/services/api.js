import axios from 'axios';

// Postavi bazni URL za Strapi API
const api = axios.create({
  baseURL: 'http://localhost:1337/api',
});

// Funkcija za povlačenje slika
export const fetchImages = async () => {
  const response = await api.get('/images?populate=*');
  return response.data;
};

// Funkcija za povlačenje albuma
export const fetchAlbums = async () => {
  const response = await api.get('/albums?populate=*');
  return response.data;
};