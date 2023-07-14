import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, Modal, Pressable } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { MyButton, MyGap, MyInput } from '../../components';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { FloatingAction } from "react-native-floating-action";
import 'intl';
import 'intl/locale-data/jsonp/en';
import { color } from 'react-native-reanimated';
import moment from 'moment';

export default function HomeGuru({ navigation }) {

    const btnKeluar = () => {
        Alert.alert(MYAPP, 'Apakah kamu yakin akan keluar ?', [
            {
                text: 'Batal',
                style: "cancel"
            },
            {
                text: 'Keluar',
                onPress: () => {
                    storeData('user', null);

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Splash' }],
                    });
                }
            }
        ])
    };

    const [data, setData] = useState([]);

    const __renderItem = ({ item }) => {
        return (
            <View style={{
                marginVertical: 5,
                borderRadius: 10,
                padding: 10,
                borderWidth: 1,
            }}>
                <View>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.black
                    }}>Date</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.primary
                    }}>{moment(item.tanggal).format('dddd, MMMM DD YYYY')}</Text>
                </View>
                <View>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.black
                    }}>Name</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.primary
                    }}>{item.nama_lengkap}</Text>
                </View>
                <View>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        color: colors.black
                    }}>Skor</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[800],
                        fontSize: 20,
                        color: colors.black
                    }}>{item.nilai}</Text>
                </View>
            </View>
        )
    }

    useEffect(() => {
        __getTransaction();
    }, []);
    const __getTransaction = () => {

        axios.post(apiURL + 'nilai').then(res => {
            console.log(res.data);
            setData(res.data);
        })
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.primary,
            padding: 10,
        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={
                        {
                            width: windowWidth / 3,
                            height: windowWidth / 3,
                            resizeMode: 'contain'
                        }
                    }
                />
            </View>

            <View style={{
                flex: 1,
                backgroundColor: colors.white,
                margin: 10,
                justifyContent: 'center',
                paddingHorizontal: 10,
                borderRadius: 20,
            }}>
                <FlatList data={data} renderItem={__renderItem} />
            </View>
            <View style={{
                paddingHorizontal: 10
            }}>
                <MyButton warna={colors.black} title="Logout" onPress={btnKeluar} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})