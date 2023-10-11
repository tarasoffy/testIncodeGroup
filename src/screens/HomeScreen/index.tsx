import React, {FC, memo, useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {Item, Props} from './HomeScreen.props';
import {Card} from '../../components/Card';
import {styles} from './HomeScreen.styles';
import {Header} from '../../components/Header';
import {Pagination} from '../../components/Pagination';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {Search} from '../../components/Search';

const HomeScreenFunc: FC<Props> = ({}) => {
  const favourite = useSelector(
    (state: RootState) => state.favourite.favourite,
  );

  const [data, setData] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [serachData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState('');
  console.log(searchText);

  const getData = async () => {
    const response = await fetch(
      `https://swapi.dev/api/people/?page=${currentPage}`,
    );
    const data = await response.json();
    setTotalPage(data.count);
    setData(data.results);
  };

  useEffect(() => {
    getData();
  }, [currentPage]);

  useEffect(() => {
    if (data) {
      const searchResult = data.filter(item =>
        item.name
          .toLowerCase()
          .trim()
          .includes(searchText.toLowerCase().trim()),
      );
      setSearchData(searchResult);
    }
  }, [searchText]);

  const renderItem = ({item}: Item) => {
    let favouriteCard = false;
    if (favourite.length && data) {
      favourite.forEach(itemFavourite =>
        itemFavourite.name === item.name ? (favouriteCard = true) : null,
      );
    }
    return <Card key={item.name} data={item} favouriteCard={favouriteCard} />;
  };

  const nextPage = () => {
    setData(null);
    const limitation = Math.ceil(totalPage / 10);
    if (currentPage < limitation) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const beforePage = () => {
    setData(null);
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <Search searchText={searchText} setSearchText={setSearchText} />
      <View
        style={[
          styles.container,
          {justifyContent: data ? 'flex-start' : 'center'},
        ]}>
        {data ? (
          <FlatList
            data={searchText.length ? serachData : data}
            renderItem={renderItem}
          />
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        nextPage={nextPage}
        beforePage={beforePage}
      />
    </SafeAreaView>
  );
};

export const HomeScreen = memo(HomeScreenFunc);
