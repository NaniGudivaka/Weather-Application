
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'

function App() {
  

  return (
    <>
    <div className='app-layout'>
      <Sidebar />

      <div className='main-content'>
        <Topbar />

        <main className='page-content'>
          <h1>Dashboard</h1>
        </main>

      </div>

    </div>
    
    
    </>
  )
}

export default App
