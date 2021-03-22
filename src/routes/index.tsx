import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Search } from '../components/pages/Search';

export const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Search} exact />
    </Switch>
  </BrowserRouter>
);
