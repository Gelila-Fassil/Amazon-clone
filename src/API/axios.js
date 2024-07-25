import axios from 'axios'

//puting the base url of our backend from fire base(we get the base url by running the command npm run build)

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-7fbb3/us-central1/api",   this is the local baseURL
  baseURL: "https://amazon-api-deploy-6ry6.onrender.com/", // this is the live base url deployed on render
});
export {axiosInstance}