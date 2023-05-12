import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import pfp from '../assets/kermit.jpg';
import classone from '../assets/class1.jpeg'
import classtwo from '../assets/class2.jpg'
import classthree from '../assets/class3.jpg'
import classfour from '../assets/class4.jpg'
import classfive from '../assets/class5.jpg'
import classsix from '../assets/class6.jpg'

export default function ProfileScreen() {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.user}>
                    <Image style={styles.profilePicture} source={pfp} />
                    <View style={styles.userText}>
                        <Text style={styles.username}>Ethan Richards</Text>
                        <Text style={styles.tag}>@erichards</Text>
                    </View>
                </View>
                <View style={styles.bio}>
                    <Text style={styles.bioText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis nibh id risus varius fringilla. Nulla ante ipsum.</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.scrollContainer}>
                    <ScrollView horizontal={true}>
                        <Image style={styles.circle} source={classone} />
                        <Image style={styles.circle} source={classtwo} />
                        <Image style={styles.circle} source={classthree} />
                        <Image style={styles.circle} source={classfour} />
                        <Image style={styles.circle} source={classfive} />
                        <Image style={styles.circle} source={classsix} />
                    </ScrollView>
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={[styles.submitButton, { marginBottom: "5%" }]}>
                    <Text style={styles.submitButtonText}>Manage Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Join Class</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        height: 88,
    },
    container: {
        padding: "5%",
        borderBottomWidth: 1,
        borderBottomColor: "#d8d8d8",
    },
    profilePicture: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        marginRight: "5%",
    },
    user: {
        marginBottom: "5%",
        flexDirection: "row",
        alignItems: "center",
    },
    userText: {
        flexDirection: "column",
    },
    username: {
        fontWeight: "bold",
        fontSize: 25,
    },
    tag: {
        color: "#aaa",
        fontSize: 20,
    },
    bio: {
        flexDirection: "column",
    },
    bioText: {
        fontSize: 17.5,
    },
    circle: {
        width: 88,
        height: 88,
        borderRadius: 88 / 2,
        marginRight: 15,
    },
    submitButton: { // This needs to be the default button!
        backgroundColor: "#0a84ff", // SystemBlue Dark -- Apple
        padding: "4%",
        alignItems: "center",
        borderRadius: 5,
    },
    submitButtonText: {
        color: "white",
        fontSize: 17.5,
    }
});
