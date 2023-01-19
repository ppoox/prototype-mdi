import './assets/css/common.css'
import Header from './components/Header'
import Container from './components/Container'
import 'react-tabulator/lib/styles.css'
import 'react-tabulator/lib/css/tabulator.min.css' // theme

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  )
}
