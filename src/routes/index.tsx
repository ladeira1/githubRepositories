import { Switch, Route } from 'react-router-dom';

import { Search } from '../components/pages/Search';
import { User } from '../components/pages/User';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Search} exact />
    <Route path="/user" component={User} />
  </Switch>
);
