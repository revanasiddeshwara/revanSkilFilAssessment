import { Switch, Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/AnimeList/index";
import AnimeDetails from "./Components/AnimeDetails/index";
import NotFound from "./Components/notFound/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/anime-details/:id" element={<AnimeDetails />}></Route>
        <Route element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
