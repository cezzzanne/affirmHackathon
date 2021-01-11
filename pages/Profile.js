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
  
  class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inLikes: true};
    }

    render() {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
        return(
            <>
            <View style={{flex: 1}}>
                <View  style={{backgroundColor: '#F8F8F8', borderWidth: 10, borderColor: '#8CC5FF', marginTop: height * 0.15, alignSelf: 'center', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.6, shadowRadius: 50, alignContent: 'center', justifyContent: 'center', width: width * 0.35, height: width * 0.35, borderRadius: (width * 0.35) / 2}}>
                        <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: (width * 0.35) / 2}} source={require('../dylan.jpg')} />
                </View>

                <View style={{marginTop: height * 0.03, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial', fontSize: 25, color: 'gray'}}>Pablo Arellano</Text>
                    <Text style={{marginTop: height * 0.01, textAlign: 'center', fontFamily: 'Arial', fontSize: 15, color: 'gray'}}>3 ❤️ | 5 🚀 | 23 🔗</Text>
                </View>

                <View style={{marginTop: height * 0.04, justifyContent: 'center', alignContent: 'center'}}>
                { this.state.inLikes &&

                    <View style={{width: width * 0.5, alignSelf: 'center', height: height * 0.055, flexDirection: 'row'}}>
                        <View style={{flex: 1, backgroundColor: '#D0D0D0',  borderBottomLeftRadius: 15, borderRightWidth: 4, borderColor: '#C0C0C0', borderTopLeftRadius: 15, justifyContent: 'center', alignContent: 'center'}}>
                            <TouchableOpacity onPress={()=> {this.setState({inLikes: true})}} >
                            <Text style={{textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial', fontSize: 13, color: '#888888'}}>❤️ Liked</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, backgroundColor: '#E0E0E0', borderBottomRightRadius: 15, borderTopRightRadius: 15, justifyContent: 'center', alignContent: 'center'}}>
                            <TouchableOpacity onPress={()=> {this.setState({inLikes: false})}}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial', fontSize: 13, color: '#888888'}}>🚀 Commited</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    }
                    { !this.state.inLikes &&
                    <View style={{width: width * 0.5, alignSelf: 'center', height: height * 0.055, flexDirection: 'row'}}>
                        <View style={{flex: 1, backgroundColor: '#E0E0E0',  borderBottomLeftRadius: 15, borderRightWidth: 4, borderColor: '#C0C0C0', borderTopLeftRadius: 15, justifyContent: 'center', alignContent: 'center'}}>
                            <TouchableOpacity onPress={()=> {this.setState({inLikes: true})}} >
                            <Text style={{textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial', fontSize: 13, color: '#888888'}}>❤️ Liked</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 1, backgroundColor: '#D0D0D0', borderBottomRightRadius: 15, borderTopRightRadius: 15, justifyContent: 'center', alignContent: 'center'}}>
                            <TouchableOpacity onPress={()=> {this.setState({inLikes: false})}}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold', fontFamily: 'Arial', fontSize: 13, color: '#888888'}}>🚀 Commited</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    }
                </View>
          
                
                <ScrollView style={{marginTop: height * 0.02}}>
                    { this.state.inLikes &&
                <View style={{justifyContent: 'center',marginTop: height * 0.02, alignContent: 'center'}}>
                    <View style={{width: width * 0.85, backgroundColor: '#F8F8F8', alignSelf: 'center', borderRadius: 15, height: height * 0.08, flexDirection: 'row', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.4, shadowRadius: 5, }}>
                        <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: 15}} source={require('../dji.png')} />
                        <View style={{flex: 6, justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', color: 'gray', fontFamily: 'Arial', marginLeft: 20, fontSize: 15}}> DJI Mavick Drone</Text>
                        </View>
                        <View style={{flex: 2, justifyContent: 'space-evenly', padding: 3}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#4CA64C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>💸 $600</Text>
                            <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#FF4C4C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>🏷 30% discount</Text>
                        </View>
                    </View>
                    <View style={{width: width * 0.85, backgroundColor: '#F8F8F8', marginTop: height * 0.02, alignSelf: 'center', borderRadius: 15, height: height * 0.08, flexDirection: 'row', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.4, shadowRadius: 5, }}>
                        <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: 15}} source={require('../peloton.png')} />
                        <View style={{flex: 6, justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', color: 'gray', fontFamily: 'Arial', marginLeft: 20, fontSize: 15}}> Peloton Bike+</Text>
                        </View>
                        <View style={{flex: 2, padding: 3, justifyContent: 'space-evenly'}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#4CA64C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>💸 $1200</Text>
                            <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#FF4C4C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>🏷 45% discount</Text>
                        </View>
                    </View>
                    <View style={{width: width * 0.85, backgroundColor: '#F8F8F8', marginTop: height * 0.02, alignSelf: 'center', borderRadius: 15, height: height * 0.08, flexDirection: 'row', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.4, shadowRadius: 5, }}>
                        <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: 15}} source={require('../chair.png')} />
                        <View style={{flex: 6, justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', color: 'gray', fontFamily: 'Arial', marginLeft: 20, fontSize: 15}}> Joybird Barcelona Chair</Text>
                        </View>
                        <View style={{flex: 2, padding: 3, justifyContent: 'space-evenly'}}>
                            <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#4CA64C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>💸 $200</Text>
                            <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#FF4C4C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>🏷 30% discount</Text>
                        </View>
                    </View>
                    
                </View>
                }

                { !this.state.inLikes &&
                                <View style={{justifyContent: 'center',marginTop: height * 0.02, alignContent: 'center'}}>
                                <View style={{width: width * 0.85, backgroundColor: '#F8F8F8', alignSelf: 'center', borderRadius: 15, height: height * 0.08, flexDirection: 'row', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.4, shadowRadius: 5, }}>
                                    <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: 15}} source={require('../lemtosh.jpg')} />
                                    <View style={{flex: 6, justifyContent: 'center'}}>
                                        <Text style={{fontWeight: 'bold', color: 'gray', fontFamily: 'Arial', marginLeft: 20, fontSize: 15}}> Moscot Lemtosh Sun</Text>
                                    </View>
                                    <View style={{flex: 2, justifyContent: 'space-evenly', padding: 3}}>
                                        <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#4CA64C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>💸 $250</Text>
                                        <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#FF4C4C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>🏷 10% discount</Text>
                                    </View>
                                </View>
                                <View style={{width: width * 0.85, backgroundColor: '#F8F8F8', marginTop: height * 0.02, alignSelf: 'center', borderRadius: 15, height: height * 0.08, flexDirection: 'row', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.4, shadowRadius: 5, }}>
                                    <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: 15}} source={require('../peloton.png')} />
                                    <View style={{flex: 6, justifyContent: 'center'}}>
                                        <Text style={{fontWeight: 'bold', color: 'gray', fontFamily: 'Arial', marginLeft: 20, fontSize: 15}}> Dyson Vacuum +</Text>
                                    </View>
                                    <View style={{flex: 2, padding: 3, justifyContent: 'space-evenly'}}>
                                        <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#4CA64C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>💸 $1200</Text>
                                        <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#FF4C4C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>🏷 35% discount</Text>
                                    </View>
                                </View>
                                <View style={{width: width * 0.85, backgroundColor: '#F8F8F8', marginTop: height * 0.02, alignSelf: 'center', borderRadius: 15, height: height * 0.08, flexDirection: 'row', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.4, shadowRadius: 5, }}>
                                    <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: 15}} source={require('../molek.png')} />
                                    <View style={{flex: 6, justifyContent: 'center'}}>
                                        <Text style={{fontWeight: 'bold', color: 'gray', fontFamily: 'Arial', marginLeft: 20, fontSize: 15}}> Molekule Air Purifier</Text>
                                    </View>
                                    <View style={{flex: 2, padding: 3, justifyContent: 'space-evenly'}}>
                                        <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#4CA64C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>💸 $300</Text>
                                        <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#FF4C4C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>🏷 20% discount</Text>
                                    </View>
                                </View>
                                <View style={{width: width * 0.85, backgroundColor: '#F8F8F8', marginTop: height * 0.02, alignSelf: 'center', borderRadius: 15, height: height * 0.08, flexDirection: 'row', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.4, shadowRadius: 5, }}>
                                    <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: 15}} source={require('../shoes.jpg')} />
                                    <View style={{flex: 6, justifyContent: 'center'}}>
                                        <Text style={{fontWeight: 'bold', color: 'gray', fontFamily: 'Arial', marginLeft: 20, fontSize: 15}}>Goat Nike AirForce One</Text>
                                    </View>
                                    <View style={{flex: 2, padding: 3, justifyContent: 'space-evenly'}}>
                                        <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#4CA64C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>💸 $200</Text>
                                        <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#FF4C4C', fontFamily: 'Arial', marginLeft: 20, fontSize: 10}}>🏷 40% discount</Text>
                                    </View>
                                </View>
                            </View>
                }
                </ScrollView>

            </View>
            </>
        )
  };
}

export {Profile}