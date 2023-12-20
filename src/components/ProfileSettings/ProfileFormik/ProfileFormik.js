import axios from 'axios';
export const initialValues = {
  name: '',
  age: '',
  height: '',
  weight: '',
  gender: false,
  kef: false,
};




export const handleSubmit = async (values, { resetForm, setSubmitting }) => {
  console.log(values);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2Y3MjcwOGEyODk2MjY2Y2ZiZTUwNSIsImlhdCI6MTcwMjk3OTY5NSwiZXhwIjoxNzAzODA3Njk1fQ._ijWpOthA4oCvplpFwRwivljCZ3ND0GGk7mrPnNNKFc'; // Замените на ваш токен
  const BASE_URL = 'https://team-project-part-node.onrender.com';

  try {
    const response = await axios.put(`${BASE_URL}/api/user/update`, values, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', // Установите заголовок Content-Type в application/json
      },
    });

    if (response.status === 200) {
      console.log('Updated user information:', response.data);
      resetForm();
    } else {
      console.error('Failed to update user information:', response.data);
    }
    } catch (error) {
      console.error('An error occurred:', error.message);
    } finally {
      setSubmitting(false);
    }
};


  // const formData = new FormData();
    // formData.append('file', values.file);

    // Remove the 'userData' assignment if you don't plan to use it later in your code

    