import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-web';
import tw from 'twrnc';

export default function ChooseDayScreen({navigation,route}) {
    const { name } = route.params;
    const { surname } = route.params;
    const { age } = route.params;
    const { userDailyActivityLevel } = route.params;
    const { height } = route.params;
    const { weight } = route.params;
    const { gender } = route.params;

    const [selectedDays, setSelectedDays] = useState([]);

    const data = [
        { label: 'Monday', value: 'Monday' },
        { label: 'Tuesday', value: 'Tuesday' },
        { label: 'Wednesday', value: 'Wednesday' },
        { label: 'Thursday', value: 'Thursday' },
        { label: 'Friday', value: 'Friday' },
        { label: 'Saturday', value: 'Saturday' },
        { label: 'Sunday', value: 'Sunday' }
    ];

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.selectedTextStyle}>{item.label}</Text>
                <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            </View>
        );
    };

    return (
        <View>
            <View style={styles.container}>
                <MultiSelect
                    style={styles.dropdown}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data}
                    labelField="label"
                    valueField="value"
                    placeholder="Select workout days"
                    value={selectedDays}
                    search
                    searchPlaceholder="Search..."
                    onChange={item => {
                        setSelectedDays(item);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color="black"
                            name="Safety"
                            size={20}
                        />
                    )}
                    renderItem={renderItem}
                    renderSelectedItem={(item, unSelect) => (
                        <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                            <View style={styles.selectedStyle}>
                                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                                <AntDesign color="black" name="delete" size={17} />
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <TouchableOpacity style={tw`w-fit h-10 bg-white rounded-full mx-auto mt-3 flex flex-row`}
                onPress={() => navigation.navigate("CreateWorkout", {
                    selectedDays: selectedDays,
                    name: name,
                    surname: surname,
                    age: age,
                    height:height,
                    weight:weight,
                    gender:gender,
                    userDailyActivityLevel: userDailyActivityLevel,
                })}>
                <View style={tw`ml-3 my-auto items-center mr-3`}>
                    <Text style={styles.textRegular}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { padding: 16 },
    dropdown: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectedStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    textSelectedStyle: {
        marginRight: 5,
        fontSize: 16,
    },
})