import ReactDOM from 'react-dom/client'
import FloatBall from 'float-ball'
function App() {
  return (
    <FloatBall/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(<App/>)