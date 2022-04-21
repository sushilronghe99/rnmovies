import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import SearchScreen from './SearchScreen';
import FavouriteMovies from './FavoriteMovies';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducerObj from '../redux/reducer/MovieReducer';
import MovieDetail from './MovieDetail';

const Tab = createBottomTabNavigator();
const detailStack = createStackNavigator();
const myStore = createStore(reducerObj);

export default function HomeTabs() {
  return (
    <Provider store = { myStore }>
    <Tab.Navigator  screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'md-list' : 'ios-list';
          }
          else if (route.name === 'Favorite') {
            iconName = focused ? 'ios-heart-outline' : 'ios-heart';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        drawBehind: true
      })}> 
      <Tab.Screen name="Home"  component={HomeScreen}>
       {/* {() => (
            <detailStack.Navigator initialRouteName="HomeScreen" >
              <detailStack.Screen
                name="HomeScreen"
                component={HomeScreen}
              >
              </detailStack.Screen>
              <detailStack.Screen
                name="MovieDetail"
                component={MovieDetail}
              >
              </detailStack.Screen>
            </detailStack.Navigator>
          )}  */}
      </Tab.Screen>
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavouriteMovies} />
    </Tab.Navigator>
    </Provider>
  );
}