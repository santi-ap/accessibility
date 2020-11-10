/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import { useDarkMode } from 'react-native-dark-mode';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  onPress
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App: () => React$Node = () => {

  // Inento fallido a dark mode
  //   function Component() {
  //     const isDarkMode = useDarkMode()
  //     return <View style={{ backgroundColor: isDarkMode ? 'black' : 'white' }} />
  // }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* accessibilityLabel */}
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Tap me!"
          onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.sectionTitle}>Press me!</Text>
          </View>
        </TouchableOpacity>

        {/* accessibilityHint */}
        <TouchableOpacity
          accessible={true}
          accessibilityLabel="Go back"
          accessibilityHint="Navigates to the previous screen"
          onPress={onPress}>
          <View style={styles.button}>
            <Text style={styles.sectionTitle}>Back</Text>
          </View>
        </TouchableOpacity>
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
