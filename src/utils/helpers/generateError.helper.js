const generateErrorHelper = (error) => {
  const message = error.response?.data.error.message || error.message;
  return message;
};

export default generateErrorHelper;
