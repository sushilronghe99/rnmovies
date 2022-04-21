import React, { useEffect, useState } from "react";

import ScrolloverView from 'react-native-scrollover-view';
import { Box, Pressable, IconButton, HStack, VStack, Text, Fab, ScrollView, Icon, Center, Image, Flex, Button, View } from 'native-base';
import Detail from "../components/Detail";


//http://www.omdbapi.com/?apikey=263d22d8&i=tt0121766
  const MovieDetail = (route) => {
  const { thisMovie } = route.route.params;
  const [movieID, setMovieID] = useState();
  const [movie, setMovie] = useState();

  const getMovieDetail = async () => {
    const url = `http://www.omdbapi.com/?apikey=263d22d8&i=${movieID}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    
    if (responseJson) {
      console.log(responseJson)
      setMovie(responseJson);
    }
  };

  useEffect(() => {

    setMovieID(thisMovie.imdbID)
  }, [])

  useEffect(() => {
    if (movieID)
      getMovieDetail();
  }, [movieID])




  return (
    <VStack space={4} alignItems="center">

      {movie ? <Detail theMovie={movie} /> : <></>}
    </VStack>
  );
};

export default MovieDetail;