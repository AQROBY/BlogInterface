import Header from './header';
import Navigation from './navigation';

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
