// Truncate text to specified length
export const truncate = (str: string, n: number): string => {
  return str?.length > n ? str.substr(0, n - 1) + '...' : str;
};

// Format runtime from minutes to hours and minutes
export const formatRuntime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

// Format release year
export const getYear = (dateString: string): string => {
  return new Date(dateString).getFullYear().toString();
};

// Generate random movie for banner
export const getRandomMovie = (movies: any[]) => {
  return movies[Math.floor(Math.random() * movies.length)];
};