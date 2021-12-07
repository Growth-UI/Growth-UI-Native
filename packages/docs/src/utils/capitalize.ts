const capitalize = (val: string): string => {
  return (val.charAt(0).toUpperCase() + val.slice(1)).replace(/-/g, "");
};

export default capitalize;
