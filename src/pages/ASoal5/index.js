import { Image, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import { MyButton } from '../../components'
import { MYAPP, storeData } from '../../utils/localStorage';

export default function ASoal5({ navigation, route }) {

    const [pilih, setPilih] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
    });


    const sendServer = () => {
        console.log(pilih);
        if (pilih[4]) {
            Alert.alert(MYAPP, 'Jawaban Betul');
            storeData('user', {
                nama: route.params.nama,
                absen: route.params.absen,
                kelas: route.params.kelas,
                sekolah: route.params.sekolah,
                1: route.params[2],
                2: route.params[2],
                3: route.params[3],
                4: route.params[4],
                5: 20

            });
            navigation.goBack();

        } else {
            Alert.alert(MYAPP, 'Jawaban Salah');
            storeData('user', {
                nama: route.params.nama,
                absen: route.params.absen,
                kelas: route.params.kelas,
                sekolah: route.params.sekolah,
                1: route.params[2],
                2: route.params[2],
                3: route.params[3],
                4: route.params[4],
                5: 0

            });
            navigation.goBack();
        }
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 0,
        }}>

            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-evenly'

            }}>

                <TouchableOpacity onPress={() => setPilih({
                    1: true,
                    2: false,
                    3: false,
                    4: false,
                    5: false
                })} style={pilih[1] ? styles.tombolok : styles.tombol}>
                    <Image source={require('../../assets/p1.png')} style={styles.gambar} />
                    <Text style={styles.judul}>
                        Persatuan Indonesia
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPilih({
                    1: false,
                    2: true,
                    3: false,
                    4: false,
                    5: false
                })} style={pilih[2] ? styles.tombolok : styles.tombol}>
                    <Image source={require('../../assets/p2.png')} style={styles.gambar} />
                    <Text style={styles.judul}>
                        Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan Perwakilan
                    </Text>
                </TouchableOpacity >
                <TouchableOpacity onPress={() => setPilih({
                    1: false,
                    2: false,
                    3: true,
                    4: false,
                    5: false
                })} style={pilih[3] ? styles.tombolok : styles.tombol}>
                    <Image source={require('../../assets/p3.png')} style={styles.gambar} />
                    <Text style={styles.judul}>
                        Kemanusiaan yang adil dan beradab
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPilih({
                    1: false,
                    2: false,
                    3: false,
                    4: true,
                    5: false
                })} style={pilih[4] ? styles.tombolok : styles.tombol}>
                    <Image source={require('../../assets/p4.png')} style={styles.gambar} />
                    <Text style={styles.judul}>
                        Keadilan Sosial Bagi Seluruh Rakyat Indonesia
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPilih({
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: true
                })} style={pilih[5] ? styles.tombolok : styles.tombol}>
                    <Image source={require('../../assets/p5.png')} style={styles.gambar} />
                    <Text style={styles.judul}>
                        Ketuhanan Yang Maha Esa
                    </Text>
                </TouchableOpacity>









            </View>
            <MyButton onPress={sendServer} Icons="shield-checkmark" iconColor={colors.black} title="SELESAI" colorText={colors.black} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gambar: { width: 70, height: 70, marginRight: 10, },
    judul: { fontFamily: fonts.secondary[600], fontSize: windowWidth / 30, maxWidth: '80%' },
    tombol: { padding: 5, flexDirection: 'row', alignItems: 'center', borderWidth: 0, borderRightColor: colors.white },
    tombolok: { padding: 5, flexDirection: 'row', alignItems: 'center', borderWidth: 0, borderRightColor: colors.black, backgroundColor: colors.secondary }

})