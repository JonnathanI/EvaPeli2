import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { SceneContext } from '../context/SceneContext';
import { RootStackParamList } from '../navegation/StackNavigator';


type EditFilmScreenRouteProp = RouteProp<RootStackParamList, 'EditScene'>;

const EditSceneScreen: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute<EditFilmScreenRouteProp>();
    const sceneContext = useContext(SceneContext);

    const { sceneId } = route.params;
    const scene = sceneContext?.scenes.find(scene => scene.id === sceneId);
  
    const [description, setDescription] = useState(scene?.description || '');
    const [cost, setCost] = useState(scene?.cost || '');
    const [stock, setStock] = useState(scene?.stock || '');
  
    const handleSave = () => {
      if (sceneContext) {
        sceneContext.updateScene(sceneId, { description, cost, stock });
        navigation.goBack();
      }
    };
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Edit Scene</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            placeholder="Description"
            placeholderTextColor="#CCCCCC"
          />
          <View style={styles.row}>
            <TextInput
              style={styles.input}
              value={cost}
              onChangeText={setCost}
              placeholder="Cost"
              placeholderTextColor="#CCCCCC"
            />
            <TextInput
              style={styles.input}
              value={stock}
              onChangeText={setStock}
              placeholder="Stock"
              placeholderTextColor="#CCCCCC"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4C0A2A',
      padding: 20,
    },
    header: {
      fontSize: 24,
      color: '#FFFFFF',
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      backgroundColor: '#800F2F',
      color: '#FFFFFF',
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      fontSize: 16,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: '#A62948',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  export default EditSceneScreen;