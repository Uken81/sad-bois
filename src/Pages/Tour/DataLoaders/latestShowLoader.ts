export const latestShowLoader = async () => {
  const response = await fetch('http://localhost:2001/tour/latest');
  const shows = response.json();

  return shows;
};
