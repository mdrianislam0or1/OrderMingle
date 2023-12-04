import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import Home from "./components/pages/Home";
// import Video from "./components/pages/Video";
import SingleUser from "./components/pages/SingleUser";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/users/:userId" element={<Video />} /> */}
        <Route path="/users/:userId" element={<SingleUser />} />
        <Route path="/videos/add" element={<Add />} />
        <Route path="/videos/edit/:videoId" element={<Edit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
