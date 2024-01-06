export const isValidEmail = email => {
  return email.length > 6;
};

export const payloadCreator = api => {
  return async (config, thunkApi) => {
    try {
      const response = await api(config);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  };
};

export const generateNameId = (name, _id) => {
  return encodeURIComponent(`${name.replace(/\s/g, '-').replace(/%/g, '')}-i.${_id}`);
};

export const generateProductId = uri => {
  const splitArray = uri.split('-i.');
  return splitArray[splitArray.length - 1];
};
