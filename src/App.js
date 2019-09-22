import React, {useState} from 'react';
//import ReportDispatcher from 'jest-jasmine2/build/jasmine/ReportDispatcher';

function App() {
  const [repositories, setRepositorie] = useState([

    {id:1, name:'repo1'},
    {id:2, name:'repo2'},
    {id:3, name:'repo3'},
    {id:4, name:'repo4'}

  ]);
  return (
    repositories.map(
      function(repo){
        return(<h1>{ `${repo.id} - ${repo.name}`}</h1>)
      })
  );
}

export default App;
