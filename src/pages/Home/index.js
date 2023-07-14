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
import CountDown from 'react-native-countdown-component';


export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({});
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const data = [
    // { text: "APPLE", image: require('../../assets/i1.png'), },
    { text: "BALL", image: require('../../assets/i2.png') },
    // { text: "CAT", image: require('../../assets/i3.png') },
    // { text: "DOG", image: require('../../assets/i4.png') },
    // { text: "ELEPHANT", image: require('../../assets/i5.png') },
    // { text: "FISH", image: require('../../assets/i6.png') },
    // { text: "GIRAFFE", image: require('../../assets/i7.png') },
    // { text: "HAT", image: require('../../assets/i8.png') },
    // { text: "LION", image: require('../../assets/i9.png') },
    // { text: "MONKEY", image: require('../../assets/i10.png') },
    // { text: "HEAD", image: require('../../assets/i11.png') },
    // { text: "HAIR", image: require('../../assets/i12.png') },
    // { text: "EYE", image: require('../../assets/i13.png') },
    // { text: "EAR", image: require('../../assets/i14.png') },
    // { text: "NOSE", image: require('../../assets/i15.png') },
    // { text: "MOUTH", image: require('../../assets/i16.png') },
    // { text: "TOOTH", image: require('../../assets/i17.png') },
    // { text: "TONGUE", image: require('../../assets/i18.png') },
    // { text: "FACE", image: require('../../assets/i19.png') },
    // { text: "HAND", image: require('../../assets/i20.png') },
  ]

  const [nomor, setNomor] = useState(0);

  const [nilai, setNilai] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  // const [nilai, setNilai] = useState([0])

  const [tmp, setTemp] = useState([]);
  const [waktu, setWaktu] = useState(3600);


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
    getData('user').then(uu => {
      setUser(uu)
    })
    getRandom(0, data[nomor].text.split("").length - 1, data[nomor].text.split("").length);

  }, []);

  const [pilih, setPilih] = useState([])

  const lanjut = () => {

    if (nomor == (data.length - 1)) {

      let NILAI = nilai.reduce((partialSum, a) => partialSum + a, 0);
      axios.post(apiURL + 'nilai_add', {
        nilai: NILAI,
        fid_user: user.id
      }).then(res => {
        console.log(res.data)
      })
      setModalVisible3(true);
    } else {
      setWaktu(180)
      setNomor(nomor + 1);
      setPilih([]);
      getRandom(0, data[nomor + 1].text.split("").length - 1, data[nomor + 1].text.split("").length);

    }
  }


  const sendServer = () => {



    if (pilih.join("") == data[nomor].text) {
      setModalVisible(true);
      let tmp = nilai;
      console.log(nilai)
      tmp[nomor] = 5,
        setNilai(tmp);

      // setNilai([...nilai, [nomor] = 5])

    } else {
      setModalVisible2(true);

    }
  }





  return (
    <ImageBackground source={require('../../assets/home.png')} style={{
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
            until={waktu}
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
            }}>{nomor + 1}/20</Text>
          </View>
        </View>

        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TouchableOpacity onPress={() => navigation.replace('Mulai')} style={{
            padding: 10,
            // backgroundColor: colors.primary,
            borderRadius: 5,
          }}>
            <Icon type='ionicon' name='home' color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
            padding: 10,
            // backgroundColor: colors.primary,
            borderRadius: 5,
          }}>
            <Icon type='ionicon' name='person' color={colors.primary} />
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
                <View style={{
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.black,
                    fontSize: 20,
                  }}>{pilih[index]} </Text>
                </View>
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

        <View style={{
          marginTop: 10,
          paddingHorizontal: windowWidth / 3,

        }}>
          <MyButton onPress={() => setPilih([])} tinggi={40} title="RESET" Icons="refresh" warna={colors.border} />
        </View>



      </View>
      <View style={{
        height: 50,
      }}>
        {
          pilih.length >= data[nomor].text.split("").length && <TouchableOpacity
            onPress={sendServer}
            style={{
              backgroundColor: nomor == (data.length - 1) ? colors.success : colors.primary,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              color: colors.white,
              textAlign: 'center'
            }}>{nomor == (data.length - 1) ? 'FINISH' : 'NEXT'}</Text>
          </TouchableOpacity>
        }
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {

          setModalVisible(!modalVisible);
          lanjut();
        }}>
        <View style={{
          flex: 1,
          opacity: 0.8,
          width: windowWidth,
          height: windowHeight / 2,
          backgroundColor: colors.black,
          justifyContent: 'center',
          padding: 10,
        }}>
          <View style={{
            backgroundColor: colors.white,
            height: windowHeight / 2,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/benar.png')} style={{
              width: '100%',
              height: windowHeight / 2.7,
              resizeMode: 'contain'
            }} />
            <Pressable onPress={() => {
              setModalVisible(!modalVisible);
              lanjut();
            }} style={{
              backgroundColor: colors.primary,
              width: 80,
              borderRadius: 10,
              padding: 10,
            }}>
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 18,
                textAlign: 'center',
              }}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          lanjut();
          setModalVisible2(!modalVisible2);
        }}>
        <View style={{
          flex: 1,
          opacity: 0.8,
          width: windowWidth,
          height: windowHeight / 2,
          backgroundColor: colors.black,
          justifyContent: 'center',
          padding: 10,
        }}>
          <View style={{
            backgroundColor: colors.white,
            height: windowHeight / 2,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/salah.png')} style={{
              width: '100%',
              height: windowHeight / 2.7,
              resizeMode: 'contain'
            }} />
            <Pressable onPress={() => {
              setModalVisible2(!modalVisible2);
              lanjut();
            }} style={{
              backgroundColor: colors.primary,
              width: 80,
              borderRadius: 10,
              padding: 10,
            }}>
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 18,
                textAlign: 'center',
              }}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          navigation.replace('Mulai');
          setModalVisible3(!modalVisible3);
        }}>
        <View style={{
          flex: 1,
          opacity: 0.8,
          width: windowWidth,
          height: windowHeight / 2,
          backgroundColor: colors.black,
          justifyContent: 'center',
          padding: 10,
        }}>
          <View style={{
            backgroundColor: colors.white,
            height: windowHeight / 2,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image source={require('../../assets/skor.png')} style={{
              width: '100%',
              height: windowHeight / 4,
              resizeMode: 'contain'
            }} />
            <Text style={{
              fontFamily: fonts.secondary[400],
              fontSize: 30,
            }}>SCORE</Text>
            <Text style={{
              marginVertical: 10,
              fontFamily: fonts.secondary[600],
              fontSize: 50,
            }}>{nilai.reduce((partialSum, a) => partialSum + a, 0)}</Text>
            <Pressable onPress={() => {
              setModalVisible3(!modalVisible3);
              navigation.replace('Mulai');
            }} style={{
              backgroundColor: colors.primary,
              width: 80,
              borderRadius: 10,
              padding: 10,
            }}>
              <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 18,
                textAlign: 'center',
              }}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


    </ImageBackground >
  )
}

const styles = StyleSheet.create({

});