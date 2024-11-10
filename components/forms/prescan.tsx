import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function PreScan({
    showCamera,
    setShowCamera,
    setPrescan
}: any) {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    return (
        <SafeAreaView style={{ flex: 3, backgroundColor: '#e8ecf4' }}>
            <KeyboardAwareScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Let's Start Babyproofing!</Text>
                    <Text style={styles.subtitle}>
                        Fill in the fields below to get started babyproofing your home.
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Charge's Age</Text>
                        <TextInput
                            clearButtonMode="while-editing"
                            onChangeText={name => setForm({ ...form, name })}
                            placeholder="8"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.name} />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Charge's Height</Text>
                        <TextInput
                            autoCapitalize="none"
                            clearButtonMode="while-editing"
                            keyboardType="email-address"
                            onChangeText={email => setForm({ ...form, email })}
                            placeholder="4:feet 1:inches"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            value={form.email} />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Charge's Weight</Text>
                        <TextInput
                            clearButtonMode="while-editing"
                            placeholder={"50"} onChangeText={password => setForm({ ...form, password })}
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            secureTextEntry={true}
                            value={form.password} />
                    </View>
                    <View style={styles.input}>
                        <Text style={styles.inputLabel}>Independence Level</Text>
                        <TextInput
                            clearButtonMode="while-editing"
                            onChangeText={confirmPassword =>
                                setForm({ ...form, confirmPassword })
                            }
                            placeholder="low"
                            placeholderTextColor="#6b7280"
                            style={styles.inputControl}
                            secureTextEntry={true}
                            value={form.confirmPassword} />
                    </View>
                    <View style={styles.formAction}>
                        <TouchableOpacity
                            onPress={() => {
                                setPrescan(false);
                                setShowCamera(true);
                            }}>
                            <View style={styles.btn}>
                                <Text style={styles.btnText}>
                                    Babyproof Me
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    title: {
        fontSize: 31,
        fontWeight: '700',
        color: '#1D2A32',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },
    /** Header */
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 24,
        paddingHorizontal: 24,
    },
    headerBack: {
        padding: 8,
        paddingTop: 0,
        position: 'relative',
        marginLeft: -16,
        marginBottom: 6,
    },
    /** Form */
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginTop: 4,
        marginBottom: 16,
    },
    formFooter: {
        paddingVertical: 24,
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    /** Input */
    input: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 17,
        fontWeight: '600',
        color: '#222',
        marginBottom: 8,
    },
    inputControl: {
        height: 50,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 15,
        fontWeight: '500',
        color: '#222',
        borderWidth: 1,
        borderColor: '#C9D3DB',
        borderStyle: 'solid',
    },
    /** Button */
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