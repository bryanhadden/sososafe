import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const INPUT_OFFSET = 110;

export default function Example() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.headerIcon}>
              <Image
              source={require('../../assets/images/icon.png')}
              style={{ width: "100%", height: "100%", borderRadius: 16 }}
              resizeMode="cover"
              />
            </View>

          <Text style={styles.title}>
            Welcome to <Text style={{ color: "#00C6AE" }}>SoSoSafe</Text>
          </Text>

          <Text style={styles.subtitle}>Collaborate with your friends</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email address</Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email} />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>

            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password} />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign in</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.formActionSpacer} />

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <View style={styles.btnSecondary}>
                <MaterialCommunityIcons
                  color="#000"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 12 }} />

                <Text style={styles.btnSecondaryText}>Face ID</Text>

                <View style={{ width: 34 }} />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.formFooter}>
            By clicking "Sign in" above, you agree to SoSoSafe's
            <Text style={{ fontWeight: '600' }}> Terms & Conditions </Text>
            and
            <Text style={{ fontWeight: '600' }}> Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  /** Header */
  header: {
    marginVertical: 36,
  },
  headerIcon: {
    alignSelf: 'center',
    width: 80,
    height: 80,
    marginBottom: 36,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  /** Form */
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formActionSpacer: {
    marginVertical: 8,
  },
  formFooter: {
    marginTop: 'auto',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#929292',
    textAlign: 'center',
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    position: 'absolute',
    width: INPUT_OFFSET,
    lineHeight: 44,
    top: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#c0c0c0',
    zIndex: 9,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: INPUT_OFFSET,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: 'transparent',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#000',
    borderColor: '#000',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#000',
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#000',
  },
});