
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//có thể coi được ở mọi chế độ
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/:nickname', component: Profile},
    {path: '/profile/:nickname', component: Profile},
    {path: '/upload', component: Upload, layout : HeaderOnly},
    {path: '/search', component: Search, layout: null},
];

//phải đăng nhập mới vào được route này
const privateRoutes = [];

export { privateRoutes, publicRoutes };
