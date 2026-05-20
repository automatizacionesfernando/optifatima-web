// src/data/marcas.js
// Listado oficial validado con Bruno el 18/05/2026
// Permisos comerciales confirmados por el cliente.

export const categorias = {
  lujo: 'Lujo',
  clasico: 'Clásico',
  deportivo: 'Deportivo',
  diseno: 'Diseño',
  casual: 'Casual',
  infantil: 'Infantil',
};

export const marcas = [
  { nombre: 'Chanel', categoria: 'lujo' },
  { nombre: 'Tom Ford', categoria: 'lujo' },
  { nombre: 'Prada', categoria: 'lujo' },
  { nombre: 'Dolce & Gabbana', categoria: 'lujo' },
  { nombre: 'Mykita', categoria: 'diseno' },
  { nombre: 'Silhouette', categoria: 'diseno' },
  { nombre: 'Face à Face', categoria: 'diseno' },
  { nombre: 'Etnia Barcelona', categoria: 'diseno' },
  { nombre: 'Chloé', categoria: 'diseno' },
  { nombre: 'Nina Ricci', categoria: 'diseno' },
  { nombre: 'Byblos', categoria: 'diseno' },
  { nombre: 'Giotto', categoria: 'diseno' },
  { nombre: 'Blue & Green', categoria: 'diseno' },
  { nombre: 'Studio', categoria: 'diseno' },
  { nombre: 'First Eyewear', categoria: 'diseno' },
  { nombre: 'Próxima', categoria: 'diseno' },
  { nombre: 'Ray-Ban', categoria: 'clasico' },
  { nombre: 'Persol', categoria: 'clasico' },
  { nombre: 'Carrera', categoria: 'clasico' },
  { nombre: 'Oakley', categoria: 'deportivo' },
  { nombre: 'Arnette', categoria: 'deportivo' },
  { nombre: 'Polar', categoria: 'deportivo' },
  { nombre: 'Killer Loop', categoria: 'deportivo' },
  { nombre: 'Lacoste', categoria: 'casual' },
  { nombre: 'Hackett London', categoria: 'casual' },
  { nombre: 'Converse', categoria: 'casual' },
  { nombre: 'Vogue', categoria: 'casual' },
  { nombre: 'Piccolo', categoria: 'infantil' },
];

// Helpers
export const marcasPorCategoria = () => {
  return Object.keys(categorias).map(key => ({
    key,
    label: categorias[key],
    marcas: marcas.filter(m => m.categoria === key),
  }));
};

export const totalMarcas = marcas.length;
