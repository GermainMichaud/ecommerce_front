import './App.css';

import { Outlet } from '@tanstack/react-location';

const App = () => (
  <>
    <h1>Ecommerce</h1>
    <Outlet />
  </>
);

export default App;
