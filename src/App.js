import React, {useState, useEffect} from 'react';
//import ReportDispatcher from 'jest-jasmine2/build/jasmine/ReportDispatcher';

function App() {
  const [repositories, setRepositories] = useState([]);


  useEffect(() => {

    const fetchResponse = async () => {
      const response = await fetch('https://api.github.com/users/alanfernandes63/repos');
      const data = await response.json();
      //const data = [{id:1, name:'alan'}]
      setRepositories(data);
    }

    fetchResponse();
  },[]);

  return (
    <>
    {repositories.map(
      repo =>  (<li key={repo.id}>{repo.name}</li>
      ))}
    </>
  );
}

export default App;
