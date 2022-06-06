import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { MainScreen, DetailsScreen } from './src/screens';
import { Header } from './src/components';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
  };

  const handleResetItem = () => {
    setSelectedItem(null);
  };

  let content = <MainScreen onSelectedItem={handleSelectedItem} />;
  if (selectedItem) content = <DetailsScreen selectedItem={selectedItem} onResetItem={handleResetItem} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Perú en imágenes" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
