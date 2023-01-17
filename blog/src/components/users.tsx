import { Link } from 'react-router-dom';
import UserRepo from '../services/repoUsers';
import Content from './styles/content';
import UserType from './types/userType';

const Users = () => {
    const repo = UserRepo.getInstance();

    function handleDate(date: Date) {
        return date.toLocaleString();
    }

    return (
        <div>
            {repo.size() === 0 ? (
                <p>No users found!</p>
            ) : (
                repo
                    .findAll()
                    .sort((a: UserType, b: UserType) => (a.created_at < b.created_at ? 1 : -1))
                    .map((user: UserType) => (
                        <div className="border border-dark mt-3 mb-4 p-3 bgl" key={user.id}>
                            <div className="row p-3">
                                <Link to={'read/' + user.id} replace style={{ textDecoration: 'none' }}>
                                    <div>
                                        <h2 className="text-dark font-weight-bold">{user.name}</h2>
                                        <div className="mb-3">
                                            <Content>
                                                <strong>{user.email}</strong>
                                                <strong>{user.password}</strong>
                                            </Content>
                                        </div>
                                        <div className="text-dark font-weight-bold">
                                            <p>Created at: {handleDate(new Date(user.created_at))}</p>
                                            <p>Modified at: {handleDate(new Date(user.modified_at))}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ))
            )}
        </div>
    );
};

export default Users;
