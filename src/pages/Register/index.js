import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    Switch,
    SafeAreaView,
    ActivityIndicator,
    Alert,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { MyInput, MyGap, MyButton, MyPicker } from '../../components';
import axios from 'axios';
import { showMessage } from 'react-native-flash-message';
import { apiURL, api_token, MYAPP } from '../../utils/localStorage';

export default function Register({ navigation }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const validate = text => {
        // console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            // console.log('nama_lengkap is Not Correct');
            setData({ ...data, nama_lengkap: text });
            setValid(false);
            return false;
        } else {
            setData({ ...data, nama_lengkap: text });
            setValid(true);
            // console.log('nama_lengkap is Correct');
        }
    };

    const [data, setData] = useState({
        api_token: api_token,
        password: '',
        email: '',
        nama_lengkap: '',
        nik: '',
        telepon: '',
    });

    const simpan = () => {
        if (
            data.nama_lengkap.length === 0 &&
            data.telepon.length === 0 &&
            data.nik.length === 0 &&
            data.email.length === 0 &&
            data.password.length === 0

        ) {
            showMessage({
                message: 'Maaf Semua Field Harus Di isi !',
            });
        } else if (data.nama_lengkap.length === 0) {
            showMessage({
                message: 'Maaf nama lengkap masih kosong !',
            });
        }
        else if (data.telepon.length === 0) {
            showMessage({
                message: 'Maaf telepon masih kosong !',
            });
        } else if (data.nik.length === 0) {
            showMessage({
                message: 'Maaf nik masih kosong !',
            });
        } else if (data.password.length === 0) {
            showMessage({
                message: 'Maaf Password masih kosong !',
            });
        } else {
            setLoading(true);
            console.log(data);
            axios
                .post(apiURL + 'register', data)
                .then(res => {
                    console.warn(res.data);
                    setLoading(false);
                    if (res.data.status == 404) {
                        showMessage({
                            type: 'danger',
                            message: res.data.message
                        })
                    } else {
                        Alert.alert(MYAPP, res.data.message);
                        navigation.goBack();
                    }


                });
        }
    };
    return (
        <ImageBackground
            style={{
                flex: 1,
                backgroundColor: colors.white,
                padding: 10,
            }}>

            {/* <Switch onValueChange={toggleSwitch} value={isEnabled} /> */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.page}>
                <Text style={{
                    textAlign: 'center',
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 20,
                    marginBottom: 10,
                }}>Petunjuk Penggunaan</Text>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>1. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>Selesaikan game puzzle dengan benar</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>2. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>Kalau belum bisa menyelesaikan puzzle..maka belum bisa mengerjakan soaal make and match</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>3. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>Lanjut menjawab soal dengan benar dengan menghubungkan simbol dan sila pancasila.                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginVertical: 5
                }}>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>4. </Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: windowWidth / 28,
                    }}>Skormu akan ditampilkan di akhir</Text>
                </View>




                {loading && <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ActivityIndicator color={colors.primary} size="large" />
                </View>}
            </ScrollView>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: 620 / 4,
        height: 160 / 4,
    },
});
