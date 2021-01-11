import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Button,
    DeviceEventEmitter,
    ActionSheetIOS,
    Share
  } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ProductCard} from './ProductCard';

  class Explore extends React.Component {

    constructor(props) {
        super(props);
        this.state = {currentState: 0, companyName: 'Peloton', productName: 'Peloton Bike+', expiry: '⏰ 6 days 2 hours remain', index: 0};
        this.items = [
          {companyName: 'Peloton', productName: 'Peloton Bike+', expires: '⏰ 6 days 2 hours remain', price: '$1100', discount: '60%', committed: '8/35', image: require('../peloton.png')},
          {companyName: 'DJI', productName: 'DJI Mavick', expires: '⏰ 1 days 8 hours remain', price: '$300', discount: '65%', committed: '37/50', image: require('../dji.png')},
          {companyName: 'Dyson', productName: 'Dyson Vacuum', expires: '⏰  32 minutes remain', price: '$899', discount: '45%', committed: '5/15', image: require('../vaccum.jpg')},
          {companyName: 'Goat', productName: 'Nike AirMax', expires: '⏰ 2 days 9 hours remain', price: '$399', discount: '15%', committed: '36/40', image: require('../shoes.jpg')},
          {companyName: 'Ring', productName: '2-Pack Outdoor Cam', expires: '⏰ 7 days 3 hours remain', price: '$200', discount: '30%', committed: '8/12', image: require('../ring.png')},
        {companyName: 'Goat', productName: 'Nike AirMax', expires: '⏰ 2 days 9 hours remain', price: '$399', discount: '15%', committed: '36/40', image: require('../shoes.jpg')},
        {companyName: 'Moscot', productName: 'Lemtosh Sun', expires: '⏰ 43 minutes remain', price: '$160', discount: '50%', committed: '9/10', image: require('../lemtosh.jpg')},
        {companyName: 'Mirror', productName: 'Platinum Mirror', expires: '⏰ 13 minutes remain', price: '$960', discount: '50%', committed: '2/13', image: require('../mirror.png')},

        {companyName: 'Molekule', productName: 'Special Air Purifier', expires: '⏰ 15 days 3 hours remain', price: '$200', discount: '60%', committed: '4/25', image: require('../molek.png')}]
        this.openCard = this.openCard.bind(this);
        this.openActionSheet = this.openActionSheet.bind(this);
    }

    setCard(card) {
      this.setState({companyName: card.companyName, productName: card.productName, expiry: card.expires});
    }

    openCard() {
      DeviceEventEmitter.emit('InCard', true);
      this.props.navigation.push('Discover', {'item': this.items[this.state.index]});
    }

    async openActionSheet() {
      const result = await Share.share({
        message:
          'New on Affirm Club: ' + this.state.productName + " from " + this.state.companyName,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }

    render() {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;
        return(
            <>
            <View style={{flex: 1, flexDirection: 'row',  justifyContent: 'center'}}>
              <View style={{position: 'absolute', marginTop: height * 0.12}}>
                <Text style={{fontFamily: 'arial', color: '#505050', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>{this.state.companyName}</Text>
                <Text style={{fontFamily: 'arial', marginTop: 5, color: '#707070', fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>{this.state.productName}</Text>
                <Text style={{fontFamily: 'arial', marginTop: 12, color: '#808080', fontWeight: 'bold', fontSize: 10, textAlign: 'center'}}>{this.state.expiry}</Text>

              </View>
                    <Swiper
                        animateCardOpacity={true}
                        marginTop={170}
                        cards={this.items}
                        renderCard={(card) => {
                            return (
                                <ProductCard info={card} />
                            )
                        }}
                        onSwiped={(cardIndex) => {if (cardIndex + 1 < this.items.length) {this.setCard(this.items[cardIndex + 1]); this.setState({index: this.state.index + 1})}}}
                        onSwipedAll={() => {this.setState({companyName: 'Thats it!', productName: 'Come back later!', expiry: ''})}}
                        cardIndex={0}
                        backgroundColor={'transparent'}
                        stackSize={4}>
                    </Swiper>
                  {/* Bottom buttons */}
                    <View style={{width: width * 0.7, justifyContent: 'space-around', flexDirection: 'row',  alignContent: 'center', height: height * 0.1, alignSelf: 'flex-end', marginBottom: height * 0.1}}>
                        <TouchableOpacity onPress={this.openActionSheet} style={{alignSelf: 'center', width: width * 0.2, justifyContent: 'center', borderRadius: (width * 0.2) / 2, height: width * 0.2, backgroundColor: '#ADDEAE', shadowColor: '#ADDEAE', shadowOffset: {width: 0, height: 0}, shadowOpacity: 1.2, shadowRadius: 10 }}>
                            <Text style={{textAlignVertical: 'center', textAlign: 'center', fontSize: 40, alignSelf: 'center'}}>🔗</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.openCard} style={{alignSelf: 'center', width: width * 0.2, justifyContent: 'center', borderRadius: (width * 0.2) / 2, height: width * 0.2, backgroundColor: '#ECECAC', shadowColor: '#ECECAC', shadowOffset: {width: 0, height: 0}, shadowOpacity: 1.2, shadowRadius: 10 }}>
                            <Text style={{textAlignVertical: 'center', textAlign: 'center', fontSize: 40, alignSelf: 'center'}}>✨</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{position: 'absolute', fontWeight: 'bold', fontSize: 9, fontFamily: 'Arial', color: 'gray', marginTop: height * 0.94}}>Right to ❤️ - Left to ❌ - 🔗 to Share - ✨ to Open</Text>

                    </View>
            </>
        )
  };
}

export {Explore}