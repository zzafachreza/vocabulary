import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import Sound from 'react-native-sound';
var whoosh = new Sound(
  require('../../assets/suara.mp3'),
  Sound.MAIN_BUNDLE,
).release();

export default function Splash({ navigation }) {

  useEffect(() => {
    whoosh.play();
  }, [])
  const top = new Animated.Value(0.3);

  const animasi = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(top, {
          toValue: 1,
          duration: 1000,
        }),
        Animated.timing(top, {
          toValue: 0.3,
          duration: 1000,
        }),
      ]),
      {
        iterations: 1,
      },
    ).start();
  };



  useEffect(() => {
    setTimeout(() => {
      getData('user').then(res => {
        if (!res) {
          navigation.replace('GetStarted')
        } else {
          if (res.level == 'GURU') {
            navigation.replace('HomeGuru')
          } else {
            navigation.replace('Mulai')
          }

        }
      })
    }, 1500)
  }, []);


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>

        <Image
          source={require('../../assets/logo.png')}
          style={
            {
              width: windowWidth,
              height: windowWidth,
              resizeMode: 'contain',
              marginBottom: 50,
            }
          }
        />
        <ActivityIndicator size="large" color={colors.white} />




      </View>




    </View>
  );
}

const styles = StyleSheet.create({});
