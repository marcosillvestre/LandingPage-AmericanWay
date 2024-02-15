import ReactDOM from 'react-dom/client'
import HomePage from './home/HomePage.jsx'
import CreateGlobalStyle from './styles/styles.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CreateGlobalStyle />
    <HomePage />
  </>
)
