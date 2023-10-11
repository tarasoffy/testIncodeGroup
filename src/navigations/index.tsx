import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {w} from '../styles/scale';
import {Colors} from '../styles/colors';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from '../components/Icon';
import {IconNames} from '../components/Icon/Icon.props';
import {HomeScreen} from '../screens/HomeScreen';
import {FavouriteScreen} from '../screens/FavouriteScreen';
import {DetailsScreen} from '../screens/DetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = () => {

  const HomeStackScreen = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            let color = focused ? Colors.BLACK : Colors.GREY;
            {
              let iconName: IconNames;
              if (route.name === 'HomeTab') {
                iconName = 'Home';
              }
              if (route.name === 'Favourite') {
                iconName = 'Bookmark';
              }
              if (iconName !== undefined) {
                return <Icon name={iconName} size={w(24)} color={color} />;
              }
            }
          },
        })}>
        <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{}} />
        <Tab.Screen name="Favourite" component={FavouriteScreen} options={{}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export {RootNavigator};
