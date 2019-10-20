import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MostPopularList from './../Screens/MostPopularList';
import Detail from './../Screens/DetailScreen';


const AppNavigator = createStackNavigator({
  mostPopularList: {
    screen: MostPopularList,
  },
  detail: {
    screen: Detail,
  }
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(0,234,195)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize:20,
      alignSelf:'center'
    },
  },
});

export default createAppContainer(AppNavigator);