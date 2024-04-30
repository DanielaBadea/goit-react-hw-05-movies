import NavigationBar from "./SharedLayout/SharedLayout";
import { Home } from "pages/HomePage/Home";
import Movies from "pages/MoviesPage/Movies";
import MoviesDetails from "pages/MoviesDetails/MoviesDetails";
import { Routes, Route } from "react-router-dom";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";
import { NotFound } from "pages/NotFound";

export const App = () => {
  return (
    <main>
      <NavigationBar />
      <Routes>
        <Route path="/" element = {<NavigationBar/>} />
        <Route index element={<Home/>}/>
        <Route path="movies" element = {<Movies/>} />
        <Route path="movies/:movieId" element = {<MoviesDetails/>}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </main>
  );
};
