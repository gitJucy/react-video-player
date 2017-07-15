import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDa7OXuNaS41ZvHeQ_0zGkB5H0fO0dIcGs';
// new component
//  some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// insert  HTML into DOM

ReactDOM.render(<App />, document.querySelector('.container'));
