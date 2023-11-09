import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-multiple-select-pro';

export default function App() {
  const [data, setData] = React.useState<string[] | undefined>([]);
  const DATA = [
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
      title: 'et ea vero quia',
    },
    {
      id: 12,
      title: 'in quibusdam tempore',
    },
    {
      id: 13,
      title: 'dolorum ut in',
    },
    {
      id: 14,
      title: 'voluptatem eligendi optio',
    },
    {
      id: 15,
      title: 'eveniet quod temporibus',
    },
    {
      id: 16,
      title: 'sint suscipit perspiciatis',
    },
    {
      id: 17,
      title: 'fugit voluptas sed',
    },
    {
      id: 18,
      title: 'voluptate et',
    },
    {
      id: 19,
      title: 'adipisci placeat illum',
    },
    {
      id: 20,
      title: 'doloribus ad',
    },
    {
      id: 21,
      title: 'asperiores ea ipsam',
    },
    {
      id: 22,
      title: 'dolor sint quo',
    },
    {
      id: 23,
      title: 'maxime id vitae',
    },
    {
      id: 24,
      title: 'autem hic labore',
    },
    {
      id: 25,
      title: 'rem alias distinctio',
    },
  ];

  return (
    <View style={styles.container}>
      <Dropdown
        dataSet={DATA}
        bgColor={'#00bbda'}
        height="60%"
        txtColor={'white'}
        buttonBGColor={'white'}
        buttonTxtColor={'#00bbda'}
        checkboxColor={'white'}
        setData={setData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
