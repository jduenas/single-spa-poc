import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. From Docker!
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
