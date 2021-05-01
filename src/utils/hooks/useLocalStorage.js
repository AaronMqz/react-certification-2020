// eslint-disable-next-line no-unused-vars
import React from 'react';

const useLocalStorage = () => {
  const updateFavoriteStorage = (data, name) => {
    try {
      const jsonValue = JSON.stringify(data);
      localStorage.setItem(`myFavorites_${name}`, jsonValue);
    } catch (error) {
      // saving error
      console.log('Error saving in storage: ', error);
    }
  };

  const getFavoritesStorage = (name) => {
    try {
      const jsonValue = localStorage.getItem(`myFavorites_${name}`);
      return jsonValue != null ? [].concat(JSON.parse([jsonValue])) : [];
    } catch (error) {
      // saving error
      console.log('Error getting in storage: ', error);
    }
  };

  const saveSessionStorage = (data) => {
    try {
      const jsonValue = JSON.stringify(data);
      localStorage.setItem(`session`, jsonValue);
    } catch (error) {
      // saving error
      console.log('Error saving in storage: ', error);
    }
  };

  const getCurrentSessionStorage = () => {
    try {
      const jsonValue = localStorage.getItem(`session`);
      return jsonValue != null ? JSON.parse([jsonValue]) : null;
    } catch (error) {
      // saving error
      console.log('Error getting in storage: ', error);
    }
  };

  const removeCurrentSessionStorage = () => {
    try {
      localStorage.removeItem(`session`);
    } catch (error) {
      // saving error
      console.log('Error getting in storage: ', error);
    }
  };

  return {
    updateFavoriteStorage,
    getFavoritesStorage,
    saveSessionStorage,
    getCurrentSessionStorage,
    removeCurrentSessionStorage,
  };
};
export default useLocalStorage;
