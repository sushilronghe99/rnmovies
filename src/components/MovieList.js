

import React from 'react';
import { render } from 'react-dom';
import { Box, Heading, FlatList, HStack, VStack, Text, Spacer, Avatar, Icon, IconButton } from 'native-base';
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from 'react-redux'

const MovieList = (props) => {
  const dispatch = useDispatch();

  return (
    <Box>
      <Heading fontSize="xl" p="4" pb="3">
        <Text>Movies you Love </Text>
      </Heading>
      <FlatList data={props.movies} renderItem={({
        item
      }) => <Box borderBottomWidth="1" key={item.imdbID} _dark={{
        borderColor: "gray.600"
      }} borderColor="coolGray.200" pl="4" pr="5" py="2">
          <HStack space={3} justifyContent="space-between">
            <Avatar size="48px" source={{
              uri: item.Poster
            }} />
            <VStack>
              <Text isTruncated width={194} _dark={{
                color: "warmGray.50"
              }} color="coolGray.800" bold>
                {item.Title}
              </Text>
              <Text color="coolGray.600" _dark={{
                color: "warmGray.200"
              }}>
                {item.Year}
              </Text>
            </VStack>
            <Spacer />
            <Text fontSize="xs" _dark={{
              color: "warmGray.50"
            }} color="coolGray.800" alignSelf="flex-start">

            </Text>
            {props.isFavourites ? <IconButton variant="transparent" color="muted.800" onPress={() => dispatch({ type: 'remove_favourite', payload: item })} icon={<Icon size="lg" as={<AntDesign name="delete" />} color="black" />} /> : <></>}
          </HStack>
        </Box>} keyExtractor={item => item.imdbID} />
    </Box>
    
  )
}

export default MovieList