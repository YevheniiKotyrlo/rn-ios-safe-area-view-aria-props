/**
 * @format
 */

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>aria-* props on SafeAreaView</Text>
      <SafeAreaView aria-hidden style={styles.box}>
        <Text>Child of SafeAreaView with aria-hidden</Text>
      </SafeAreaView>
      <SafeAreaView accessibilityElementsHidden style={styles.box}>
        <Text>Child of SafeAreaView with accessibilityElementsHidden</Text>
      </SafeAreaView>
      <SafeAreaView
        accessible
        aria-label="Label from aria-label"
        style={styles.box}
      >
        <Text>Child of SafeAreaView with aria-label</Text>
      </SafeAreaView>
      <SafeAreaView
        accessible
        accessibilityLabel="Label from accessibilityLabel"
        style={styles.box}
      >
        <Text>Child of SafeAreaView with accessibilityLabel</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 80,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  box: {
    backgroundColor: '#dddddd',
    height: 64,
    justifyContent: 'center',
    padding: 8,
  },
});

export default App;
