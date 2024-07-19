// src/components/EditFilmScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { FilmContext } from '../context/FilmContext';
import { RootStackParamList } from '../navegation/StackNavigator';

type EditFilmScreenRouteProp = RouteProp<RootStackParamList, 'EditFilm'>;

const EditFilmScreen: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<EditFilmScreenRouteProp>();
  const filmContext = useContext(FilmContext);

  const { filmId } = route.params;
  const film = filmContext?.films.find(film => film.id === filmId);

  const [title, setTitle] = useState(film?.title || '');
  const [director, setDirector] = useState(film?.director || '');
  const [time, setTime] = useState(film?.time || '');

  const handleSave = () => {
    if (filmContext) {
      filmContext.updateFilm(filmId, { title, director, time });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Film</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        placeholderTextColor="#CCCCCC"
      />
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={time}
          onChangeText={setTime}
          placeholder="Time"
          placeholderTextColor="#CCCCCC"
        />
        <TextInput
          style={styles.input}
          value={director}
          onChangeText={setDirector}
          placeholder="Director"
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

export default EditFilmScreen;
