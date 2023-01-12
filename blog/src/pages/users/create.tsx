import { Container } from 'react-bootstrap';
import User from '../../components/Forms/users/createUser';
import Header from '../../components/header';

const Create = () => {
    return (
        <Container fluid className="p-0">
            <Header title="Create User" />
            <Container className="center">{<User />}</Container>
        </Container>
    );
};

export default Create;
