import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from './components/Counter';
import DataFetcher from './components/DataFetch';
import DisplayContextValue from './components/DisplayContextValue';
import CounterWithReducer from './components/counterWithReducer';
import FocusInput from './components/focuseInput';
import ExpensiveCalculation from './components/expensiveCalculation';
import UseCallbackExample from './components/useCallbackExample';
import WindowWidthComponent from './components/useWindowWidth';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="p-6 bg-blue-600 text-white shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold">React Hooks Demo</h1>
            <ul className="flex space-x-6">
              {/* <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
              <li><Link to="/counter" className="hover:text-gray-300 transition">Counter</Link></li>
              <li><Link to="/data-fetcher" className="hover:text-gray-300 transition">Data Fetcher</Link></li>
              <li><Link to="/context" className="hover:text-gray-300 transition">Context Value</Link></li>
              <li><Link to="/reducer" className="hover:text-gray-300 transition">Reducer Counter</Link></li>
              <li><Link to="/focus-input" className="hover:text-gray-300 transition">Focus Input</Link></li>
              <li><Link to="/expensive-calculation" className="hover:text-gray-300 transition">Expensive Calculation</Link></li>
              <li><Link to="/callback" className="hover:text-gray-300 transition">UseCallback Example</Link></li>
              <li><Link to="/window-width" className="hover:text-gray-300 transition">Window Width</Link></li> */}
            </ul>
          </div>
        </nav>
        <main className="p-8">
          <Routes>
            <Route 
              path="/" 
              element={
                <div className="text-center">
                  <h2 className="text-4xl font-bold mb-8">Welcome to the React Hooks Demo!</h2>
                  <p className="text-lg mb-8">Explore various React hooks through the links below:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <Link 
                      to="/counter"
                      className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition"
                    >
                      <h3 className="text-xl font-semibold mb-2">Counter</h3>
                      <p className="text-gray-600">Learn how to manage state with a simple counter.</p>
                    </Link>
                    <Link 
                      to="/data-fetcher"
                      className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition"
                    >
                      <h3 className="text-xl font-semibold mb-2">Data Fetcher</h3>
                      <p className="text-gray-600">Fetch and display data from an API.</p>
                    </Link>
                    <Link 
                      to="/context"
                      className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition"
                    >
                      <h3 className="text-xl font-semibold mb-2">Context Value</h3>
                      <p className="text-gray-600">Understand how to use React Context.</p>
                    </Link>
                    <Link 
                      to="/reducer"
                      className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition"
                    >
                      <h3 className="text-xl font-semibold mb-2">Reducer Counter</h3>
                      <p className="text-gray-600">Manage state using the useReducer hook.</p>
                    </Link>
                    <Link 
                      to="/focus-input"
                      className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition"
                    >
                      <h3 className="text-xl font-semibold mb-2">Focus Input</h3>
                      <p className="text-gray-600">Learn how to automatically focus an input.</p>
                    </Link>
                    <Link 
                      to="/expensive-calculation"
                      className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition"
                    >
                      <h3 className="text-xl font-semibold mb-2">Expensive Calculation</h3>
                      <p className="text-gray-600">Optimize performance for expensive calculations.</p>
                    </Link>
                    <Link 
                      to="/callback"
                      className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition"
                    >
                      <h3 className="text-xl font-semibold mb-2">UseCallback Example</h3>
                      <p className="text-gray-600">Understand the useCallback hook.</p>
                    </Link>
                    <Link 
                      to="/window-width"
                      className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-100 transition"
                    >
                      <h3 className="text-xl font-semibold mb-2">Window Width</h3>
                      <p className="text-gray-600">Manage and display window width.</p>
                    </Link>
                  </div>
                </div>
              } 
            />
            <Route path="/counter" element={<Counter />} />
            <Route path="/data-fetcher" element={<DataFetcher />} />
            <Route path="/context" element={<DisplayContextValue />} />
            <Route path="/reducer" element={<CounterWithReducer />} />
            <Route path="/focus-input" element={<FocusInput />} />
            <Route path="/expensive-calculation" element={<ExpensiveCalculation />} />
            <Route path="/callback" element={<UseCallbackExample />} />
            <Route path="/window-width" element={<WindowWidthComponent />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
