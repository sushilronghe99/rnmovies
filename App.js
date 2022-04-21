
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './src/screens/HomeTabs'
import MovieDetail from './src/screens/MovieDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (

    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="HomeTab" component={HomeTabs} />
         <Stack.Screen name="MovieDetail" component={MovieDetail}></Stack.Screen> 
          
        </Stack.Navigator>

      </NavigationContainer>

    </NativeBaseProvider>


  );
}

export default App;