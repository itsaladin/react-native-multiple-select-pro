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
