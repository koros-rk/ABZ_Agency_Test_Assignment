import { FormState } from '../../../page/PersonForm/types/FormState/FormState';
import instance from '../index';

type getTokenResponse = {
  success: boolean,
  token: string
};

export const post = async (user: FormState) => {
  try {
    const tokenResponse = await instance.get('/token');
    const { token, success }: getTokenResponse = tokenResponse.data;

    if (success && user.photo) {
      const formData = new FormData();

      formData.append('name', user.name.trim());
      formData.append('email', user.email.trim());
      formData.append('phone', user.phone.trim());
      formData.append('position_id', user.position_id.toString());
      formData.append('photo', user.photo);

      const { data } = await instance.post('/users', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Token: token,
          },
        });

      return { status: data.success, message: data.message };
    }

    return { status: success, message: 'Server error' };
  } catch (error) {
    const response = error.response.data;

    return {
      status: response.success,
      message: response.message,
      fails: error.response.data.fails,
    };
  }
};
