import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

const MapScreen = ({ navigation, route }) => {
  let location = route.params.location;

  const [region, setRegion] = useState({
    latitude: location.latitude,
    longitude: location.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.004,
  });
  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} initialRegion={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        ></Marker>
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
  },
});
