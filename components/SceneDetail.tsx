import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, Platform } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navegation/StackNavigator';
import { SceneContext } from '../context/SceneContext';

type ScenedetailsScreenRouteProp = RouteProp<RootStackParamList, 'SceneDetails'>;

const SceneDetailsScreen: React.FC = ()=>{
    const route = useRoute<ScenedetailsScreenRouteProp>();
    const navigation= useNavigation();
    const sceneId= route.params.sceneId
    const sceneContext = useContext(SceneContext);

    if(!sceneContext){
        return null;
    }

    const {scenes} = sceneContext;
    const scene = scenes.find(scene => scene.id === sceneId);

    
    if(!scene){
        return <Text>Scene not found</Text>;
    }

    return(
        <ImageBackground
        source={require('../assets/Scene.gif')}
        style={styles.backgroundImage}
        >
            <View style={styles.container}>
        <Text style={styles.title}>{scene.description}</Text>
        <Text style={styles.subtitle}>Director: {scene.cost}</Text>
        <Text style={styles.subtitle}>Time: {scene.stock}</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>


        </ImageBackground>
    );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 18,
      color: '#CCCCCC',
      marginBottom: 10,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      width: '100%',
      height: '100%',
    },
  });

  export default SceneDetailsScreen

