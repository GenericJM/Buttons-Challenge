import './App.css'
import Buttons, { Button } from './components/Button'
function App() {
  // const buttonStyle="hola"
  // const prueba = "te";
  // prueba=== ("text"||"tet") ? console.log("text"):console.log("otra cosa")
  
  return <main>
    <h1 className='title'>Buttons</h1>   
     
    <Buttons/>
   

    {/* <Button $disableshadow>disableShadow</Button>
    <Button $disabled>disabled</Button>
    <Button $variant={"text"} $disabled>disabled</Button>

    <Buttons startIcon="local_grocery_store"></Buttons> */}
    
 </main>
}

export default App
