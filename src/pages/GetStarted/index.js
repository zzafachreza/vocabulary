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
import { getData, storeData, urlAPI, urlApp, urlAvatar } from '../../utils/localStorage';
import { colors } from '../../utils/colors';
import { MyButton, MyGap } from '../../components';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';

export default function ({ navigation, route }) {



    useEffect(() => {



    }, []);


    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            backgroundColor: colors.primary
        }}>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/logo.png')} style={{
                    width: windowWidth,
                    height: windowWidth
                }} />
            </View>

            <View style={{
                paddingBottom: '10%',
                paddingHorizontal: 10,
            }}>
                <MyButton onPress={() => navigation.navigate('Login')} title="SISWA" colorText={colors.white} warna={colors.primary} borderSize={1} borderColor={colors.white} />
                <MyGap jarak={20} />
                <MyButton onPress={() => navigation.navigate('LoginGuru')} title="GURU" colorText={colors.primary} warna={colors.white} />
            </View>


        </SafeAreaView >
    );
}

const styles = StyleSheet.create({});
