import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.home}>
            <View style={styles.container}>
                <Text style={styles.titleText}>This Week at a Glance..</Text>
                <Text>Lorem, due Monday</Text>
            </View>
            <View style={styles.container}>
                <Text>Today..</Text>
            </View>
        </View> 
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        marginTop: '5%'
    },
    titleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    container: {
        padding: '10%',
        backgroundColor: 'white',
        marginBottom: '5%'
    }
});
