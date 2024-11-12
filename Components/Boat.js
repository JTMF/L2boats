import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 15,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,
        backgroundColor: "lightgrey",
        borderWidth: 1,
    },
    image: {
        width: 400,
        height: 500,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        textTransform: "uppercase",
        marginVertical: 5
    },
    description: {
        flex: 1,
        fontSize: 16,
        color: "#555",
        lineHeight: 24,
        textAlign: "center",
        backgroundColor: "#f4f4f4",
    },
});
const Boat = ({name, description, icon_name, picture}) => {
    return (
        <View>
            <View style={styles.header}>
                <Icon name={icon_name} size={20}/>
                <Text style={styles.name}>{name}</Text>
            </View>
            <Text styles={styles.description}>{description}</Text>
            <Image source={picture} style={styles.image} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>GetABoat - For Sale</Text>
            <Boat name="Sea Ray 500 Sundancer"
                  description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                  icon_name="sailboat"
                  picture={require("../img/sea_ray.jpg")}/>
            <Boat name="Four Winns Horizon 180"
                  description="A sporty look and refined details truly set the Horizon 180 above all others."
                  icon_name="sailboat"
                  picture={require("../img/four_winns.jpg")}/>
            <Boat name="Flipper 640 ST"
                  description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                  icon_name="sailboat"
                  picture={require("../img/flipper.jpg")}/>
            <Boat name="Princess V48"
                  description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                  icon_name="sailboat"
                  picture={require("../img/princess.jpg")}/>
            <Boat name="Bayliner 175 Bowrider"
                  description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                  icon_name="sailboat"
                  picture={require("../img/bayliner.jpg")}/>
            <Boat name="Fairline Targa 47"
                  description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
                  icon_name="sailboat"
                  picture={require("../img/fairline.jpg")}/>
        </ScrollView>
    );
}

export default AllBoats;
