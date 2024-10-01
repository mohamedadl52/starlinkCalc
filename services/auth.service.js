import axios from 'axios';

// const API_URL = 'http://localhost:8081/api/user/';
const API_URL = 'https://shop-le2d.onrender.com/api/user/';

class AuthService {
  login(user) {
    console.log(user)
    return axios
      .post(API_URL + 'signin', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data.accessToken));
        }
        console.log(response.data)

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    console.log(user.username)
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();