import ReactDOM from 'react-dom'
import App from './components/App'
import configureStore from './Store/ConfigureStore'
import {Provider} from 'react-redux'

const store = configureStore()
console.log(store.getState())
ReactDOM.render(<Provider store={store}>
                  <App/>
               </Provider>,document.getElementById('root'))