import React, {FC, memo} from 'react';
import {View, Text} from 'react-native';
import {Props} from './Header.props';
import {styles} from './Header.styles';

const HeaderFunc: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.textHeader}>Fans</Text>
      </View>
    </View>
  );
};

export const Header = memo(HeaderFunc);
