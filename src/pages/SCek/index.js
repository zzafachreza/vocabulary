import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, windowWidth } from '../../utils'
import Draggable from 'react-native-draggable';
import { Image } from 'react-native';
import { MyButton } from '../../components';
import { MYAPP } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
export default function SCek({ navigation, route }) {

    const [ubah, setUbah] = useState(0);
    const [pilih, setPilih] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
    });

    const [gambar, setGambar] = useState({
        1: require('../../assets/g1.png'),
        2: require('../../assets/g2.png'),
        3: require('../../assets/g3.png'),
        4: require('../../assets/g4.png'),
        5: require('../../assets/g5.png'),
        6: require('../../assets/g6.png'),
        7: require('../../assets/g7.png'),
        8: require('../../assets/g8.png'),
        9: require('../../assets/g9.png'),
    })


    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>
            <View style={{
                flex: 1.5,
                backgroundColor: colors.white,
                padding: 10,
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => {
                        setPilih({
                            1: true,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false

                        });
                        setUbah(1);
                    }} style={{
                        width: 100,
                        height: 100,
                        padding: 10,
                        backgroundColor: pilih[1] ? colors.black : colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 0,
                    }}>
                        <Image source={gambar[1]} style={{
                            width: 90,
                            height: 90
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setPilih({
                            1: false,
                            2: true,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false

                        }); setUbah(2);
                    }} style={{
                        width: 100,
                        height: 100,
                        padding: 10,
                        backgroundColor: pilih[2] ? colors.black : colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 0,
                    }}>
                        <Image source={gambar[2]} style={{
                            width: 90,
                            height: 90
                        }} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setPilih({
                            1: false,
                            2: false,
                            3: true,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false

                        }); setUbah(3);
                    }} style={{
                        width: 100,
                        height: 100,
                        padding: 10,
                        backgroundColor: pilih[3] ? colors.black : colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 0,
                    }}>
                        <Image source={gambar[3]} style={{
                            width: 90,
                            height: 90
                        }} />

                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => {
                        setPilih({
                            1: false,
                            2: false,
                            3: false,
                            4: true,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: false

                        }); setUbah(4);
                    }} style={{
                        width: 100,
                        height: 100,
                        padding: 10,
                        backgroundColor: pilih[4] ? colors.black : colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 0,
                    }}>
                        <Image source={gambar[4]} style={{
                            width: 90,
                            height: 90
                        }} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setPilih({
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: true,
                            6: false,
                            7: false,
                            8: false,
                            9: false

                        }); setUbah(5);
                    }} style={{
                        width: 100,
                        height: 100,
                        padding: 10,
                        backgroundColor: pilih[5] ? colors.black : colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 0,
                    }}>
                        <Image source={gambar[5]} style={{
                            width: 90,
                            height: 90
                        }} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setPilih({
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: true,
                            7: false,
                            8: false,
                            9: false

                        }); setUbah(6);
                    }} style={{
                        width: 100,
                        height: 100,
                        padding: 10,
                        backgroundColor: pilih[6] ? colors.black : colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 0,
                    }}>
                        <Image source={gambar[6]} style={{
                            width: 90,
                            height: 90
                        }} />

                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => {
                        setPilih({
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: true,
                            8: false,
                            9: false

                        }); setUbah(7);
                    }} style={{
                        width: 100,
                        height: 100,
                        padding: 10,
                        backgroundColor: pilih[7] ? colors.black : colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 0,
                    }}>
                        <Image source={gambar[7]} style={{
                            width: 90,
                            height: 90
                        }} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setPilih({
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: true,
                            9: false

                        }); setUbah(8);
                    }} style={{
                        width: 100,
                        height: 100,
                        padding: 10,
                        backgroundColor: pilih[8] ? colors.black : colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 0,
                    }}>
                        <Image source={gambar[8]} style={{
                            width: 90,
                            height: 90
                        }} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setPilih({
                            1: false,
                            2: false,
                            3: false,
                            4: false,
                            5: false,
                            6: false,
                            7: false,
                            8: false,
                            9: true

                        }); setUbah(9);
                    }} style={{
                        width: 100,
                        height: 100,
                        padding: 10,
                        backgroundColor: pilih[9] ? colors.black : colors.white,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 0,
                    }}>
                        <Image source={gambar[9]} style={{
                            width: 90,
                            height: 90
                        }} />

                    </TouchableOpacity>
                </View>

            </View>
            <View style={{
                flex: 1,
                backgroundColor: colors.border,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',

                // backgroundColor: colors.border
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <TouchableOpacity onPress={() => {
                        setGambar({
                            ...gambar,
                            [ubah]: require('../../assets/17.png')
                        })
                    }} style={{
                        margin: 5, borderWidth: 1
                    }}>
                        <Image source={require('../../assets/17.png')} style={{
                            width: 50,
                            height: 50
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setGambar({
                            ...gambar,
                            [ubah]: require('../../assets/12.png')
                        })
                    }} style={{
                        margin: 5, borderWidth: 1
                    }}>
                        <Image source={require('../../assets/12.png')} style={{
                            width: 50,
                            height: 50
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setGambar({
                            ...gambar,
                            [ubah]: require('../../assets/11.png')
                        })
                    }} style={{
                        margin: 5, borderWidth: 1
                    }}>
                        <Image source={require('../../assets/11.png')} style={{
                            width: 50,
                            height: 50
                        }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {
                        setGambar({
                            ...gambar,
                            [ubah]: require('../../assets/18.png')
                        })
                    }} style={{
                        margin: 5, borderWidth: 1
                    }}>
                        <Image source={require('../../assets/18.png')} style={{
                            width: 50,
                            height: 50
                        }} />
                    </TouchableOpacity>


                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <TouchableOpacity onPress={() => {
                        setGambar({
                            ...gambar,
                            [ubah]: require('../../assets/16.png')
                        })
                    }} style={{
                        margin: 5, borderWidth: 1
                    }}>
                        <Image source={require('../../assets/16.png')} style={{
                            width: 50,
                            height: 50
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setGambar({
                            ...gambar,
                            [ubah]: require('../../assets/13.png')
                        })
                    }} style={{
                        margin: 5, borderWidth: 1
                    }}>
                        <Image source={require('../../assets/13.png')} style={{
                            width: 50,
                            height: 50
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setGambar({
                            ...gambar,
                            [ubah]: require('../../assets/15.png')
                        })
                    }} style={{
                        margin: 5, borderWidth: 1
                    }}>
                        <Image source={require('../../assets/15.png')} style={{
                            width: 50,
                            height: 50
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setGambar({
                            ...gambar,
                            [ubah]: require('../../assets/14.png')
                        })
                    }} style={{
                        margin: 5, borderWidth: 1
                    }}>
                        <Image source={require('../../assets/14.png')} style={{
                            width: 50,
                            height: 50
                        }} />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {
                        setGambar({
                            ...gambar,
                            [ubah]: require('../../assets/19.png')
                        })
                    }} style={{
                        margin: 5, borderWidth: 1
                    }}>
                        <Image source={require('../../assets/19.png')} style={{
                            width: 50,
                            height: 50
                        }} />
                    </TouchableOpacity>

                </View>

            </View>
            <View>
                <MyButton onPress={() => {
                    console.log(gambar)
                    // navigation.navigate('Home')
                    if (gambar[1] == 21 &&
                        gambar[2] == 20 &&
                        gambar[3] == 24 &&
                        gambar[4] == 26 &&
                        gambar[5] == 25 &&
                        gambar[6] == 23 &&
                        gambar[7] == 19 &&
                        gambar[8] == 22 &&
                        gambar[9] == 27

                    ) {

                        showMessage({
                            type: 'success',
                            message: 'Selamat Kamu berhasil menyelesaikan puzzle'
                        });
                        navigation.navigate('Home')
                    } else {
                        Alert.alert(MYAPP, 'Maaf Puzzle Belum Sesuai !')
                    }

                }} radius={0} title="Selesai" colorText={colors.black} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})