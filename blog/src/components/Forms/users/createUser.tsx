import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UserRepo from '../../../services/repoUsers';
import Confirmation from '../../modals/posts/confirmation';
import UserType from '../../types/userType';

const User = (props: any) => {
    const repo = UserRepo.getInstance();
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [dataTemp, setDataTemp] = useState<UserType>();

    const data: UserType = {
        id: UserRepo.assignId() + 1,
        name: props.name,
        email: props.email,
        password: props.password,
        created_at: new Date(),
        modified_at: new Date()
    };

    function handleOpenEditModal(event: any) {
        setOpenEditModal(true);
        event.preventDefault();
    }

    function handleEdit() {
        if (dataTemp != undefined) {
            data.name = dataTemp.name;
            data.email = dataTemp.email;
            data.password = dataTemp.password;
            data.modified_at = dataTemp.modified_at;
        }
        repo.update(props.id, data);
    }

    const handleSubmit = (event: any) => {
        if (validated === true) {
            data.name = event.target[0].value;
            data.email = event.target[1].value;
            data.password = event.target[2].value;
            setDataTemp(data);

            if (props.name === undefined) {
                repo.create(data);
                navigate('/users/read/' + data.id, { replace: true });
            } else {
                handleOpenEditModal(event);
            }
        }
    };

    const handleValidation = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            setValidated(false);
            return;
        }
        setValidated(true);
    };

    const handleCancel = () => {
        if (props.id != undefined) {
            navigate('/users/read/' + props.id, { replace: true });
        } else {
            navigate('/users', { replace: true });
        }
    };

    return (
        <>
            <Form validated={validated} onSubmit={handleSubmit} className="mt-3 mb-4" title="Create User">
                <Confirmation open={openEditModal} setOpen={setOpenEditModal} handleOperation={handleEdit} id={props.id} />
                <Form.Group className="mb-3 content">
                    <Form.Label className="text-dark">Name</Form.Label>
                    <Form.Control className="bg-light" required name="name" type="text" placeholder="Enter name" defaultValue={props.name} onBlur={handleValidation} />
                    <Form.Text className="text-dark">Example: Alin Mihalcea</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 content">
                    <Form.Label className="text-dark">Email</Form.Label>
                    <Form.Control className="bg-light" required name="email" type="email" placeholder="Enter email" defaultValue={props.email} onBlur={handleValidation} />
                    <Form.Text className="text-dark">Example: alinmihalcea@yahoo.com</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 content">
                    <Form.Label className="text-dark">Password</Form.Label>
                    <Form.Control className="bg-light" required name="password" type="password" placeholder="Enter password" defaultValue={props.password} onBlur={handleValidation} />
                    <Form.Text className="text-dark">Example: computer</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button className="ml-1" variant="primary" type="button" onClick={handleCancel}>
                    Cancel
                </Button>
            </Form>
        </>
    );
};

export default User;
