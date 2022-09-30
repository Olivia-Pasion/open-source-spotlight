// react
import { Link, Route, Switch } from 'react-router-dom';

// components
import Table from './components/Table';

// style
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/charts">
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
