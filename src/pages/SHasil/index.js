import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    Linking,
    Alert,
    ActivityIndicator,
} from 'react-native';
import { windowWidth, fonts } from '../../utils/fonts';
import { getData, MYAPP, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function ({ navigation, route }) {
    const [user, setUser] = useState({});
    const [com, setCom] = useState({});
    const isFocused = useIsFocused();
    const [wa, setWA] = useState('');
    const [open, setOpen] = useState(false);



    useEffect(() => {


        if (isFocused) {
            getData('user').then(res => {

                setOpen(true);
                setUser(res);

            });
        }




    }, [isFocused]);

    const btnKeluar = () => {
        Alert.alert(MYAPP, 'Kamu siap mulai lagi ?', [
            {
                text: 'Batal',
                style: "cancel"
            },
            {
                text: 'Siap',
                onPress: () => {
                    storeData('user', {
                        nama: user.nama,
                        absen: user.absen,
                        kelas: user.kelas,
                        sekolah: user.sekolah,
                        1: null,
                        2: null,
                        3: null,
                        4: null,
                        5: null
                    });

                    navigation.replace('Home');
                }
            }
        ])
    };

    const MyList = ({ label, value }) => {
        return (
            <View
                style={{
                    marginVertical: 3,
                    padding: 5,
                    backgroundColor: colors.secondary,
                    borderRadius: 5,
                }}>
                <Text
                    style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 20,
                        color: colors.black,
                    }}>
                    {label}
                </Text>
                <Text
                    style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 20,
                        color: colors.black,
                    }}>
                    {value}
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10
        }}>

            {!open && <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>}

            {open && <>


                {/* data detail */}
                <View style={{ padding: 10, flex: 1 }}>
                    <MyList label="Nama" value={user.nama} />
                    <MyList label="Absen" value={user.absen} />
                    <MyList label="Kelas" value={user.kelas} />
                    <MyList label="Sekolah" value={user.sekolah} />
                </View>

                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 15,
                    textAlign: 'center'
                }}>Jumlah Skormu</Text>
                <Text style={{
                    fontFamily: fonts.secondary[800],
                    fontSize: windowWidth / 5,
                    textAlign: 'center'
                }}>{route.params.nilai}</Text>
                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-around' }}>


                    <View style={{
                        flex: 1,
                        margin: 5
                    }}>
                        <MyButton
                            onPress={btnKeluar}
                            title="Main Lagi"
                            colorText={colors.white}
                            iconColor={colors.white}
                            warna={colors.primary}
                            Icons="refresh-outline"
                        />
                    </View>

                </View>
            </>}
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
