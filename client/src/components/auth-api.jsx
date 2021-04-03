import axios from 'axios';

const signin = async (user) => {
  const result = await axios.post('/users/signin', user);
  return result;
};

const signup = async (user) => {
  const result = await axios.post('/users/signup', user);
  return result;
};

const hasSignned = async () => {
  const res = await axios.get('/users/hassignned');
  return res;
};

const signout = async () => {
  try {
    const res = await axios.get('/users/signout');
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export { signin, signup, hasSignned, signout };
