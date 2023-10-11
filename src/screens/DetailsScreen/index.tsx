import React, {FC, memo, useEffect, useState} from 'react';
import {View, Text, SafeAreaView, ActivityIndicator, Image} from 'react-native';
import {Props} from './DetailsScreen.props';
import {Header} from '../../components/Header';
import {styles} from './DetailsScreen.styles';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { w } from '../../styles/scale';

const DetailsScreenFunc: FC<Props> = ({route}) => {
  const {data} = route.params;

  const [nameHomeWorld, setNameHomeWorld] = useState(null);
  const [species, setSpecies]: any = useState(null);

  const getHomeWorld = async () => {
    const response = await fetch(data.homeworld);
    const result = await response.json();
    setNameHomeWorld(result.name);
  };

  const getSpecies = async () => {
    if (data.species[0]) {
      const response = await fetch(data.species[0]);
      const result = await response.json();
      setSpecies(result.name);
    } else {
      setSpecies('not found');
    }
  };

  useEffect(() => {
    getHomeWorld();
    getSpecies();
  }, []);

  //Animations
  const top = useSharedValue(-1000);
  const bottom = useSharedValue(-1000);
  const sizeTextName = useSharedValue(w(0));
  
    const fromTop = () => {
      top.value = 0
    };

    const fromBottom = () => {
      bottom.value = 0
    };

    const nameTextSize = () => {
      sizeTextName.value = w(18)
    };
  
    const animatedStylesFromTop = useAnimatedStyle(() => ({
      top: withTiming(top.value, { duration: 1500 }),
    }));

    const animatedStylesFromBottom = useAnimatedStyle(() => ({
      bottom: withTiming(bottom.value, { duration: 1500 }),
    }))

    const animatedStylesNameSize = useAnimatedStyle(() => ({
      fontSize: withTiming(sizeTextName.value, { duration: 300 }),
    }))

    useEffect(() => {
      setTimeout(() => {
        nameTextSize()
      },1500)
    },[])

    useEffect(() => {
      fromTop()
      fromBottom()
    },[])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        {nameHomeWorld && species ? (
          <View style={styles.wrapperInfo}>
            <Image style={{width: w(120), height: w(120), borderRadius: w(120)}} source={require('../../assets/images/r2d2.jpg')} />
            <Animated.Text style={[styles.textName, animatedStylesNameSize]}>{data.name}</Animated.Text>
            <Animated.Text
              style={[
                styles.titleInfo,
                {position: 'absolute', left: 0},
                animatedStylesFromTop
              ]}>
              birth year: <Text style={styles.textInfo}>{data.birth_year}</Text>
            </Animated.Text>
            <Animated.Text
              style={[
                styles.titleInfo,
                {position: 'absolute', right: 0},
                animatedStylesFromTop
              ]}>
              gender: <Text style={styles.textInfo}>{data.gender}</Text>
            </Animated.Text>
            <Animated.Text
              style={[
                styles.titleInfo,
                {position: 'absolute', right: 0},
                animatedStylesFromBottom
              ]}>
              home world: <Text style={styles.textInfo}>{nameHomeWorld}</Text>
            </Animated.Text>
            <Animated.Text
              style={[
                styles.titleInfo,
                {position: 'absolute', left: 0},
                animatedStylesFromBottom
              ]}>
              species: <Text style={styles.textInfo}>{species}</Text>
            </Animated.Text>
          </View>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    </SafeAreaView>
  );
};

export const DetailsScreen = memo(DetailsScreenFunc);
