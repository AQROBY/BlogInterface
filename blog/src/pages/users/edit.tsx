import { Container } from 'react-bootstrap';
import User from '../../components/Forms/users/createUser';
import Header from '../../components/header';
import UserRepo from '../../services/repoUsers';
import { useParams } from 'react-router-dom';

const Edit = () => {
    const repo = UserRepo.getInstance();
    const { id } = useParams();

    if (id == undefined) {
        return <h1>Not found!</h1>;
    }

    let idAsNumber: number = +id;
    let user = repo.find(idAsNumber);

    return (
        <Container fluid className="p-0">
            <Header title="Edit User" />
            <Container className="center">{<User id={user.id} name={user.name} email={user.email} password={user.password} />}</Container>
        </Container>
    );
};

export default Edit;
