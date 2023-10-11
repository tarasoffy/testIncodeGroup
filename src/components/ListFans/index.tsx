import React, {FC, memo, useEffect} from 'react';
import {Text, ScrollView} from 'react-native';
import {Props} from './ListFans.props';
import {styles} from './ListFans.styles';
import {w} from '../../styles/scale';

const ListFansFunc: FC<Props> = ({data, maleFans, femaleFans, otherFans}) => {
  const countGender = () => {
    let male = 0;
    let female = 0;
    let other = 0;

    data.forEach(item => {
      switch (item.gender) {
        case 'female':
          female++;
          break;
        case 'male':
          male++;
          break;
        case 'n/a':
          other++;
          break;
        default:
          break;
      }
    });
    maleFans(male);
    femaleFans(female);
    otherFans(other);
  };

  useEffect(() => {
    countGender();
  }, [data]);

  return (
    <ScrollView
      style={{flex: 1, marginTop: w(16)}}
      contentContainerStyle={{alignItems: 'center'}}>
      {data.map(item => {
        return (
          <Text style={styles.textName} key={item.name}>
            {item.name}
          </Text>
        );
      })}
    </ScrollView>
  );
};

export const ListFans = memo(ListFansFunc);
