import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import DeleteConfirmation from '../../components/modals/deleteConfirmation';
import Navigation from '../../components/Navigation';
import PostRepo from '../../services/repoPosts';

const Read = () => {
    const repo = PostRepo.getInstance();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const { id } = useParams();

    if (id == undefined) {
        return <h1>Not found!</h1>;
    }

    let idAsNumber: number = +id;
    let post = repo.find(idAsNumber);

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
            <Navigation />
            <Header title={post.title} />
            <div className="float-right mr-5 mt-3 pr-5">
                <Link to={'/posts/edit/' + post.id} replace>
                    <button className="btn btn-primary pl-3 pr-3">Edit</button>
                </Link>
                <button className="btn btn-danger ml-1" onClick={() => setOpenDeleteModal(true)}>
                    Delete
                </button>
            </div>
            <Container className="center">
                <DeleteConfirmation open={openDeleteModal} setOpen={handleSetOpenDeleteModal} handleDelete={handleDeletePost} />
                <div className="mt-5 mb-5 pb-5 contents">
                    <p>{post.contents}</p>
                    <div className="pt-4">
                        <h3 className="float-left">Created at: {handleDate(new Date(post.created_at))}</h3>
                        <h3 className="float-right">Modified at: {handleDate(new Date(post.modified_at))}</h3>
                    </div>
                </div>
            </Container>
        </Container>
    );
};

export default Read;
