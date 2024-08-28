import { ShoppingProvider } from '../../Context'
import { AppUI } from './AppUI'


const App = () => {
  return (
    <ShoppingProvider>
      <AppUI />
    </ShoppingProvider>
  )
}

export default App
