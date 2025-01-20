import React, { createContext, useEffect, useState } from 'react';
import PREFIX from '../config';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [authorsRes, categoriesRes] = await Promise.all([
          fetch(`${PREFIX}/assets/data/authors.json`),
          fetch(`${PREFIX}/assets/data/categories.json`),
        ]);

        if (!authorsRes.ok || !categoriesRes.ok) {
          throw new Error('Error fetching data.');
        }

        const [authorsData, categoriesData] = await Promise.all([
          authorsRes.json(),
          categoriesRes.json(),
        ]);

        setAuthors(authorsData);
        setCategories(categoriesData);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading authors or categories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ authors, categories, isLoaded }}>
      {children}
    </DataContext.Provider>
  );
};
