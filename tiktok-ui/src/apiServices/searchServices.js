import * as request from '~/untils/request'; //import * là import tất cả trong component request

export const search = async (q, type = 'less') => {
    //cách dùng với thư viện axios
    //khi nào chạy await xog thì mới chạy setSearchResult
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
