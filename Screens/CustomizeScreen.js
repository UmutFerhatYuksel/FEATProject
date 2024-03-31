import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function CustomizeScreen() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal animationType='slide' visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <Text>This is Modal</Text>
            </Modal>



            <Text style={tw`text-2xl font-loose font-bold text-center text-indigo-700`}>Senin İçin Hazırlanan Program Burada</Text>
            <Text style={tw`text-md font-loose font-thin text-center text-black`}>
                <Icon name='facebook'></Icon>
                butonu ile alternatif egzersizleri görüntüleyebilirsin.
            </Text>

            <View style={tw`mx-auto mt-3 w-90 h-fit bg-slate-200 rounded-lg flex flex-row`}>
                <View style={tw`nx-auto my-auto p-3 basis-1/4 flex flex-row`}>
                    <Image style={{ width: 45, height: 45 }} source={require('../assets/Exercise.png')} />
                </View>
                <View style={tw`mx-auto my-auto p-3 basis-1/4`}><Text style={tw`text-indigo-700`}>Exercise Name</Text></View>
                <View style={tw`mx-auto my-auto p-3 basis-1/4`}><Text style={tw`text-indigo-700 text-center`}>x3 Sets</Text></View>
                <TouchableOpacity onPress={()=>setModalVisible(true)} style={tw`mx-auto my-auto p-3 w-10 h-10 bg-green-400 rounded`}><Icon name='edit' size={10} /></TouchableOpacity>

            </View>
        </View>
    )
}