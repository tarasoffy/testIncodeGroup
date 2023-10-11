import React, {FC, memo} from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import {Props} from './Search.props';
import {styles} from './Search.styles';
import {Colors} from '../../styles/colors';
import {w} from '../../styles/scale';
import {Icon} from '../Icon';

const SearchFunc: FC<Props> = ({searchText, setSearchText}) => {
  const changeText = (e: string) => {
    setSearchText(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapperSearch}>
        <View style={styles.searchAbsolute}>
          <Icon name="Search" color={Colors.BLACK} size={w(24)} />
        </View>
        <TextInput
          value={searchText}
          onChangeText={changeText}
          placeholder="Search"
          placeholderTextColor={Colors.GREY}
          style={styles.inputStyles}
        />
      </View>
    </View>
  );
};

export const Search = memo(SearchFunc);
