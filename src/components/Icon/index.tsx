import React, {FC, memo, useMemo} from 'react';
import {View} from 'react-native';
import {Props} from './Icon.props';
import {styles} from './Icon.styles';

const ExportedIcons = {
  Home: require('../../assets/icons/home.svg').default,
  Heart: require('../../assets/icons/heart.svg').default,
  HeartFill: require('../../assets/icons/heart_fill.svg').default,
  Bookmark: require('../../assets/icons/bookmark.svg').default,
  Search: require('../../assets/icons/search.svg').default,
  NavigateNext: require('../../assets/icons/navigate_next.svg').default,
  NavigateBefore: require('../../assets/icons/navigate_before.svg').default,
};

const IconFunc: FC<Props> = ({name, color, size, stroke}) => {
  const IconComponent = useMemo(() => ExportedIcons[name], [name]);

  return (
    <View style={styles.container}>
      <IconComponent fill={color} width={size} height={size} stroke={stroke} />
    </View>
  );
};

export const Icon = memo(IconFunc);
