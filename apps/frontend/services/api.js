export const login = async (username, password) => {
  const response = await axios.post(`/api/auth/login`, { username, password }, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  });

  if (response.status === 200 && response.data.user) {
    return response.data.user;
  }

  // Fallback or if user data not in login response
  const userData = await axios.get < User > (`/api/auth/me`);
  return userData.data;
};

export const register = async (username, email, password) => {
  const response = await axios.post(`/api/auth/register`, { username, email, password }, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
  });

  if (response.status === 201 && response.data.user) {
    return response.data.user;
  }
  return undefined;
};
export const getCurrentUser = async () => {
  try {
    const response = await axios.get < User > (`/api/auth/me`);
    return response.data;
  } catch (error) {
    return null;
  }
};

