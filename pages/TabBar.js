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
  
  class TabBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentState: 0};
        DeviceEventEmitter.addListener('InCard', (inCard) => {this.setState({currentState: 2})});
    }

    render() {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
        return(
            <>
            { (this.state.currentState == 0) &&

            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', height: height * 0.1, width: width * 0.95, alignSelf: 'center', marginTop: height * 0.07}}>
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('AffirmAccount'); this.setState({currentState: 1})}} style={{backgroundColor: '#F8F8F8', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.6, shadowRadius: 10, alignContent: 'center', justifyContent: 'center', width: width * 0.15, height: width * 0.15, borderRadius: (width * 0.15) / 2}}>
                    <Image style={{flex: 2, justifyContent: 'center', alignContent: 'center', height: '100%', width: '100%', alignItems: 'center', borderRadius: (width * 0.15) / 2}} source={require('../affirm.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Profile'); this.setState({currentState: 2})}} style={{backgroundColor: '#F8F8F8', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.6, shadowRadius: 10, alignContent: 'center', justifyContent: 'center', width: width * 0.15, height: width * 0.15, borderRadius: (width * 0.15) / 2}}>
                    <Text style={{textAlign: 'center', fontSize: 30}}>🧍</Text>
                </TouchableOpacity>
            </View>
            }
            { (this.state.currentState == 1) &&
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', position: 'absolute', height: height * 0.1, width: width * 0.95, alignSelf: 'center', marginTop: height * 0.07}}>
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Explore'); this.setState({currentState: 0})}} style={{backgroundColor: '#F8F8F8', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.6, shadowRadius: 10, alignContent: 'center', justifyContent: 'center', width: width * 0.15, height: width * 0.15, borderRadius: (width * 0.15) / 2}}>
                    <Text style={{textAlign: 'center', fontSize: 30}}>🔮</Text>
                </TouchableOpacity>
            </View>
            }

            { (this.state.currentState == 2) &&
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', position: 'absolute', height: height * 0.1, width: width * 0.95, alignSelf: 'center', marginTop: height * 0.07}}>
                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('Explore'); this.setState({currentState: 0})}} style={{backgroundColor: '#F8F8F8', shadowColor: '#686868', shadowOffset: {width: 0, height: 0}, shadowOpacity: 0.6, shadowRadius: 10, alignContent: 'center', justifyContent: 'center', width: width * 0.15, height: width * 0.15, borderRadius: (width * 0.15) / 2}}>
                    <Text style={{textAlign: 'center', fontSize: 30}}>🔮</Text>
                </TouchableOpacity>

            </View>
            }
            </>
        )
  };
}

export {TabBar}