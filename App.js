import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Studier">
          {() => (
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline';
                  }
                  else if (route.name === 'Add') {
                    iconName = focused ? 'md-add-circle' : 'md-add-circle-outline';
                  } 
                  else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
              })}      
            >

              {/* <Tab.Screen name="SignIn" component={SignInScreen} />
              <Tab.Screen name="SignUp" component={SignUpScreen} /> */}

              <Tab.Screen name="Home" component={HomeScreen} />
              <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
