import React from 'react';
import data from './data.json'
import DataTable from './DataTable';
class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <div className="container">
          <DataTable data={data}/>
        </div>
      </div>
    );
  }
}

export default App;
