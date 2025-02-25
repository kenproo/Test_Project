import axios from "axios";

// Tạo instance của Axios với cấu hình mặc định
const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/identity_service", // Đặt URL gốc của API
  timeout: 10000, // Thời gian chờ tối đa (ms)
  headers: {
    "Content-Type": "application/json", // Thiết lập Content-Type mặc định
  },
});

// Thêm Interceptor để gắn token vào mỗi request
axiosInstance.interceptors.response.use(function(response) {
return response.data;

})


export default axiosInstance;
