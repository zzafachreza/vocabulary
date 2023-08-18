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

  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const [loading, setLoading] = useState(true);
  const getBlockData = async () => {
    const response = await fetch(`${apiURL}random_soal`).then((response) => response.json());
    console.log(response);
    setData(response);
    setLoading(false)
    getRandom(0, response[0].text.split("").length - 1, response[0].text.split("").length);
  };



  const [data, setData] = useState([]);

  // const RandomArray = new Promise((myResolve, myReject) => {
  //   // "Producing Code" (May take some time)
  //   // shuffle(data);
  //   myResolve(shuffle(data))
  // });




  const [nomor, setNomor] = useState(0);

  const [nilai, setNilai] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  // const [nilai, setNilai] = useState([0])

  const [tmp, setTemp] = useState([]);
  const [waktu, setWaktu] = useState(3600);

  const cekPromis = () => {

  }

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
    });



    getBlockData();





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
      {!loading && <>

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
          <Text style={{
            fontFamily: fonts.secondary[800],
            fontSize: 25,
          }}>Apakah aku?</Text>
          <Image source={{
            uri: data[nomor].image
          }} style={{

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
            justifyContent: 'space-around'
          }}>

            {data[nomor].text.split("").map((i, index) => {




              return (
                <View style={{
                  backgroundColor: colors.white,
                  padding: 5,
                  width: windowWidth / (data[nomor].text.split("").length + 2),
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  height: 50,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>

                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.black,
                    fontSize: ((windowWidth * windowHeight) / 1000) / 16,
                  }}>{pilih[index]} </Text>

                </View>
              )
            })}




          </View>


          {/* acak number */}
          <View style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>

            {data[nomor].text.split("").map((i, index) => {


              return (

                <TouchableOpacity onPress={() => {
                  console.log(pilih.length)

                  setPilih([...pilih, data[nomor].text.split("")[tmp[index]]])

                }} style={{
                  padding: 5,
                  width: windowWidth / (data[nomor].text.split("").length + 2),
                  backgroundColor: colors.primary,
                  height: 50,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  <Text style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.white,
                    fontSize: ((windowWidth * windowHeight) / 1000) / 16,
                  }}>{data[nomor].text.split("")[tmp[index]]} </Text>
                </TouchableOpacity>

              )
            })}




          </View>

          <View style={{
            marginTop: 15,
            alignItems: 'center'

          }}>
            {/* <MyButton onPress={sendServer} tinggi={40} title="SELANJUTNYA" Icons="chevron-forward-circle" warna={colors.primary} /> */}
            {nomor != (data.length - 1) && pilih.length >= data[nomor].text.split("").length &&
              <TouchableOpacity onPress={sendServer} style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.primary,
                height: 40,
                width: windowWidth / 2.5,
                justifyContent: 'center',
                borderRadius: 10,
              }}>
                <Icon type='ionicon' color={colors.white} size={13} name='chevron-forward-circle' />
                <Text style={{
                  left: 5,
                  fontSize: 13,
                  color: colors.white,
                  fontFamily: fonts.secondary[600]
                }}>SELANJUTNYA</Text>
              </TouchableOpacity>}

          </View>



        </View>
        <View style={{
          height: 50,
        }}>
          {
            pilih.length >= data[nomor].text.split("").length && <TouchableOpacity
              onPress={() => {
                if (nomor == (data.length - 1)) {
                  sendServer();
                } else {
                  setPilih([])
                }
              }}
              style={{
                backgroundColor: nomor == (data.length - 1) ? colors.success : colors.border,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{
                fontFamily: fonts.secondary[600],
                color: colors.white,
                textAlign: 'center'
              }}>{nomor == (data.length - 1) ? 'SELESAI' : 'ULANG'}</Text>
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
              }}>NILAI</Text>
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
      </>}


    </ImageBackground >
  )
}

const styles = StyleSheet.create({

});