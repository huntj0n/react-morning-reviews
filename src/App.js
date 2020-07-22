import React from 'react';
import List from './Components/List';
import './App.css';
// import React, {Component} from 'react';


// function App(){
//     return(
//         <h1>This is the App Component</h1>
//     )
// }

// export default App

// class App extends Component{
//     constructor(){
//         super();
//         this.state = {

//         }
//     }
    
//     render(){
//         return(
//             <h1>This is the App Component</h1>
//         )
//     }
// }

// export default App;

const App = () => {
    return(
        <div className="App">
            <h1 className="movie-list-title">The Most Amazing Movie List</h1>
            <List/>
        </div>
    )    
}
export default App;