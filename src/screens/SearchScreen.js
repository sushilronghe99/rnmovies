


import { Text } from 'react-native';
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";

import React, { useState, useEffect, usePrevious } from 'react';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';
import SearchBar from '../components/SearchBar';
import { Box, Heading, FlatList, HStack, VStack, Spacer, Avatar, ScrollView } from 'native-base';

const SearchScreen = () => {

  const [movies, setMovies] = useState([])

  const [searchValue, setSearchValue] = useState('')

  //const prevValue = usePrevious(searchValue);

  const getMovieRequest = async () => {


    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  setTimeout

  useEffect(() => {


    getMovieRequest();




  }, [searchValue]);


  return (

    <VStack space={4} alignItems="center">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} isFavourites={false} />
      <MovieList movies={movies} />
    </VStack>




  );
};

export default SearchScreen;
