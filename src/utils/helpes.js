export const isValidEmail = email => {
  return email.length > 6;
};

export const payloadCreator = api => {
  return async (data, thunkApi) => {
    try {
      const response = await api(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  };
};

export const generateNameId = (name, _id) => {
  return encodeURIComponent(`${name.replace(/\s/g, '-').replace(/%/g, '')}-i.${_id}`);
};
