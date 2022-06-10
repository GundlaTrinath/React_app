import { useRef } from 'react';
import './App.css';
import Pageone from './components/Pageone'
import Pagetwo from './components/Pagetwo'
import Pagethree from './components/Pagethree'


function App() {
  const page1=useRef(null);
  const page2=useRef(null);
  const page3=useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:'smooth'
    });
  };

  return (
    <div className="App">
      <div className='page'>
        <ul>
          <li onClick={() => scrollToSection(page1)} className='link'>page1</li>
          <li onClick={() => scrollToSection(page2)} className='link'>page2</li>
          <li onClick={() => scrollToSection(page3)} className='link'>page3</li>
        </ul>
      </div>
      <div ref={page1} className='page1'>
        <Pageone primary={true}/>
      </div>
      <div ref={page2} className='page2'>
        <Pagetwo primary={true} name='Trinath' s_date='06/08/2022' e_date='06/12/2022'/>
        <Pagetwo primary={true} name='John' s_date='06/06/2022' e_date='06/12/2022'/>
        <Pagetwo primary={true} name='Sara' s_date='06/02/2022' e_date='06/06/2022'/>
      </div>
      <div ref={page3} className='page3'>
        <Pagethree primary={true}/>
      </div>
    </div>
  );
}

export default App;
