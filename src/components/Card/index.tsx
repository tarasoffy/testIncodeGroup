import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Props} from './Card.props';
import {styles} from './Card.styles';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../styles/colors';
import {w} from '../../styles/scale';
import {Icon} from '../Icon';
import {useDispatch} from 'react-redux';
import {addToFavourite} from '../../store/favouriteSlice/inedx';

const CardFunc: FC<Props> = ({data, favouriteCard}) => {
  const navigation = useNavigation();

  const goToDetailsScreen = () => {
    navigation.navigate('Details', {
      data,
    });
  };

  const dispatch = useDispatch();

  const addToFavouriteFun = () => {
    dispatch(addToFavourite({name: data.name, gender: data.gender}));
  };

  return (
    <TouchableOpacity onPress={goToDetailsScreen}>
      <View style={styles.wrapper}>
        <View style={styles.info}>
          <View style={{flexDirection: 'row'}}>
          <View style={{height: w(100)}}>
          <Image style={styles.imageStyle} source={require('./../../assets/images/r2d2.jpg')} />
          </View>
          <Text style={styles.wrapperTextInfo}>
            name: <Text style={styles.textInfo}>{data.name}</Text>
          </Text>
          </View>
          <View style={styles.bottomCard}>
            <TouchableOpacity onPress={() => addToFavouriteFun()}>
              <Icon
                name={favouriteCard ? 'HeartFill' : 'Heart'}
                color={favouriteCard ? Colors.RED : Colors.GREY}
                size={w(24)}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = memo(CardFunc);
