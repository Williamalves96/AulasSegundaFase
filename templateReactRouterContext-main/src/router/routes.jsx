import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Melancias from "../pages/Melancias";
import Loguin from "../pages/Loguin";

const router = createBrowserRouter([
    
    {path: "/home", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/melancias", element:<Melancias/>},
    {path:"/", element:<Loguin/>}
])

export default router;
