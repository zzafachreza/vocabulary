import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, TouchableOpacity, BackHandler, Alert, Linking } from 'react-native';
import { fonts, windowWidth, colors, windowHeight } from '../../utils';
import { MyInput, MyGap, MyButton } from '../../components';
import axios from 'axios';
import { apiURL, api_token, MYAPP, storeData } from '../../utils/localStorage';
import { showMessage } from 'react-native-flash-message';
import Sound from 'react-native-sound';
var whoosh = new Sound(
  require('../../assets/suara.mp3'),
  Sound.MAIN_BUNDLE,
).release();

export default function Login({ navigation }) {


  useEffect(() => {
    whoosh.play();
  }, [])

  const [kirim, setKirim] = useState({
    api_token: api_token,
    username: null,
    password: null
  });
  const [loading, setLoading] = useState(false);

  const [comp, setComp] = useState({});





  const masuk = () => {


    if (kirim.username == null && kirim.password == null) {
      Alert.alert(MYAPP, 'Username dan Password tidak boleh kosong !');
    } else if (kirim.username == null) {
      Alert.alert(MYAPP, 'Username tidak boleh kosong !');
    } else if (kirim.password == null) {
      Alert.alert(MYAPP, 'Password tidak boleh kosong !');
    } else {


      setLoading(true);
      console.log(kirim);

      axios
        .post(apiURL + 'login', kirim)
        .then(res => {
          setLoading(false);
          console.log(res.data);
          if (res.data.status == 404) {
            showMessage({
              type: 'danger',
              message: res.data.message
            })
          } else {
            storeData('user', res.data.data);
            navigation.replace('Mulai')
          }

        });



    }




  }

  useEffect(() => {

    axios.post(apiURL + 'company').then(res => {
      setComp(res.data.data);
    })

  }, [])

  return (
    <>
      <ScrollView style={{ flex: 1, backgroundColor: colors.primary, position: 'relative' }}>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: colors.primary
        }}>
          <Image
            source={require('../../assets/logo.png')}
            style={
              {
                marginVertical: 10,
                width: windowWidth / 2,
                height: windowWidth / 2,
                resizeMode: 'contain'
              }
            }
          />




        </View>



        <View style={{ padding: 20, flex: 1, backgroundColor: colors.primary }}>
          <MyInput textColor={colors.white} colorIcon={colors.white} label="Username" onChangeText={val => setKirim({
            ...kirim,
            username: val
          })}
            iconname="at" placeholder="Masukan username" />
          <MyGap jarak={20} />
          <MyInput textColor={colors.white} colorIcon={colors.white}
            onChangeText={val => setKirim({
              ...kirim,
              password: val
            })}
            secureTextEntry={true}
            label="Password"
            iconname="lock-closed"
            placeholder="Masukan kata sandi"
          />
          <MyGap jarak={40} />
          {!loading &&


            <MyButton
              onPress={masuk}
              title="Log in"
              warna={colors.primary}
              borderSize={1}
              borderColor={colors.white}
              Icons="log-in-outline"
            />

          }

        </View>
        {loading && <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator color={colors.primary} size="large" />
        </View>}
      </ScrollView>

      <TouchableOpacity activeOpacity={1} onPress={() => {

        navigation.navigate('Register')
      }} style={{
        padding: 10,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
      }}><Text style={{
        fontSize: windowWidth / 28,
        marginTop: 10,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: colors.white
      }}>TIdak punya akun ? daftar disini</Text></TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});
