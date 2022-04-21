// Aboutscreen.js

import { Button, View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { useSelector, useDispatch } from 'react-redux'
import  {Box,Heading,FlatList,HStack,VStack,Spacer,Avatar, ScrollView}  from 'native-base';

export default function Aboutscreen () {
   {
    const favourites = useSelector(state => state.favorites);

    return (
      <VStack space={4} alignItems="center">
         
           
         <MovieList movies={favourites} isFavourites={true}/>
       
    </VStack>
    )
  }
}