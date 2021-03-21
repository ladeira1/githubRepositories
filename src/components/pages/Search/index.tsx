import { FC, FormEvent, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../Button';
import { InputText } from '../../InputText';
import { Container } from './styles';

export const Search: FC = () => {
  const [username, setUsername] = useState('');

  function handleUsernameChange(newUsername: string) {
    setUsername(newUsername);
  }

  function handleSearchForUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSearchForUser}>
        <div className="input-wrapper">
          <h2>Search for your github repostories</h2>
          <InputText
            placeholder="Username"
            value={username}
            onUsernameChange={handleUsernameChange}
          />
        </div>
        <Button text="Go" type="submit" Icon={FiArrowRight} />
      </form>
    </Container>
  );
};
