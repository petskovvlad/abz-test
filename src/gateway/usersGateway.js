const baseUrl = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const fetchUsers = (currentPage, count = 6) => {
  const url = `${baseUrl}users?page=${currentPage}&count=${count}`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });
};

export const createUser = (userData, token) => {
  return fetch(`${baseUrl}users`, {
    method: 'POST',
    headers: {
      'Token': `${token}`,
    },
    body: userData,
  }).then(response => {
    if (!response.ok) {
      throw alert(`Internal Server Error. Can't create user`);
    }
  });
};

export const getToken = () => {
  const url = `${baseUrl}token`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });
};

export const fetchPositions = () => {
  const url = `${baseUrl}positions`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });
};