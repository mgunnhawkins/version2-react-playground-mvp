import React from 'react';
import AllCards from './components/AllCards';
import PlaygroundObjects from './components/PlaygroundObjects';
//import card List

class App extends React.Component {
    state={ playgroundObjects: [] };
   
    //render method
    //return
   
    render () {
        return (
            <div>
                <AllCards />
            </div>
         )
    }
    
};


export default App;