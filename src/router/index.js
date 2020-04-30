/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Decay from '../pages/Decay';
import Timing from '../pages/Timing';
import Spring from '../pages/Spring';
import Spring1 from '../pages/Spring1';
import Spring2 from '../pages/Spring2';
import Spring3 from '../pages/Spring3';
import Add from '../pages/Add';
import Add1 from '../pages/Add1';
import Add2 from '../pages/Add2';
import diffClamp from '../pages/diffClamp';
import diffClamp1 from '../pages/diffClamp1';
import diffClamp2 from '../pages/diffClamp2';
import Modulo from '../pages/Modulo';
import Event from '../pages/Event';

const MainStack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home" headerMode="none">
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Decay" component={Decay} />
        <MainStack.Screen name="Timing" component={Timing} />
        <MainStack.Screen name="Spring" component={Spring} />
        <MainStack.Screen name="Spring1" component={Spring1} />
        <MainStack.Screen name="Spring2" component={Spring2} />
        <MainStack.Screen name="Spring3" component={Spring3} />
        <MainStack.Screen name="Add" component={Add} />
        <MainStack.Screen name="Add1" component={Add1} />
        <MainStack.Screen name="Add2" component={Add2} />
        <MainStack.Screen name="diffClamp" component={diffClamp} />
        <MainStack.Screen name="diffClamp1" component={diffClamp1} />
        <MainStack.Screen name="diffClamp2" component={diffClamp2} />
        <MainStack.Screen name="Modulo" component={Modulo} />
        <MainStack.Screen name="Event" component={Event} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
