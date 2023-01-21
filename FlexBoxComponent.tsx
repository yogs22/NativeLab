import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import mlimage from './pp-ml.jpg';

class FlexBoxComponent extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'grey',
            alignItems: 'flex-end',
          }}>
          <View style={{backgroundColor: 'red', flex: 1, height: 50}} />
          <View style={{backgroundColor: 'blue', flex: 1, height: 70}} />
          <View style={{backgroundColor: 'yellow', flex: 1, height: 90}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Tentang</Text>
          <Text>Komunitas</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Image
            source={mlimage}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 15}}
          />
          <View>
            <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>
              Yogi Prasetyawan
            </Text>
            <Text>100K Subscribers</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default FlexBoxComponent;
