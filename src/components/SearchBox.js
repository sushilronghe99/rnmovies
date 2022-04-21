import { View } from 'native-base';
import React from 'react';

import { Box, Input, FlatList, HStack, VStack, Spacer, Avatar, ScrollView } from 'native-base';

const SearchBox = (props) => {
	return (


		<Box alignItems="center">
			<Input mx="3" mt={2} placeholder="Input" w="75%" maxWidth="300px" value={props.value}
				onChangeText={(event) => {props.setSearchValue(event); console.log("Heya")}}

			></Input>
		</Box>


	);
};

export default SearchBox;