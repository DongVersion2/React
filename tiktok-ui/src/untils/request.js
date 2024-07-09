import axios from "axios";

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

//nếu muốn lấy ra data thì phải console.log(res.data.data);
//cái này mục đích để xử lí nó
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
}

export default request