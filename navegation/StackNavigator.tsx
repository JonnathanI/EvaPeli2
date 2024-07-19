import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from '../components/DashboardScreen';
 import EditFilmScreen from '../components/EditFilmScreen';
import CreateCharacterScreen from '../components/CreateCharacterScreen';
 import CharactersScreen from '../components/CharactersScreen';
import DashboardScene from '../components/Scene';
 import AddSceneScreen from '../components/AddSceneScreen';
import HomeScreen from '../components/home';
import FilmDetailsScreen from '../components/FilmDetailsScreen';
import SceneDetailsScreen from '../components/SceneDetail';
import EditSceneScreen from '../components/EditSceneScreen';

export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  EditFilm: { filmId: string };
  EditScene: {sceneId: string};
  FilmDetails: { filmId: string };
  SceneDetails:{sceneId : string};
  CreateCharacter: undefined;
  Characters: undefined;
  Scenes: undefined;
  AddScene: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={HomeScreen}/>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="EditFilm" component={EditFilmScreen} /> 
      <Stack.Screen name="EditScene" component={EditSceneScreen} />
      <Stack.Screen name="FilmDetails" component={FilmDetailsScreen} />
      <Stack.Screen name="SceneDetails" component={SceneDetailsScreen}/>
      {<Stack.Screen name="CreateCharacter" component={CreateCharacterScreen} />}
      { <Stack.Screen name="Characters" component={CharactersScreen} /> }
      {<Stack.Screen name="Scenes" component={DashboardScene} /> }
      {<Stack.Screen name="AddScene" component={AddSceneScreen} />}
    </Stack.Navigator>
  );
};

export default StackNavigator;
