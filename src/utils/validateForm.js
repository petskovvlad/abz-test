export const validateForm = formData => {
  const errors = {};

  if (!formData.name || formData.name.length < 2 || formData.name.length > 60) {
    errors.name = 'Name should be between 2 and 60 characters';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.email || !emailRegex.test(formData.email)) {
    errors.email = 'Invalid email format';
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!formData.phone || !phoneRegex.test(formData.phone)) {
    errors.phone = 'Phone number should start with +380 and have 12 digits';
  }

  if (!formData.position) {
    errors.position = 'Please select a position';
  }

  if (!formData.photo || !formData.photo.type.startsWith('image/')) {
    errors.photo = 'Please upload a valid image file';
  } else if (formData.photo.size > 5 * 1024 * 1024) {
    errors.photo = 'Image size should not exceed 5MB';
  }

  return errors;
};