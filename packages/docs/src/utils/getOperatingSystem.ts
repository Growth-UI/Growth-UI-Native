const getOperatingSystem = () => {
  if (typeof window === 'undefined') return undefined;

  return navigator.platform.toUpperCase().indexOf('MAC') >= 0
    ? 'Mac'
    : 'Window';
};

export default getOperatingSystem;
