// react
import { Link, Route, Switch } from 'react-router-dom';

// components
import Table from './components/Table';
import Chart from './components/Chart';

// style
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
          <Link to="/table">Table</Link>
        </div>
        <div className="transition ease-in-out delay-150 bg-red-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 ...">
          <Link to="/charts">Charts</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/charts" component={Chart} />
      </Switch>
    </div>
  );
}

export default App;
