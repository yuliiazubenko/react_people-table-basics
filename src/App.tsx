import { Navigation } from './components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <div data-cy="app">
    <Navigation />
    <main className="section">
      <div className="container">
        <Outlet />
      </div>
    </main>
  </div>
);
