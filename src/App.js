
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Navbar from './Features/Navbar/Navbar';
import ChatScreen from './Features/Chat-Screen/ChatScreen';
import Sidebar from './Features/Side Bar/Sidebar';


function App() {

  let routes = createBrowserRouter([
    {
      path:'/',Component:Navbar,children:[
        {index:true,Component:Sidebar}
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
