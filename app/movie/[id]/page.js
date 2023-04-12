import React from "react";
import { notFound } from "next/navigation";

import MovieContainer from "@/containers/movies";
import Movies from "@/mocks/movies.json";

function MoviePage({ params, searchparams }) {
  const movieDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );

  if (!movieDetail) {
    notFound();
  }

  return <MovieContainer movie={movieDetail} />;
}

export default MoviePage;
