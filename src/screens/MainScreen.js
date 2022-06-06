import { ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { images } from '../utils/data';

const MainScreen = ({ onSelectedItem }) => {
  return (
    <ScrollView>
      {images.map((item) => (
        <ListItem key={item.id} onPress={() => onSelectedItem(item)} bottomDivider>
          <Avatar source={{ uri: `${item.thumbnail}` }} rounded />
          <ListItem.Chevron />
          <ListItem.Content>
            <ListItem.Title>{item.copy}</ListItem.Title>
            <ListItem.Subtitle>
              {item.autor} ({item.licencia})
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default MainScreen;
