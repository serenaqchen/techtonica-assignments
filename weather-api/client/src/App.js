import React from "react";
import './App.css';
import Homepage from './components/Homepage';


function App() {
  const [data, setData] = React.useState(null);

  // //fetch data from our own API 
  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
