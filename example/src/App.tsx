import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { MultiSelector } from 'react-native-multiple-select-pro';

export default function App() {
  const [data, setData] = React.useState([]);

  const DATASET = [
    {
      id: 1,
      title: 'sunt aut facere ',
    },
    {
      id: 2,
      title: 'qui est esse',
    },
    {
      id: 3,
      title: 'ea molestias quasi',
    },
    {
      id: 4,
      title: 'eum et est occaecati',
    },
    {
      id: 5,
      title: 'nesciunt quas odio',
    },
    {
      id: 6,
      title: 'dolorem eum magni',
    },
    {
      id: 7,
      title: 'magnam facilis autem',
    },
    {
      id: 8,
      title: 'dolorem dolore est ipsam',
    },
    {
      id: 9,
      title: 'nesciunt iure omnis',
    },
    {
      id: 10,
      title: 'optio molestias',
    },
    {
      id: 11,
      title: 'sunt aut facere ',
    },
    {
      id: 12,
      title: 'qui est esse',
    },
    {
      id: 13,
      title: 'ea molestias quasi',
    },
    {
      id: 14,
      title: 'eum et est occaecati',
    },
    {
      id: 15,
      title: 'nesciunt quas odio',
    },
    {
      id: 16,
      title: 'dolorem eum magni',
    },
    {
      id: 17,
      title: 'magnam facilis autem',
    },
    {
      id: 18,
      title: 'dolorem dolore est ipsam',
    },
    {
      id: 19,
      title: 'nesciunt iure omnis',
    },
    {
      id: 20,
      title: 'optio molestias',
    },
    {
      id: 21,
      title: 'sunt aut facere ',
    },
    {
      id: 22,
      title: 'qui est esse',
    },
    {
      id: 23,
      title: 'ea molestias quasi',
    },
    {
      id: 24,
      title: 'eum et est occaecati',
    },
    {
      id: 25,
      title: 'nesciunt quas odio',
    },
    {
      id: 26,
      title: 'dolorem eum magni',
    },
    {
      id: 27,
      title: 'magnam facilis autem',
    },
    {
      id: 28,
      title: 'dolorem dolore est ipsam',
    },
    {
      id: 29,
      title: 'nesciunt iure omnis',
    },
    {
      id: 30,
      title: 'optio molestias',
    },
    {
      id: 31,
      title: 'sunt aut facere ',
    },
    {
      id: 32,
      title: 'qui est esse',
    },
    {
      id: 33,
      title: 'ea molestias quasi',
    },
    {
      id: 34,
      title: 'eum et est occaecati',
    },
    {
      id: 35,
      title: 'nesciunt quas odio',
    },
    {
      id: 36,
      title: 'dolorem eum magni',
    },
    {
      id: 37,
      title: 'magnam facilis autem',
    },
    {
      id: 38,
      title: 'dolorem dolore est ipsam',
    },
    {
      id: 39,
      title: 'nesciunt iure omnis',
    },
    {
      id: 30,
      title: 'optio molestias',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <MultiSelector
        title="User Name"
        dataSet={DATASET}
        containerHeight="60%"
        txtColor={'white'}
        bgColor={'#00bbda'}
        buttonTxtColor={'white'}
        buttonBGColor={'#00bbda'}
        checkboxColor={'white'}
        buttonName="Submit!"
        setData={setData}
        hideButtonBGColor={'#00bbda'}
        hideButtonTxtColor={'white'}
        inputBoxHeight={35}
      />
      {/* you could get all selected data in data state */}
      {console.log(data)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
