import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

// import NavigationBar from "./SharedLayout/SharedLayout";
// import { Home } from "pages/HomePage/Home";
// import Movies from "pages/MoviesPage/Movies";
// import MoviesDetails from "pages/MoviesDetails/MoviesDetails";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews/Reviews";
// import { NotFound } from "pages/NotFound";
// import Spinner from "./Spinner/Spinner";

const Home = lazy(() => import("pages/HomePage/Home"));
const Movies = lazy(() => import("pages/MoviesPage/Movies"));
const MoviesDetails = lazy(() => import("pages/MoviesDetails/MoviesDetails"));
const NotFound = lazy(() => import("pages/NotFound"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));
const NavigationBar = lazy(() => import("./SharedLayout/SharedLayout"));
const Spinner = lazy(() => import("./Spinner/Spinner"));



export const App = () => {
  return (
    <main>
      <NavigationBar />
      <Suspense fallback={<Spinner/>}>
      <Routes>
        {/* <Route path="/" element = {<NavigationBar/>} /> */}
        <Route path="/" end element={<Home/>}/>
        <Route path="/movies" element = {<Movies/>} />
        <Route path="/movies/:movieId" element = {<MoviesDetails/>}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </main>
  );
};
