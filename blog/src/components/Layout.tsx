import Header from './Header';
import Navigation from './Navigation';

const Layout: React.FunctionComponent = () => {
    return (
        <div>
            <Navigation />
            <div className="main">
                <Header title="Posts" />
            </div>
        </div>
    );
};

export default Layout;
