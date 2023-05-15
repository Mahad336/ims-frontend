export const getUpdatedFormData = (formData, entity) => {
  const updatedFormData = {};

  Object.keys(formData).forEach((key) => {
    if (entity.hasOwnProperty(key)) {
      updatedFormData[key] = entity[key];
    }
  });

  return {
    ...formData,
    ...updatedFormData,
  };
};
