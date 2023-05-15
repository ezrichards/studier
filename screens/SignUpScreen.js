import { KeyboardAvoidingView, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function SignUpScreen() {
    return (
        <KeyboardAvoidingView style={styles.signIn}>
            <Text style={styles.header}>Studier</Text>
            <TextInput placeholder="Username" autoCapitalize="none" autoCorrect={false} />
            <TextInput placeholder="Email" autoCapitalize="none" autoCorrect={false} keyboardType="email-address" />
            <TextInput placeholder="Password" secureTextEntry />
            <TextInput placeholder="Repeat Password" secureTextEntry />
            <TouchableOpacity style={styles.signInButton} onPress={this.signUp}>
                <Text style={styles.signInButtonText}>Sign Up</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    header: {
        fontWeight: "bold",
        fontSize: 35,
        marginTop: "35%",
        marginBottom: "5%",
        textAlign: "center",
    },
    signIn: {
        marginTop: "25%",
        padding: "10%",
        textAlign: "center",
    },
    signInButton: {
        backgroundColor: "#0a84ff", // Apple SystemBlue Dark
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
