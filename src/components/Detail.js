import React, { useEffect, useState } from "react";

import ScrolloverView from 'react-native-scrollover-view';
import { Box, Heading, HStack, VStack, Text, Container, ScrollView, Icon, Center, Image, Flex, Button, View } from 'native-base';


//http://www.omdbapi.com/?apikey=263d22d8&i=tt0121766
const Detail = (props) => {

    console.log(props);
    const movie = props.theMovie;

    const Top = () => (
        <View
            style={{
                
                height: 400,
                backgroundColor: "#262626",
                justifyContent: "center",
                alignItems: "center",

            }}
        >
            <Image mt="-60" w="80%" h="80%" resizeMode={"contain"} source={{ 'uri': props.theMovie.Poster }
            } alt="Alternate Text"></Image>
        </View>
    );

    const Bottom = () => (
        <View
            style={{
                height: 800,
                borderRadius: 30,
                marginTop: -300,
                
                justifyContent: "center",
                alignItems: "center",
            }}
        >
             <Center bg="muted.800" w="100%" mt="200" flex={1}>
                    <Container>
                        <Heading color="white">
                        {movie.Title}
                        </Heading>
                        <Heading pt={4} color="white" size="sm">
                           {movie.Plot}
                        </Heading>
                        <Heading pt={2} color="white" size="sm">
                           Cast : {movie.Actors}
                        </Heading>
                        <Heading pt={2} color="white" size="sm">
                           Director : {movie.Director}
                        </Heading>
                        <Heading pt={2} color="white" size="sm">
                           Writer : {movie.Writer}
                        </Heading>
                        <Heading pt={2} color="white" size="sm">
                           Genre : {movie.Genre}
                        </Heading>
                        <Center _text={{
                    color: "white"
                }}>
                    <Image source={require("../../assets/star.png")}
                        alt="Alternate Text">

                    </Image>
                </Center>
                       

                      
                        <Text fontSize="18" color="white" italic>{movie.Awards}</Text>
                        <Heading pt={2} color="white" size="sm">
                           Release Date : {movie.Released}
                        </Heading>
                        <Heading pt={2} color="white" size="sm">
                           Ratings : {movie.Rated}
                        </Heading>
                    </Container>
                </Center>

        </View>
    );

    const Footer = () => (
        <View
            style={{
                height: 140,
                padding: 20,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Text style={{ color: "white" }}>Some funky footer content... 🔥</Text>
        </View>
    );

    const Hidden = () => (
        <View style={{ padding: 30, width: "100%" }}>
            <Text style={{ textAlign: "center" }}>Something hidden... 😲</Text>
        </View>
    );


    return (

        <ScrolloverView
            topContent={Top}
            bottomContent={Bottom}
            footerContent={Footer}
            hiddenTopContent={Hidden}
            safeAreaForced={true}
            backgroundColor={"#262626"}
            footerBackgroundColor={"#262626"}
        />
    );
};

export default Detail;