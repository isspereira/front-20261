import Dashboard from './pages/Dashboard';
import Notas from './pages/Notas';
import Faltas from './pages/Faltas';
import Boletos from './pages/Boletos';
import Requerimentos from './pages/Requerimentos';
import Login from './pages/Login';

function App() {
  const pagina = 6;

  return (
    <>
      {pagina === 1 && <Dashboard />}
      {pagina === 2 && <Notas />}
      {pagina === 3 && <Faltas />}
      {pagina === 4 && <Boletos />}
      {pagina === 5 && <Requerimentos />}
      {pagina === 6 && <Login />}
    </>
  );
}

export default App