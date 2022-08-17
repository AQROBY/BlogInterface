import React, { useState, Fragment } from 'react';
import { nanoid } from 'nanoid';
import data from '../mock-posts.json';
import EditableRow from '../components/Rows/EditableRow';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ReadOnlyRow from '../components/Rows/ReadOnlyRow';

export interface IPostProps {}

const Posts: React.FunctionComponent<IPostProps> = (props) => {
    const [posts, setPosts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        title: '',
        contents: '',
        created_at: '',
        modified_at: ''
    });

    const [editFormData, setEditFormData] = useState({
        title: '',
        contents: '',
        created_at: '',
        modified_at: ''
    });

    const [editPostId, setEditPostId] = useState(null);

    const handleAddFormChange = (event: any) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData: any = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event: any) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData: any = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event: any) => {
        event.preventDefault();

        const newPost = {
            id: nanoid(),
            title: addFormData.title,
            contents: addFormData.contents,
            created_at: addFormData.created_at,
            modified_at: addFormData.modified_at
        };

        const newposts: any = [...posts, newPost];
        setPosts(newposts);
    };

    const handleEditFormSubmit = (event: any) => {
        event.preventDefault();

        const editedPost = {
            id: editPostId,
            title: editFormData.title,
            contents: editFormData.contents,
            created_at: editFormData.created_at,
            modified_at: editFormData.modified_at
        };

        const newposts: any = [...posts];

        const index = posts.findIndex((post) => post.id === editPostId);

        newposts[index] = editedPost;

        setPosts(newposts);
        setEditPostId(null);
    };

    const handleEditClick = (event: any, Post: any) => {
        event.preventDefault();
        setEditPostId(Post.id);

        const formValues = {
            title: Post.title,
            contents: Post.contents,
            created_at: Post.created_at,
            modified_at: Post.modified_at
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditPostId(null);
    };

    const handleDeleteClick = (PostId: any) => {
        const newposts = [...posts];

        const index = posts.findIndex((Post) => Post.id === PostId);

        newposts.splice(index, 1);

        setPosts(newposts);
    };

    return (
        <div className="d-flex">
            <Container fluid className="p-0">
                <Navigation />
                <Header title="Home" />
                <Container className="mt-5">
                    <form onSubmit={handleEditFormSubmit}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Contents</th>
                                    <th>Created At</th>
                                    <th>Modified At</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts.map((post) => (
                                    <Fragment>
                                        {editPostId === post.id ? (
                                            <EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancelClick={handleCancelClick} />
                                        ) : (
                                            <ReadOnlyRow post={post} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                                        )}
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                    </form>

                    <hr />
                    <h2>Add a Post</h2>
                    <form onSubmit={handleAddFormSubmit}>
                        <input className="mr-2" type="text" name="title" required placeholder="Enter a title..." onChange={handleAddFormChange} />
                        <input className="mr-2" type="text" name="contents" required placeholder="Enter content..." onChange={handleAddFormChange} />
                        <input className="mr-2" type="text" name="created_at" required placeholder="Enter created at date..." onChange={handleAddFormChange} />
                        <input className="mr-2" type="text" name="modified_at" required placeholder="Enter modified at date..." onChange={handleAddFormChange} />
                        <button type="submit">Add</button>
                    </form>
                </Container>
            </Container>
        </div>
    );
};

export default Posts;
