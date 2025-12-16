export const login = async (username, password) => {
  const response = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    const data = await response.json();
    if (data.user) {
      return data.user;
    }
  }

  if (response.status === 401) {
    throw new Error("Invalid credentials");
  }

  try {
    const meResponse = await fetch(`/api/auth/me`);
    if (meResponse.ok) {
      const meData = await meResponse.json();
      return meData;
    }
  } catch (e) {
    // ignore
  }

  return null;
};

const response = await fetch(`/api/auth/register`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ username, email, password })
});

if (response.status === 201) {
  const data = await response.json();
  if (data.user) {
    return data.user;
  }
}
return undefined;
};

export const getCurrentUser = async () => {
  try {
    const response = await fetch(`/api/auth/me`);
    if (response.ok) {
      return await response.json();
    }
    return null;
  } catch (error) {
    return null;
  }
};

