
import './App.css'
import Sidebar from './components/layouts/Sidebar'
import Topbar from './components/layouts/Topbar'

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
