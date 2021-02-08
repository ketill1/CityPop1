import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import StartMyScreen from './screens/StartMyScreen';
import SearchCityScreen from './screens/SearchCityScreen';
import SearchCountryScreen from './screens/SearchCountryScreen';
import CityScreen from './screens/CityScreen';
import CountryScreen from './screens/CountryScreen';

export default function App() {
  //const [userNumber, setUserNumber] = useState();

  //const startSearchHandler = (selectedNumber) => {
  //  setUserNumber(selectedNumber);
  //};

  //let content = <StartMyScreen onStartSearchScreen={startSearchHandler} />;

  //if (userNumber) {
  //  content = <SearchCityScreen userChoice={userNumber} />;
  //}

  return (
    <View style={styles.screen}>
      <Header title="CityPop" />
      <StartMyScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});



// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View, Botton } from 'react-native';
//
// export default App = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//
//   useEffect(() => {
//     fetch('http://api.geonames.org/searchJSON?q=sweden&maxRows=1&username=weknowit')
//       .then((response) => response.json())
//       .then((json) => setData(json.geonames))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);
//
//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ adminCode1 }, index) => adminCode1}
//           renderItem={({ item }) => (
//             <Text>{item.toponymName}, {item.population}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };
