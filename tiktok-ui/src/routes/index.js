import routesConfig from '~/config/routes';

//layouts
import { HeaderOnly } from '~/components/Layout';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//có thể coi được ở mọi chế độ
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile , component: Profile },
    { path: routesConfig.upload , component: Upload, layout: HeaderOnly },
    { path: routesConfig.search , component: Search, layout: null },
];

//phải đăng nhập mới vào được route này
const privateRoutes = [];

export { privateRoutes, publicRoutes };
