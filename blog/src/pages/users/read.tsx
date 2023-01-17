import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header';
import Confirmation from '../../components/modals/users/confirmation';
import Content from '../../components/styles/content';
import UserRepo from '../../services/repoUsers';

const Read = () => {
    const repo = UserRepo.getInstance();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const { id } = useParams();

    if (id === undefined) {
        return <h1>Not found!</h1>;
    }

    let idAsNumber: number = +id;
    let user = repo.find(idAsNumber);

    function handleDate(date: Date) {
        return date.toLocaleString();
    }

    function handleSetOpenDeleteModal(bool: boolean) {
        setOpenDeleteModal(bool);
    }

    function handleDeletePost() {
        repo.delete(idAsNumber);
    }

    return (
        <Container fluid className="p-0">
            <Header title={user.name} />
            <div className="float-right mr-5 mt-3 pr-5">
                <Link to={'/users/edit/' + user.id} replace>
                    <button className="btn btn-primary pl-3 pr-3">Edit</button>
                </Link>
                <button className="btn btn-danger ml-1" onClick={() => setOpenDeleteModal(true)}>
                    Delete
                </button>
            </div>
            <Container className="center">
                <Confirmation open={openDeleteModal} setOpen={handleSetOpenDeleteModal} handleOperation={handleDeletePost} />
                <div className="mt-5 mb-5 pb-5">
                    <Content>{user.email}</Content>
                    <Content>{user.password}</Content>
                    <div className="pt-4">
                        <h3 className="float-left text-dark">Created at: {handleDate(new Date(user.created_at))}</h3>
                        <h3 className="float-right text-dark">Modified at: {handleDate(new Date(user.modified_at))}</h3>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Read;
