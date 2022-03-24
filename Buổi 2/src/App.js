import './App.css';
import TodoList from './components/todolist';



      function App() {
          let list = [
            {
              value: 'Clean the bedroom'
            },
        
            {
              value: 'Buy some milk'
            },
            {
              value: "Jogging"
            },
            {
              value: "Learn react"
            },
            {
              value: "Doing exercise"
            }
          ]
          return (
            <div className="App">
        
              <input className="input" type="text" placeholder='Enter your task here...'/>
              <hr />
              <ul className = "list_body">
                {
                  list.map((item) => (
                    <li className="list_item">
                      <input className="checkbox" type="checkbox"/>
                      <div>
                          {item.value}
                      </div>
                    </li>
                  ))
                }
              </ul>
              <div className="footer">
                <p>5 tasks left!</p>
                <p>MindX todolist</p>
              </div>
            </div>
          );
        }
        
        export default App;





