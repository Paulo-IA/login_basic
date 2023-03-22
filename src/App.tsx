import { useContext } from 'react';
import * as C from './AppStyles'
import { Header } from './components/Header';
import { Context } from './contexts/Context';
import { MainRoutes } from './routes/mainRoutes';

const App = () => {
  const { state, dispatch } = useContext(Context)

  return (
    <C.Container theme={state.theme.status}>
      <Header />

      <MainRoutes />

    </C.Container>
  );
}

export default App;