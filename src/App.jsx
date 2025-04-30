import Header from "./componets/Header"
import Info from "./componets/Info"
import Tabl from "./componets/Tabl"

function App() {
  return (
    <div className='m-4'>
      <Header />
      <h1 className='text-4xl font-bold text-center text-indigo-600 mb-10'>Buy, sell and trade crypto today</h1>
      <Tabl />
      <h2 className='text-3xl font-bold text-center text-indigo-600 mt-10 mb-8'>Why BTC Markets?</h2>
      <Info />
    </div>
  )
}

export default App
