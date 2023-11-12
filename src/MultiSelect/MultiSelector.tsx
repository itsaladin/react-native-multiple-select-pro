import React, { useCallback, useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { type MultiSelectorProps } from './types';

const COLORS = {
  primary: '#00bbda',
  white: '#FFFFFF',
  black: '#000000',
  borderColor: '#C8C8C8',
  textColor: '#7F7F7F',
};

const MultiSelector = ({
  title,
  bgColor,
  containerHeight,
  buttonBGColor,
  buttonTxtColor,
  txtColor,
  checkboxColor,
  dataSet,
  setData,
  buttonName,
  hideButtonBGColor,
  hideButtonTxtColor,
  inputBoxHeight,
}: MultiSelectorProps) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [checkedItems, setCheckedItems] = useState<any>([]);
  const [, setState] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);
  const [isSelect, setIsSelect] = useState(false);
  const [selectedItems, setselectedItems] = useState<any>([]);
  const [isHide, setIsHide] = useState(true);

  useEffect(() => {
    setFilteredDataSource(dataSet);
    setMasterDataSource(dataSet);
  }, []);

  const __title = title || 'Search here';
  const __bgColor = bgColor || COLORS.primary;
  const __maxHeight = containerHeight || '60%';
  const __buttonBGColor = buttonBGColor || COLORS.white;
  const __buttonTxtColor = buttonTxtColor || COLORS.primary;
  const __txtColor = txtColor || COLORS.white;
  const __checkboxColor = checkboxColor || COLORS.white;
  const __buttonName = buttonName || 'Submit';
  const __hideButtonTxtColor = hideButtonTxtColor || COLORS.white;
  const __hideButtonBGColor = hideButtonBGColor || COLORS.primary;
  const __inputBoxHeight = inputBoxHeight || 35;

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = masterDataSource.filter(function (item: any) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const findNumberInArray = useCallback(
    (numbers: any, targetNumber: any) => {
      const foundNumbers = numbers.filter(function (item: any) {
        return item === targetNumber;
      });
      if (foundNumbers.length > 0) {
        return foundNumbers;
      } else {
        return null;
      }
    },
    [checkedItems]
  );

  const getItemPressHandler = useCallback(
    (item: any) => {
      let isChecked = findNumberInArray(checkedItems, item?.id);
      if (isChecked === null) {
        checkedItems.push(item.id);
        setState((prev) => !prev);
        const uniqueSortArr = removeDuplicatesAndSort(checkedItems);
        var filteredArray = dataSet?.filter(function (itm: any) {
          return uniqueSortArr.indexOf(itm.id) > -1;
        });
        setData(filteredArray);
        setselectedItems(filteredArray);
      } else {
        let removeItem = checkedItems.filter((item: any) => item != isChecked);
        setCheckedItems(removeItem);
        const uniqueSortArr = removeDuplicatesAndSort(removeItem);
        var filteredArray = dataSet?.filter(function (itm: any) {
          return uniqueSortArr.indexOf(itm.id) > -1;
        });
        setData(filteredArray);
        setselectedItems(filteredArray);
        setState((prev) => !prev);
      }
    },
    [checkedItems]
  );

  const selectAllHandler = useCallback(() => {
    if (!checkedAll) {
      setCheckedItems([]);
      masterDataSource?.map((item: any) => {
        checkedItems.push(item.id);
      });
      setCheckedItems(Array.from(new Set(checkedItems)));
      setCheckedAll(true);

      const uniqueSortArr = removeDuplicatesAndSort(checkedItems);
      var filteredArray = dataSet?.filter(function (itm: any) {
        return uniqueSortArr.indexOf(itm.id) > -1;
      });
      setData(filteredArray);
      setselectedItems(filteredArray);
    }
    if (checkedAll) {
      setCheckedItems([]);
      setCheckedAll(false);
      setData([]);
      setselectedItems([]);
    }
    setState((prev) => !prev);
  }, [checkedItems, masterDataSource]);

  function removeDuplicatesAndSort(arr: any) {
    const uniqueSet = new Set(arr);
    const uniqueArray = Array.from(uniqueSet).sort((a: any, b: any) => a - b);
    return uniqueArray;
  }

  const ItemView = ({ item }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 5,
          backgroundColor: __bgColor,
        }}
        onPress={() => getItemPressHandler(item)}
      >
        {findNumberInArray(checkedItems, item?.id) !== null && (
          <Icon name="checkbox-outline" size={20} color={__checkboxColor} />
        )}
        {findNumberInArray(checkedItems, item?.id) === null && (
          <Icon
            name="checkbox-blank-outline"
            size={20}
            color={__checkboxColor}
          />
        )}
        <Text style={[styles.itemStyle, { color: __txtColor }]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: COLORS.borderColor,
        }}
      />
    );
  };

  return (
    <View
      style={{
        borderRadius: 5,
        maxHeight: __maxHeight,
        backgroundColor: 'white',
      }}
    >
      {isSelect ? (
        <TextInput
          style={[styles.firstInput, { height: __inputBoxHeight }]}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          textAlignVertical="auto"
          placeholder={
            checkedItems?.length > 0
              ? `${__title} (` + checkedItems?.length + ' item selected)'
              : __title
          }
        />
      ) : (
        <TouchableOpacity
          onPress={() => {
            setIsSelect(true);
          }}
          activeOpacity={0.8}
          style={styles.secondInputContainer}
        >
          <TextInput
            style={[styles.secondInput, { height: __inputBoxHeight }]}
            textAlignVertical="auto"
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder={
              checkedItems?.length > 0
                ? `${__title} (` + checkedItems?.length + ' item selected)'
                : __title + ' Search Here'
            }
            editable={false}
            selectTextOnFocus={false}
          />
          <Icon name="arrow-down" style={styles.icon} size={18} />
        </TouchableOpacity>
      )}
      {!isSelect && !isHide && (
        <View style={{ backgroundColor: 'white', marginTop: 5 }}>
          <View
            style={{
              flexWrap: 'wrap',
              flexGrow: 1,
              flexDirection: 'row',
              height: 'auto',
            }}
          >
            {selectedItems?.map((item: any, index: number) => {
              return (
                <View
                  key={index}
                  style={{
                    padding: 2,
                    borderColor: 'gray',
                    borderWidth: 1,
                    borderRadius: 20,
                    flexDirection: 'row',
                    marginVertical: 2,
                    marginLeft: 5,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.textColor,
                      paddingLeft: 5,
                      fontSize: 13,
                    }}
                  >
                    {item?.title}
                  </Text>
                  <EntypoIcon
                    name={'cross'}
                    size={20}
                    color={'red'}
                    onPress={() => {
                      getItemPressHandler(item);
                    }}
                  />
                </View>
              );
            })}
          </View>
          <TouchableOpacity
            onPress={() => {
              setIsHide(true);
            }}
            style={{
              backgroundColor: __hideButtonBGColor,
              borderRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
              width: '16%',
              padding: 6,
              alignSelf: 'center',
              justifyContent: 'center',
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                color: __hideButtonTxtColor,
              }}
            >
              Hide !
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {isSelect && (
        <View
          style={{
            borderRadius: 5,
            elevation: 4,
            backgroundColor: 'white',
          }}
        >
          <FlatList
            data={filteredDataSource}
            keyExtractor={(_item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            initialNumToRender={15}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingVertical: 5,
            }}
          >
            {search?.length === 0 && (
              <TouchableOpacity
                onPress={() => {
                  selectAllHandler();
                }}
                style={{
                  backgroundColor: __buttonBGColor,
                  borderRadius: 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 4,
                  paddingRight: 8,
                }}
              >
                <Icon
                  name={
                    !checkedAll ? 'checkbox-blank-outline' : 'checkbox-outline'
                  }
                  size={20}
                  color={__buttonTxtColor}
                />
                <Text style={{ color: __buttonTxtColor }}>Select All</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                setIsSelect(false);
                setIsHide(false);
              }}
              style={{
                backgroundColor: __buttonBGColor,
                padding: 5,
                borderRadius: 2,
              }}
            >
              <Text style={{ color: __buttonTxtColor }}>{__buttonName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default MultiSelector;

const styles = StyleSheet.create({
  secondInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
  },
  secondInput: {
    paddingLeft: 10,
    padding: 0,
  },
  icon: {
    paddingRight: 5,
  },
  itemStyle: {
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 20,
    fontSize: 14,
    fontWeight: 'normal',
  },
  firstInput: {
    borderWidth: 1,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    padding: 0,
  },
  container: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  textColorWhite: {
    color: COLORS.white,
  },
  timeStyle: {
    height: 30,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderColor: COLORS.black,
    width: '38%',
  },
  selectedDateStyle: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    height: 30,
    width: '38%',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  empCode: {
    flexDirection: 'row',
    height: 30,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: COLORS.black,
    width: '85%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
});
