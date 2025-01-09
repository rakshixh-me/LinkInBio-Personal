import React, { Suspense} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
const Loader = React.lazy(() => import("./components/Loader/Loader"));
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense> 
      </div>
      <ToastContainer />
    </Router>
    
  );
}

export default App;
