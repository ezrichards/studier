import { Text, View, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
    return (        
        <ScrollView>
            {[
            {
                title: "Project 1: Python",
                description: "An introduction to Python before we start with Data Science.",
                due: "May 21, 2023",
                class: "Data Science"
            },
            {
                title: "Homework Assignment 12",
                description: "Do some datapath stuff",
                due: "April 25, 2023",
                class: "Computer Organization"
            },
            {
                title: "Homework Assignment 13",
                description: "Single-cycle datapath processing",
                due: "May 1, 2023",
                class: "Computer Organization"
            },
            {
                title: "C28A1 SOLID Part 1",
                description: "An introduction to the Single Responsibility Principle (SRP) and Open/Closed Principle (OCP)",
                due: "April 28, 2023",
                class: "Software Engineering"
            },
            {
                title: "C28A1 SOLID Part 2",
                description: "An introduction to the Liskov Substitution Principle (LSP)",
                due: "April 28, 2023",
                class: "Software Engineering"
            },
            {
                title: "C29 Final Assignment",
                description: "A culmination of all of what we've learned!",
                due: "May 1, 2023",
                class: "Software Engineering"
            }
            ].map((item) => 
                <View style={styles.listItem} key={item.title}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Text style={styles.itemDue}>{item.due} - {item.class}</Text>
                </View>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginBottom: '2%',
        backgroundColor: 'white',
        width: '100%',
        padding: '5%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    itemTitle: {
        fontSize: 25,
        marginBottom: '2%',
        fontWeight: 'bold'
    },
    itemDue: {
       color: 'gray',
       marginTop: '2.5%'
    }
  });