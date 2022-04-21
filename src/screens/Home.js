
import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';

import { ScrollView, Text, Box, Button } from 'native-base';
import MovieGrid from '../components/MovieGrid';
import { connect } from 'react-redux';




import { useSelector, useDispatch } from 'react-redux'
//import { decrement, increment } from '../App/Reducer/CounterSlice'

function HomeScreen(props) {


	console.log("HOME SCREEN - IN ENTER")
	const [movies, setMovies] = useState([]);
	const count = useSelector(state => state.count);
	const dispatch = useDispatch();

	const getMovieRequest = async () => {
		const url = `http://www.omdbapi.com/?s=spider&apikey=263d22d8`;
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest();
	}, []);


	return (
		<ScrollView _contentContainerStyle={{
			px: "20px",
			mb: "4",
			minW: "72",
			w: "100%"
		}} height={600}>
			<MovieGrid movies={movies} navigation={props.navigation} />
		</ScrollView>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});



export default HomeScreen;