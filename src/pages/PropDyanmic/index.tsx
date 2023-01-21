import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import Story from '../../types/story';

const StoryComponent = (props: Story) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.image,
        }}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <Text style={{maxWidth: 80, marginTop: 10, textAlign: 'center'}}>{props.title}</Text>
    </View>
  );
};

const PropDyanamic = () => {
  return (
    <View>
      <Text>Prop Dynamic</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <StoryComponent
            title="Dinamis 1"
            image="https://placeimg.com/100/100/any"
          />
          <StoryComponent
            title="Yt Kocak"
            image="https://placeimg.com/200/200/any"
          />
          <StoryComponent
            title="Mobile Legends"
            image="https://placeimg.com/300/300/any"
          />
          <StoryComponent
            title="Story"
            image="https://placeimg.com/400/400/any"
          />
          <StoryComponent
            title="Free Fire"
            image="https://placeimg.com/300/300/any"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropDyanamic;
