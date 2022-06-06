import { View, Text, Button, Image } from 'react-native';
import { styles } from '../styles/DetailsScreen';

const DetailsScreen = ({ selectedItem, onResetItem }) => {
  return (
    <View>
      <Text style={styles.title}>{selectedItem.copy}</Text>
      <Image source={{ uri: `${selectedItem.thumbnail}` }} style={styles.imagen} />
      <Text style={styles.autor}>Autor: {selectedItem.autor}</Text>
      <Text style={styles.lugar}>{selectedItem.lugar}</Text>
      <Button title="Ver otra imágen" onPress={onResetItem} />
    </View>
  );
};

export default DetailsScreen;
