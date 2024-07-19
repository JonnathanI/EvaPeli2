// src/context/FilmContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

type Film = {
  id: string;
  title: string;
  director: string;
  time: string;
};

type FilmContextType = {
  films: Film[];
  addFilm: (title: string, director: string, time: string) => void;
  updateFilm: (id: string, updatedFilm: Partial<Film>) => void;
  deleteFilm: (id: string) => void;  // Añadir la declaración de deleteFilm
};

type FilmProviderProps = {
  children: ReactNode;
};

export const FilmContext = createContext<FilmContextType | undefined>(undefined);

export const FilmProvider: React.FC<FilmProviderProps> = ({ children }) => {
  const [films, setFilms] = useState<Film[]>([
    // Datos iniciales de ejemplo
    { id: '1', title: 'Harry Potter y La Piedra Filosofal', director: 'Chris Columbus', time: '152 minutos' },
{ id: '2', title: 'Harry Potter y La Cámara Secreta', director: 'Chris Columbus', time: '161 minutos' },
{ id: '3', title: 'Harry Potter y El Prisionero de Azkaban', director: 'Alfonso Cuarón', time: '142 minutos' },
{ id: '4', title: 'Harry Potter y El Cáliz de Fuego', director: 'Mike Newell', time: '157 minutos' },
{ id: '5', title: 'Harry Potter y La Orden del Fénix', director: 'David Yates', time: '138 minutos' },
{ id: '6', title: 'Harry Potter y El Misterio del Príncipe', director: 'David Yates', time: '153 minutos' },
{ id: '7', title: 'Harry Potter y Las Reliquias de la Muerte: Parte 1', director: 'David Yates', time: '146 minutos' },
{ id: '8', title: 'Harry Potter y Las Reliquias de la Muerte: Parte 2', director: 'David Yates', time: '130 minutos' }

  ]);

  const addFilm = (title: string, director: string, time: string) => {
    const newFilm: Film = {
      id: (films.length + 1).toString(),
      title,
      director,
      time,
    };
    setFilms(prevFilms => [...prevFilms, newFilm]);
  };

  const updateFilm = (id: string, updatedFilm: Partial<Film>) => {
    setFilms(prevFilms => prevFilms.map(film => (film.id === id ? { ...film, ...updatedFilm } : film)));
  };

  const deleteFilm = (id: string) => {
    setFilms(prevFilms => prevFilms.filter(film => film.id !== id));
  };
  return (
    <FilmContext.Provider value={{ films, addFilm, updateFilm, deleteFilm }}>
      {children}
    </FilmContext.Provider>
  );
};
