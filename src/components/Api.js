const BASE_URL = 'https://randomuser.me/api/';

export const getUsers = async (count) => {
  try {
    const response = await fetch(`${BASE_URL}?results=${count}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};







