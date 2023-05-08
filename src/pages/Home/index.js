import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground } from 'react-native'
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
import CountDown from 'react-native-countdown-component';


export default function Home({ navigation }) {

  const data = [
    { text: "APPLE", image: require('../../assets/i1.png'), },
    { text: "BALL", image: require('../../assets/i2.png') },
    { text: "CAT", image: require('../../assets/i3.png') },
    { text: "DOG", image: require('../../assets/i1.png') },
    { text: "ELEPHANT", image: require('../../assets/i1.png') },
    { text: "FISH", image: require('../../assets/i1.png') },
    { text: "GIRAFFE", image: require('../../assets/i1.png') },
    { text: "HAT", image: require('../../assets/i1.png') },
    { text: "LION", image: require('../../assets/i1.png') },
    { text: "MONKEY", image: require('../../assets/i1.png') },
    { text: "HEAD", image: require('../../assets/i1.png') },
    { text: "HAIR", image: require('../../assets/i1.png') },
    { text: "EYE", image: require('../../assets/i1.png') },
    { text: "EAR", image: require('../../assets/i1.png') },
    { text: "NOSE", image: require('../../assets/i1.png') },
    { text: "MOUTH", image: require('../../assets/i1.png') },
    { text: "TOOTH", image: require('../../assets/i1.png') },
    { text: "TONGUE", image: require('../../assets/i1.png') },
    { text: "FACE", image: require('../../assets/i1.png') },
    { text: "HAND", image: require('../../assets/i1.png') },
  ]

  const [nomor, setNomor] = useState(0);

  const [tmp, setTemp] = useState([])


  const getRandom = (start, end, total) => {
    // Tentukan rentang angka dan jumlah angka yang diinginkan
    const startRange = start;
    const endRange = end;
    const numOfNumbers = total;

    // Buat array kosong untuk menyimpan angka acak
    let randomNumbers = [];

    // Loop hingga jumlah angka yang diinginkan terpenuhi
    while (randomNumbers.length < numOfNumbers) {
      // Hasilkan angka acak di antara rentang yang ditentukan
      const randomNumber = Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;

      // Cek apakah angka sudah ada di dalam array, jika tidak maka tambahkan
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }

    // Tampilkan hasil
    console.log(randomNumbers);
    setTemp(randomNumbers);
  }

  useEffect(() => {

    getRandom(0, data[nomor].text.split("").length - 1, 5)



  }, []);

  const [pilih, setPilih] = useState([])



  const sendServer = () => {
    alert('habis')
  }
  let haveIt = [];

  const generateUniqueRandom = (maxNr) => {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      return random;
    } else {
      if (haveIt.length < maxNr) {
        //Recursively generate number
        return generateUniqueRandom(maxNr);
      } else {
        console.log('No more numbers available.')
        return false;
      }
    }
  }



  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>
      <View style={{
        flex: 0.2,
        paddingHorizontal: 10,
        flexDirection: 'row'
      }}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CountDown
            until={60 * 3}
            size={15}
            onFinish={sendServer}
            digitStyle={{ backgroundColor: colors.primary }}
            digitTxtStyle={{ color: colors.white }}
            timeToShow={['M', 'S']}
            timeLabels={{ m: '', s: '' }}
          />
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <View style={{
            width: 80,
            padding: 10,
            backgroundColor: colors.primary,
            borderRadius: 5,
          }}>
            <Text style={{
              textAlign: 'center',
              fontFamily: fonts.secondary[600],
              color: colors.white
            }}>1/20</Text>
          </View>
        </View>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{
            padding: 10,
            // backgroundColor: colors.primary,
            borderRadius: 5,
          }}>
            <Icon type='ionicon' name='home' color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={data[nomor].image} style={{

          width: windowWidth / 1.5,
          height: windowWidth / 1.5,
          resizeMode: 'contain'

        }} />
      </View>
      <View style={{
        flex: 1,
        padding: 5,
      }}>


        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>

          {data[nomor].text.split("").map((i, index) => {




            return (
              <View style={{
                backgroundColor: colors.white,
                flex: 1,
                borderWidth: 1,
                borderColor: colors.black,
                borderStyle: 'dashed',
                margin: 5,
                borderRadius: 5,
              }}>
                <TouchableOpacity onPress={() => console.log(haveIt)} style={{
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.black,
                    fontSize: 20,
                  }}>{pilih[index]} </Text>
                </TouchableOpacity>
              </View>
            )
          })}




        </View>


        {/* acak number */}
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>

          {data[nomor].text.split("").map((i, index) => {




            return (
              <View style={{
                backgroundColor: colors.primary,
                flex: 1,
                margin: 5,
                borderRadius: 5,
              }}>
                <TouchableOpacity onPress={() => {
                  console.log(pilih.length)

                  setPilih([...pilih, data[nomor].text.split("")[tmp[index]]])

                }} style={{
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.white,
                    fontSize: 20,
                  }}>{data[nomor].text.split("")[tmp[index]]} </Text>
                </TouchableOpacity>
              </View>
            )
          })}




        </View>




      </View>
      {
        pilih.length == data[nomor].text.split("").length && <TouchableOpacity
          onPress={() => {

            if (pilih.join("") == data[nomor].text) {
              alert("BETUL")
            } else {
              alert("SALAH")
            }

          }}
          style={{
            backgroundColor: colors.primary,
            padding: 10,
          }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            color: colors.white,
            textAlign: 'center'
          }}>SELANJUTNYA</Text>
        </TouchableOpacity>
      }

    </SafeAreaView >
  )
}

const styles = StyleSheet.create({

});