import React from 'react';

class App extends React.Component{

  render(){
    return(
      <div className='App'>
        <h1>Hello Greg House!</h1>
        <div>
          <form>
            <div className='form-group'>
              <label> User name:</label><br></br>
              <input type='text' name='username'></input><br></br>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>

      </div>
    )
  }

}

export default App;
