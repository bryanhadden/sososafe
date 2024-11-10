import PreScan from "@/components/forms/prescan";
import Results from "@/components/forms/results";
import { CameraView, CameraProps, useCameraPermissions } from "expo-camera";
import { useState, useEffect, useRef } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  // @ts-ignore: just being lazy with types here
  const cameraRef = useRef<CameraView>(undefined);
  const [permission, requestPermission] = useCameraPermissions();
  const [prescan, setPrescan] = useState(true);
  const [showCamera, setShowCamera] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [gettingResults, setGettingResults] = useState(false);
  const [showResults, setShowResults] = useState(false);


  useEffect(() => {
    async function getSizes() {
      if (permission?.granted && cameraRef.current) {
        console.log({ permission });
      }
    }

    getSizes();
  }, [permission, cameraRef]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to use your camera for our scan.
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {Boolean(!showCamera) && Boolean(!showCamera) && (
        <PreScan showCamera={showCamera} setShowCamera={setShowCamera} setPrescan={setPrescan} />
      )}
      {Boolean(!prescan) && Boolean(showCamera) && (
        <>
          {Boolean(gettingResults) && (
            <Results />
          )}
          {Boolean(!gettingResults) && (<View style={{ flex: 3 }}>
            <>
              <View style={styles.formAction}>
                {Boolean(!scanning) && (
                  <TouchableOpacity
                    onPress={() => {
                      setScanning(true);
                    }}>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>
                        Start the scan
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                {Boolean(scanning) && Boolean(!gettingResults) && (
                  <TouchableOpacity
                    onPress={() => {
                      setGettingResults(true);
                    }}>
                    <View style={styles.btn}>
                      <Text style={styles.btnText}>
                        Finish the scan
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
              <CameraView
                style={styles.camera}
                facing={"back"}
                ref={cameraRef}
              >
                <View style={styles.buttonContainer}>
                </View>
              </CameraView>
            </>
          </View>)}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  scanButton: {
    flex: 1,
    justifyContent: "center",
  },
  formAction: {
    marginVertical: 16,
    alignSelf: "center",
    justifyContent: "center",
    flex: 1
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});
