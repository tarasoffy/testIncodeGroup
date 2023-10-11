import React, {FC, memo, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Props} from './Favourite.props';
import {styles} from './Favourite.styles';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import {ListFans} from '../../components/ListFans';
import {Header} from '../../components/Header';
import {resetFavourites} from '../../store/favouriteSlice/inedx';
import { w } from '../../styles/scale';

const FavouriteScreenFunc: FC<Props> = ({}) => {
  const favourite = useSelector(
    (state: RootState) => state.favourite.favourite,
  );

  const [femaleFans, setFemaleFans] = useState(0);
  const [maleFans, setmaleFans] = useState(0);
  const [otherFans, setOtherFans] = useState(0);

  const dispatch = useDispatch()

    const resetFavouritesFun = () => {
      dispatch(resetFavourites(null))
    }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.wrapperFavourite}>
        <View style={styles.wrapperGenderFans}>
          <Text>
            Female Fans <Text style={styles.counterFans}>{femaleFans}</Text>
          </Text>
          <Text>
            Male Fans <Text style={styles.counterFans}>{maleFans}</Text>
          </Text>
          <Text>
            Others <Text style={styles.counterFans}>{otherFans}</Text>
          </Text>
        </View>
        <ListFans
          data={favourite}
          femaleFans={setFemaleFans}
          maleFans={setmaleFans}
          otherFans={setOtherFans}
        />
        <TouchableOpacity
         onPress={() => resetFavouritesFun()}
         style={styles.clearFansBtn}>
          <Text style={styles.clearFansText}>CLEAR FANS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export const FavouriteScreen = memo(FavouriteScreenFunc);
