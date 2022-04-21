
import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
import  {Box,Pressable,IconButton,HStack,VStack,Text,Fab,ScrollView,Icon,Center,Image, Flex, Button, View}  from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";

import { useSelector, useDispatch } from 'react-redux'


const MovieGrid = (props)=>{
    //const navigation = useNavigation();
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorites);

    const  columnSize = 3;
    const MovieColumn = [...Array( Math.ceil(props.movies.length / columnSize) )];
    
    const MovieRows = MovieColumn.map( (row, idx) => props.movies.slice(idx * columnSize, idx * columnSize + columnSize) )
    
    const [isClick, setClick] = useState([])
    return(
        <>
          <ScrollView  _contentContainerStyle={{
      
      mb: "4",
      
      w:"100%",
      h:"90%"
    }}>
        <VStack space="2.5"  >
        {
            MovieRows.map((row, idx) => (
                <HStack width="100%" space={3} key={idx} justifyContent="space-evenly" >
         
                       { row.map((theMovie, idx) => (
                        <View key={theMovie.imdbID} >
                          <Center   rounded="md" _text={{
                            color: "warmGray.50",
                            fontWeight: "medium"
                          }} shadow={"1"}>
                           
                           <Pressable onPress={ ()=> props.navigation.navigate('MovieDetail',{
                                thisMovie: theMovie})
                           
                            }>
                              <Image   width={110} height={180}   source={{'uri': theMovie.Poster}
                            }  alt="Alternate Text">
                             
                               </Image>
                               </Pressable>
                               
                            </Center >
                            <Box maxW="110" w="100%"  > 

                           <HStack bg="muted.800" h={46}>
                              <Flex  maxW="80" flex={1} ml={1} _text={{
                                fontSize: "md",
                                fontWeight: "medium",
                                color: "warmGray.50",
                                
                              }}>
                                 <Text fontSize="10"  _light={{
                                    color: "info.50"
                                }} _dark={{
                                    color: "violet.400"
                                }} fontWeight="700">{theMovie.Title.slice(0,24)+".."}</Text>
                               <Text _light={{
                                    color: "info.50"
                                }} _dark={{
                                    color: "violet.400"
                                }} fontSize="8" fontWeight="700" > Year : {theMovie.Year}</Text>
                               
                              
                              
                                </Flex>

                                <IconButton borderRadius="sm" variant="transparent" mr={2} height={8} width={5} icon={<Icon as={AntDesign} name="heart"  style={{color: favorites.includes(theMovie) ? 'firebrick' : "white"}} />}
                                onPress= {() => {!favorites.includes(theMovie) ? dispatch({type:'add_favourite',payload:theMovie}) :""}}></IconButton>
                                
                                

                                </HStack>
                                </Box>


                                </View>
                            
                           
                        ))
                        }
                </HStack>
            ))
        }
        </VStack>
        </ScrollView>
        
        
        
        </>
    )

}

export default MovieGrid;