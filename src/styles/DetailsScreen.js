import { StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export const styles = StyleSheet.create({
  title: {
    color: Colors.textColorPrimary,
    fontSize: 22,
    textAlign: 'center',
    padding: 20,
  },
  autor: {
    color: Colors.textColorPrimary,
    fontSize: 18,
    textAlign: 'center',
    padding: 20,
  },
  lugar: {
    color: Colors.textColorPrimary,
    fontSize: 12,
    textAlign: 'center',
  },
  imagen: {
    width: 200,
    height: 200,
    margin: 'auto',
    padding: 20,
  },
});
