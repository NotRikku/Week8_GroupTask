import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';

const menuItems = [
  { id: '1', category: 'Hot Drinks', name: 'Americano' },
  { id: '2', category: 'Hot Drinks', name: 'Cappuccino' },
  { id: '3', category: 'Hot Drinks', name: 'Latte' },

  { id: '4', category: 'Cold Drinks', name: 'Iced Coffee' },
  { id: '5', category: 'Cold Drinks', name: 'Frappuccino' },

  { id: '6', category: 'Desserts', name: 'Cheesecake' },
  { id: '7', category: 'Desserts', name: 'Brownie' },
  { id: '8', category: 'Desserts', name: 'Chocolate Cake' },
];

export default function App() {
  return (
    <View style={styles.container}>
       <Text style={styles.heading}>Terra Mori Cafe</Text>
      <Text style={styles.subtitle}>Nyan Coffee Menu at your service! + desserts just for you!</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.category}>{item.category}</Text>

            <Text style={styles.name}>{item.name}</Text>

            <Button
              title="View Item"
              color="#634436"
              onPress={() =>
                console.log(
                  `Category: ${item.category}, Item: ${item.name}`
                )
              }
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F7F0E4',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
  subtitle: {
  textAlign: 'center',
  fontSize: 16,
  color: '#634436',
  marginBottom: 20,
  },
  item: {
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#634436',
    borderRadius: 8,
  },
  category: {
    fontSize: 12,
    color: '#ffffff',
  },
  name: {
    fontSize: 18,
    marginBottom: 8,
  },
});