import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    DeviceEventEmitter,
    Image
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
  
  class AffirmAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
        return(
            <>
            <View style={{flex: 1}}>
                <View  style={{backgroundColor: '#F8F8F8', marginTop: height * 0.3, alignSelf: 'center', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.6, shadowRadius: 50, alignContent: 'center', justifyContent: 'center', width: width * 0.35, height: width * 0.35, borderRadius: (width * 0.35) / 2}}>
                        <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: (width * 0.15) / 2}} source={require('../affirm.png')} />
                </View>
                <View style={{marginTop: height * 0.02, alignItems: 'center', justifyContent: 'center', padding: 15}}>
                    <Text style={{fontFamily: 'arial', marginTop: 5, padding: 20, color: '#707070', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>Welcome to the Affirm Club! Here you can commit to items for extremely good prices - if the product reaches it's target that is! Browse around our products that we have promotions with, share with your friends, like them and get great deals! If you want to look for specific items, into your finances and more open the Affirm App here!</Text>
                </View>
                <View style={{marginTop: height * 0.05, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity style={{width: width * 0.7, justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: height * 0.07, shadowColor: '#8CC5FF', shadowOffset: {width: 0, height: 0}, shadowOpacity: 1.2, shadowRadius: 10, marginTop: 10,  backgroundColor: '#8CC5FF', borderRadius: 9}}>
                        <Text style={{fontFamily: 'arial', fontWeight: 'bold', fontSize: 16, color: '#198CFF'}}>Open Affirm App</Text>
                    </TouchableOpacity>
                </View>            
            </View>
            </>
        )
  };
}

export {AffirmAccount}