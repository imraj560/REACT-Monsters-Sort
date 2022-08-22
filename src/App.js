import {useState, useEffect} from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

 //setting hooks instead of setstate used in class 

 const [searchField, setSearchField] = useState('');
 const [monsters, setMonsters] = useState([]);
//  const [title, setTitle] = useState('');
 const [filteredMonsters, setFilterMonsters] = useState(monsters);


 console.log('render');

 useEffect(() => {

  fetch('https://jsonplaceholder.typicode.com/users')
          .then(
          (response) => response.json()
        )
          .then(
            (users) =>
            setMonsters(users)
          );
 }
 , []);

 useEffect(() => {

      const newfilteredMonsters = monsters.filter((monster)=>{

        return monster.name.toLocaleLowerCase().includes(searchField);
        
        })  

        setFilterMonsters(newfilteredMonsters);

    }
 , [monsters, searchField])


  const onSearchChange = (event) => {

        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
     
       
       }

  // const onTitleChange = (event) => {

  //       const titleFieldString = event.target.value.toLocaleLowerCase();
  //       setTitle(titleFieldString);
     
       
  //      }     

    

  return (

    <div className="App">
               
     <h1 className="app-title">Search Profile Using React</h1>  

     <SearchBox

        className="monsters-search-box"
        onChangeHandler = {onSearchChange}
        placeholder = "search monsters"

     />

     <br/>

     {/* <SearchBox

        className="title-search-box"
        onChangeHandler = {onTitleChange}
        placeholder = "set your desired title"

     /> */}

    <CardList monsters={filteredMonsters}/>
   
    </div>

  )

}
 
 
// class App extends Component {
 
//   /**
//    * Constructor function
//    */
//   constructor(){
 
   
 
//     super();
//     this.state = {
 
//       monsters:[],
//       searchField:'',
     
//     }
   
//   }
 
//   /**
//    * Mount function
//    */
//   componentDidMount(){
 
   
 
//     fetch('https://jsonplaceholder.typicode.com/users').then(
//       (response) => response.json()
//     ).then(
//       (users) =>
//       this.setState(
//         ()=>{
//           return {monsters : users};
//         },
      
//       )
//     )
//   }
 
//   /**
//    * new class method for search
//    */
 
//   onSearchChange = (event) => {
//     //this give us the string we are trying to search
//     console.log(event.target.value);
 
//     const searchField = event.target.value.toLocaleLowerCase();
 
   
//     this.setState(()=>{
//       return {searchField};
//     })
 
//   }
 
//   /**
//    * render block
//    */
//   render(){
 
          
//             const {monsters, searchField} = this.state;
//             const {onSearchChange} = this;
 
//             const filteredMonsters = monsters.filter((monster)=>{
 
//               return monster.name.toLocaleLowerCase().includes(searchField);
 
//             })
 
//             return (
//               <div className="App">
               
//                 <h1 className="app-title">My First React App</h1>  
//                 {/* <h1>Hello { this.state.monsterOne.name } {this.state.monsterTwo.name} how are you today?</h1> */}
//                 {/* {filteredMonsters.map(
//                   (monster)=>{
 
//                     return (
//                       <div key={monster.id}>
 
//                          <h1>{monster.name}</h1>
 
//                       </div>
                     
//                     )
 
//                   }
//                 )} */}

               
//                 <SearchBox

//                   className="monsters-search-box"
//                   onChangeHandler = {onSearchChange}
//                   placeholder = "search monsters"

//                 />

               
//                 <CardList monsters={filteredMonsters}/>
 
//               </div>
//             );
         
     
 
//   }
// }
 
 
 
export default App;
 

