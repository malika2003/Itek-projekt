import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './component/Slider';
import {useState} from 'react'
import {Modals} from './component/modal/Modal'
function App() {
  const [modal,setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
  return (
    <div className="App">
      <Slider openModal={openModal}/>
      <Modals modal={modal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
