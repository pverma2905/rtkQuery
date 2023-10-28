import { createBrowserRouter, Outlet } from 'react-router-dom';
import './App.css'
import Read from "./components/Read";
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store';
import Create from './components/Create';
import Edit from './components/Edit';
export const router = createBrowserRouter([
  { path:"/", element:<App/>, 
children:[
  { path: "/", element: <Read />},
  { path: "/create", element: <Create/>},
  { path: "/edit/:id", element: <Edit/>}
]

}
])


function App() {
  
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    
    </>
  )
}

export default App
