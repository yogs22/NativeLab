import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  NewsItem,
  RatedDoctor,
  DoctorCategory,
  HomeProfile,
  Gap,
} from '~/components';
import {colors, fonts, getData} from '~/utils';
import {Navigation, NewsItem as NewsItemType, Product} from '~/types/component';
import axios from 'axios';
import Const from '~/config/const';

export default function Doctor({navigation}: Navigation) {
  const [news, setNews] = useState([]);
  const [token, setToken] = useState('');
  useEffect(() => {
    getData('token').then(res => {
      setToken(res);
    });
  });
  useEffect(() => {
    axios
      .get(`${Const.API_URL}/product?category_slug=game`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setNews(response.data.payload);
      });
  }, [token]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.wrapperContent}>
          <Gap height={30} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Text style={styles.welcome}>
            Mau konsultasi dengan siapa hari ini?
          </Text>
        </View>
        <View style={styles.wrapperScroll}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.category}>
              <Gap width={32} />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={22} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.wrapperContent}>
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
          <Text style={styles.sectionLabel}>Good News</Text>
        </View>
        {news.map((item: Product) => {
          return (
            <NewsItem
              title={item.name}
              date={item.status}
              image={item.picture_url}
            />
          );
        })}
        <Gap height={30} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 209,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 30,
    marginBottom: 16,
  },
  wrapperContent: {
    paddingHorizontal: 16,
  },
});
