import { FC, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../services/api';

interface LocationState {
  username: string;
}

interface UserData {
  name: string;
  avatar: string;
  repositories: number;
}

export const User: FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    async function getUsersRepositories() {
      try {
        const { username } = location.state;
        const response = await api.get(`/${username}`);

        setUser({
          name: response.data.name,
          avatar: response.data.avatar_url,
          repositories: Number(response.data.public_repos),
        });
      } catch (err) {
        toast.error('User not found');
        history.push('/');
      }
    }

    getUsersRepositories();
  }, []);

  return (
    <div>
      <h2>{user?.name}</h2>
      <img src={user?.avatar} alt={user?.name} />
      <h3>{user?.repositories}</h3>
    </div>
  );
};
