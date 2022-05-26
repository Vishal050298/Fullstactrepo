import axios from 'axios';

const baseUrl = 'http://localhost:8080/users'


export const signUp = async (user) => {
  return  axios.post(`${baseUrl}/signUp`,user);

}

export const signIn = (user) => {
  return axios.post(`${baseUrl}/signIn`, user)
  .then(response  => {
    if(response.data.accessToken){
      localStorage.setItem("user",JSON.stringify(response.data));
      window.location.href = "/profile"
    }
    return response.data;
  })
  .catch(err => {
 
  })
}

