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
import { ProductCard } from './ProductCard';
  
  class FullPageProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
    console.log(this.props.route.params);
        return(
            <>
           <ScrollView style={{flex: 1}}>
               <View style={{marginTop: height * 0.15, width: width * 0.95, justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
                <ProductCard info={this.props.route.params.item} />
               </View>
               {/* Image Text */}
               <View style={{marginTop: height * 0.05, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily: 'arial', color: '#505050', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>{this.props.route.params.item.companyName}</Text>
                <Text style={{fontFamily: 'arial', marginTop: 5, color: '#707070', fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>{this.props.route.params.item.productName}</Text>
                <Text style={{fontFamily: 'arial', marginTop: 12, color: '#808080', fontWeight: 'bold', fontSize: 10, textAlign: 'center'}}>{this.props.route.params.item.expires}</Text> 
                <Text style={{fontFamily: 'arial', marginTop: 5, padding: 20, color: '#707070', fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus sollicitudin malesuada. Ut at lorem vehicula, sodales mauris vel, feugiat lacus. Fusce tincidunt fringilla commodo. Duis dictum feugiat urna. Duis pretium enim nec lacus euismod, nec elementum dolor tristique. Suspendisse potenti. Nam eget arcu metus</Text>
              
                </View>
                {/* Button to commit */}
                <View style={{marginTop: height * 0.02, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={()=> {alert('Committed with Affirm!');}} style={{width: width * 0.7, justifyContent: 'center', alignItems: 'center', alignContent: 'center', height: height * 0.07, shadowColor: '#D8B2D8', shadowOffset: {width: 0, height: 0}, shadowOpacity: 1.2, shadowRadius: 10, marginTop: 10,  backgroundColor: '#D8B2D8', borderRadius: 9}}>
                        <Text style={{fontFamily: 'arial', fontWeight: 'bold', fontSize: 16, color: '#977C97'}}>Commit with Affirm</Text>
                    </TouchableOpacity>
                </View>

                <View style={{width: width, height: height * 0.05,  marginTop: height * 0.05}} />
           </ScrollView>
            </>
        )
  };
}

export {FullPageProduct}