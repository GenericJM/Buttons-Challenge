import './App.css'
import { Buttons } from './components/Buttons/Buttons.jsx'
import Button from './components/Button/Button'
import { ButtonStyle } from './components/styleComponents/ButtonStyles'

function App() {  
  
  return<> <main className='flex'>
    
    <aside className='aside'>
  
      <ul className='ul'>
     <li className='li liTitle'> <a className="Devchallenges" href='https://devchallenges.io/' target='blank'><spam className="spam">Dev</spam>challenges.io </a></li>
    
     <li className='li'> <a className='asideLink'>Colors</a></li>
     <li className='li'> <a className='asideLink'>Typography</a></li>
     <li className='li'> <a className='asideLink'>Spaces</a></li>
     <li className='li'> <a className='asideLink'>Buttons</a></li>
     <li className='li'> <a className='asideLink'>Inputs</a></li>
     <li className='li'> <a className='asideLink'>Grid</a></li>

      </ul>
      
      
    </aside>
    <div className='Buttons '>
    <h1 className='title'>Buttons</h1>   
     
    <Buttons />  

    </div>   
  
  </main>
  <footer className="footer">
    <h5 class="text">created by <a target="_blank" href="https://devchallenges.io/portfolio/GenericJM">GenericJM</a> - devChallenges.io</h5>
  </footer>
</>
}

export default App
