import { useEffect, useState } from "react";
import {
  AdEventType,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";
import { Button } from "react-native";

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : null;

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ["fashion", "clothing"],
});

const Admob = () => {
  const { loaded, setLoaded } = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );

    interstitial.load();

    return unsubscribe;
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <Button
      title="Show Interstitial"
      onPress={() => {
        interstitial.show();
      }}
    />
  );
};

export default Admob;
