import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import {routes} from "./router";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout /> } >
          <Route index element={<Dashboard/>} />
          {
            routes?.map((item) => (<Route key={item.path} path={item.path} element={item.element}/>))
          }
        </Route>
      </Routes>
    </>
  );
}

export default App;
