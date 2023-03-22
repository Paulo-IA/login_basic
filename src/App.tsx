import { useContext } from 'react';
import * as C from './AppStyles'
import { Header } from './components/Header';
import { useAppSelector } from './redux/hooks/useAppSelector';
import { MainRoutes } from './routes/mainRoutes';

const App = () => {
  const theme = useAppSelector(state => state.theme)

  return (
    <C.Container theme={theme.status}>
      <Header />

      <MainRoutes />

    </C.Container>
  );
}

export default App;