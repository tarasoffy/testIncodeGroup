import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Props} from './Pagination.props';
import {styles} from './Pagination.styles';
import {Colors} from '../../styles/colors';
import {w} from '../../styles/scale';
import {Icon} from '../Icon';

const PaginationFunc: FC<Props> = ({
  currentPage,
  totalPage,
  nextPage,
  beforePage,
}) => {
  const multiplicity = 10;

  return (
    <View style={styles.wrapperPagination}>
      <Text style={styles.pageInfo}>
        {currentPage * multiplicity - multiplicity + 1}-
        {currentPage * multiplicity > totalPage
          ? totalPage
          : currentPage * multiplicity}{' '}
        of {totalPage}
      </Text>
      <TouchableOpacity
        disabled={currentPage === 1 ? true : false}
        onPress={() => beforePage()}>
        <Icon
          name="NavigateBefore"
          color={currentPage === 1 ? Colors.GREY : Colors.BLACK}
          size={w(24)}
        />
      </TouchableOpacity>
      <TouchableOpacity
        disabled={currentPage * multiplicity > totalPage ? true : false}
        onPress={() => nextPage()}>
        <Icon
          name="NavigateNext"
          color={
            currentPage * multiplicity > totalPage ? Colors.GREY : Colors.BLACK
          }
          size={w(24)}
        />
      </TouchableOpacity>
    </View>
  );
};

export const Pagination = memo(PaginationFunc);
