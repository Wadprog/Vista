import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const getLoacation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLoacation();
  }, []);
  return location;
};
