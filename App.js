import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Scanner from './screens/Scanner';
import Result from './screens/Result';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{headerShown: false}} />
        <Stack.Screen 
          name="Scanner" 
          component={Scanner} 
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Result'
          component={Result}
          options={{headerShown: false}}
        /> 
      </Stack.Navigator>
      <Stack.Screen 
        
      />
    </NavigationContainer>
  );
}

export default App;
