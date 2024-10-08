export const getFields = (form: { [x: string]: { value: any; }; }) => {
  const keys = Object.keys(form);
  return keys.reduce((result: any, key: string) => {
    result[key] = form[key].value;
    return result;
  }, {});
};
export const createForm = (data: { [x: string]: any; mobileNumber?: string; password?: string; }) => {
  const keys = Object.keys(data);
  return keys.reduce((result: any, key: string) => {
    result[key] = { value: data[key] };
    return result;
  }, {});
};
export const validateForm = (form: { [x: string]: { value: any; }; }) => {
  const keys = Object.keys(form);
  return keys.reduce((result: any, key: string) => {
    result[key] = form[key];
    if (form[key].value) {
      result[key].error = "";
    } else {
      result[key].error = "Please enter a value.";
    }
    return result;
  }, {});
};
export const isFormValid = (form: { [x: string]: { error: any; }; }) => {
  const keys = Object.keys(form);
  return !keys.some((key) => {
    if (form[key].error) {
      return true;
    }
    return false;
  });
};
