import './App.css';
import {useState} from 'react';

const lights = [
{ id: 1 , 
  color: 'red' },

{id: 2,
 color:'green'      },

{ id: 3,
color:'yellow'      },


]
function App() {
const [checked, setChecked] = useState(1);
const [color, setColor] = useState('red')

const Next = (id) => {
if (checked === lights.length) {
setColor('red');
setChecked(1);
}
else {
setColor(lights[checked].color)
setChecked(checked + 1)

}
}
return (
    <div className="App">
       <button onClick={Next}> Next   </button>
{lights.map(light => ( <input 
key= {light.id}
type='radio'
checked = {checked === light.id}
onChange = { () => {
setChecked(light.id)
}

}
style={{accentColor: color,}}
/>
)) 
}






) )



    </div>




  )

}  

  ;


export default App;
