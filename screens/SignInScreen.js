import { useContext } from 'react';
import { KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../store/AuthContext'

export default function SignInScreen() {
    const navigation = useNavigation();
    const auth = useContext(AuthContext);

    signIn = () => {
        auth.authenticate();
    }

    signUp = () => {
        navigation.navigate('SignUp');
    }

    return (
        <KeyboardAvoidingView style={styles.signIn}>
            <Text style={styles.header}>Studier</Text>
            <TextInput style={styles.textInput} placeholder="Email or username" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" />
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.signInButton} onPress={this.signIn}>
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.forgotPasswordText} onPress={this.signUp}>Forgot Password?</Text>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    bottomTabs: {
        fontSize: 15,
        backgroundColor: '#f2f2f7',
    },
    textInput: {
        marginBottom: "5%",
        padding: "5%",
        backgroundColor: "#f2f2f7", // SystemGray 6 -- Apple
        borderRadius: 5,
    },
    header: {
        fontWeight: "bold",
        fontSize: 35,
        marginTop: "45%",
        marginBottom: "5%",
        textAlign: "center",
    },
    signIn: {
        marginTop: "25%",
        padding: "10%",
        textAlign: "center",
    },
    signInButton: {
        backgroundColor: "#0a84ff", // SystemBlue Dark -- Apple
        padding: "5%",
        alignItems: "center",
        marginBottom: "4%",
        borderRadius: 5,
    },
    signInButtonText: {
        color: "white",
        fontSize: 15,
    },
    forgotPasswordText: {
        fontSize: 15,
        textAlign: "center",
        color: "#0000EE",
    }
});
