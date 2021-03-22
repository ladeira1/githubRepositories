import { FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { api } from '../../services/api';

interface LocationState {
  username: string;
}

export const User: FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  useEffect(() => {
    async function getUsersRepositories() {
      const { username } = location.state;

      if (!username) {
        history.push('/');
      }

      const response = await api.get(`/${username}`);

      if (response.data) {
        console.log(response.data);
      }
    }

    getUsersRepositories();
  }, []);

  return (
    <div>
      <h1>Oi</h1>
    </div>
  );
};
