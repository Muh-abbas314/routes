import axios from 'axios';

const axiosInterceptorInstance = axios.create({

});
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    return response.data[4];
  },
  (error) => {
    return Promise.reject(error);
  }
);


export default axiosInterceptorInstance;