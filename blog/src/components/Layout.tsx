import { Outlet } from 'react-router-dom';
import Navigation from './navigation';

const Layout: React.FunctionComponent = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
};

export default Layout;
