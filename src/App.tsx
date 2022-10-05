import './App.css';

import { Outlet } from '@tanstack/react-location';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Wrapper } from './components/ui/common/Wrapper';

const App = () => (
  <>
    <Navbar />
    <Wrapper maxWidth="800px">
      <Outlet />
    </Wrapper>
    <Footer />
  </>
);

export default App;
