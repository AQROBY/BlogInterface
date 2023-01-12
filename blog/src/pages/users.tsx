import User from '../components/users';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../components/header';

const Users: React.FunctionComponent = () => {
    return (
        <>
            <Header title={'Users'} />
            <Container fluid className="p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/users/create" replace>
                                <button type="button" className="modalButton mt-3 btn btn-primary">
                                    Add User
                                </button>
                            </Link>
                            <User />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Users;
