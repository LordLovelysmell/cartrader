export const useUtilities = () => {
  const capitalized = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return {
    capitalized,
  };
};
