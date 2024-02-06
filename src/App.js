import "./App.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./requests";
import axios from "axios";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
    <Nav/>
      <Banner />
      <h1 className="title">Vyom Netflix Clone</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Now" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Now" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
