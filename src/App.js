import "./App.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./request";
import React from "react";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        isLargeRow={true}
        fetchUrl={requests.fetchNetFlixOriginals}
        title="NETFLIX ORIGINALS"
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTreding} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorroMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
