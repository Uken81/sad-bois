export const validateUser = async () => {
  let userData;
  const requestOptions: RequestInit = {
    method: 'GET',
    credentials: 'include'
  };
  fetch('http://localhost:2001/auth/validate', requestOptions)
    .then((response) => {
      if (!response.ok) {
        console.log('res: ', response);
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log('userData: ', data);
      if (data.isValidated) {
        console.log('user is validated');
        // return data;
        userData = data;
      }
    });
  return userData;
};
