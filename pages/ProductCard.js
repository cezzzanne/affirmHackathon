import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    Dimensions
  } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
  
  class ProductCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentState: 0};
    }

    render() {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
        return(
            <>
           <View style={{borderRadius: 40, flexDirection: 'row', borderWidth: 12, borderColor: "#E8E8E8", backgroundColor: "white"}}>
                <Image style={{width: '100%', resizeMode: 'cover', height: height * 0.45, borderRadius: 20}} source={this.props.info.image} />
                <View style={{position: 'absolute', justifyContent: 'center', shadowColor: '#A5D2A5', shadowOffset: {width: 0, height: 0}, shadowOpacity: 1.2, shadowRadius: 10, marginTop: 10, marginLeft: '72%', zIndex: 9999, height: height * 0.045, width: width * 0.2, backgroundColor: '#A5D2A5', borderRadius: 5}}>
                    <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold', color: '#5C755C', textAlign: 'center'}}>💸 {this.props.info.price}</Text>
                </View>
                <View style={{position: 'absolute', justifyContent: 'center', shadowColor: '#FF9999', shadowOffset: {width: 0, height: 0}, shadowOpacity: 1.2, shadowRadius: 10, marginTop: height * 0.07, marginLeft: '72%', zIndex: 9999, height: height * 0.045, width: width * 0.2, backgroundColor: '#FF9999', borderRadius: 5}}>
                    <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold', color: '#AC2F2F', textAlign: 'center'}}>🏷 {this.props.info.discount}</Text>
                </View>
                <View style={{position: 'absolute', justifyContent: 'center', shadowColor: '#E5E5E5', shadowOffset: {width: 0, height: 0}, shadowOpacity: 1.2, shadowRadius: 10, marginTop: height * 0.39, marginLeft: '72%', zIndex: 9999, height: height * 0.045, width: width * 0.2, backgroundColor: '#E5E5E5', borderRadius: 9}}>
                    <Text style={{fontFamily: 'Helvetica', fontSize: 20, fontWeight: 'bold', color: '#727272', textAlign: 'center'}}>👥 {this.props.info.committed}</Text>
                </View>
           </View>
            </>
        )
  };
}

export {ProductCard}