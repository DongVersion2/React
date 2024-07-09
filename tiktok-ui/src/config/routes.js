//mục đích của tách ra ntn để định nghĩa tuyến đường routes
//sửa 1 chỗ ở đây thôi
//chứ ko phải đi sửa ở nhiều chỗ trên nhiều component file
const routes = {
    home: '/',
    following: '/following',
    profile: '/:nickname',
    upload: '/upload',
    search: '/search',

}

export default routes;