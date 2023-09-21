import './App.css'
import { Buttons } from './components/Buttons/Buttons.jsx'
import Button from './components/Button/Button'
import { ButtonStyle } from './components/styleComponents/ButtonStyles'

function App() {  
  
  return <main className='flex'>
    
    <aside className='aside'>
  
      <ul className='ul'>
     <li className='li liTitle'> <a href='https://devchallenges.io/' target='blank'>Devchallenges.io </a></li>
     <li className='li'> <Button variant="text" text='Colors' /></li>
     <li className='li'> <Button variant="text" text='Typography'/></li>
     <li className='li'> <Button variant="text" text='Spaces'/></li>
     <li className='li'> <Button variant="text" text='Buttons'/></li>
     <li className='li'> <Button variant="text" text='Inputs' /></li>
     <li className='li'> <Button variant="text" text='Grid'/></li>

      </ul>
      
      
    </aside>
    <div className='Buttons '>
    <h1 className='title'>Buttons</h1>   
     
    <Buttons />  

    </div>
    
 </main>
}

export default App
