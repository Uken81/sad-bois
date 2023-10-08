export const validateUser = async (): Promise<boolean> => {
  const requestOptions: RequestInit = {
    method: 'GET',
    credentials: 'include'
  };

  const res = await fetch('http://localhost:2001/auth/validate', requestOptions);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();

  console.log('userData: ', data);

  if (data.validationSuccess) {
    console.log('**user is validated**');
    return true;
  }

  return false;
};
