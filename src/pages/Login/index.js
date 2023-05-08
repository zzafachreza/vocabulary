import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { fonts, windowWidth, colors } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import { ImageBackground } from 'react-native';


export default function ({ navigation }) {


  return (
    <ImageBackground style={{
      flex: 1,
      backgroundColor: colors.white
    }} source={require('../../assets/mulai.png')}>
      <View style={{
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
          width: 200,
          borderWidth: 5,
          height: 200,
          borderRadius: 100,
          backgroundColor: colors.primary,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 30,
            color: colors.white
          }}>MULAI</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
