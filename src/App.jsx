
import './App.css'
import { Cuerpo } from './componets/cuerpo/Cuerpo'
import { Navar } from './componets/navbar/Navar'
import { Lateranavbar } from './componets/navbar/navbar-lateral/Lateranavbar'
import { Subnavbar } from './componets/navbar/subnavbar/Subnavbar'

function App() {

  return (
    <>
      <Navar />
      <Subnavbar />

      <Cuerpo />
      
      
    </>
  )
}

export default App
