//import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/search-bar/search-bar.component';
import './App.css';


const App = () => {

  //initialize values
  const [searchField, setSearchField] = useState(''); //useState returns an array [valueToStore, setValue]
  const [bots, setBots] = useState([]);
  const [filteredBots, setFilteredBots] = useState(bots);

  console.log('rendered');

  //call useEffect when the App mounts
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setBots(users));
  }, []);

  useEffect(() => {
    const newFilteredBots = bots.filter((bot) => {
      return bot.username.toLocaleLowerCase().includes(searchField);
      });
    setFilteredBots(newFilteredBots);
  }, [bots, searchField]); //call when bots or searchField change

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

  return(
    <div className="App">
      <h1 className='app-title'>Cat Bots</h1>
      
      <SearchBar 
      className='bots-search-bar'
      onChangeHandler= {onSearchChange} 
      placeholder='Search for a cat bot'  /> 

      <CardList bots={filteredBots} />
        
    </div>
  )
}

// class App extends Component {

// constructor () {
//     super();

//     this.state = {
//       bots: [],
//       searchField: ''
//     };
// }

// //Fetch array of users from API
// componentDidMount() {
//   fetch('http://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((users) => this.setState(() => {
//     return {bots: users};
//     }
//   ));
// }

// //
// onSearchChange = (event) => {
//   const searchField = event.target.value.toLocaleLowerCase();
//   this.setState(() => {
//     return { searchField };
//   })
// };

//   render() {
//     const { bots, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredBots = bots.filter((bot) => {
//       return bot.username.toLocaleLowerCase().includes(searchField);
//      });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Cat Bots</h1>
//         <SearchBar 
//         className='bots-search-bar'
//         onChangeHandler= {onSearchChange} 
//         placeholder='Search for a cat bot'  /> 
//         <CardList bots={filteredBots} />
//       </div>
//     );
//   } 
// }

export default App;
