import './App.css';
import methodAPI from './api/callAPI';
import { useEffect, useState } from 'react';
import API from './utility/api-request';
import { TestPage } from './components/SamplePage';
function App() {
  return (
    <div className="App">
      <TestPage />
    </div>
  );
}

export default App;
