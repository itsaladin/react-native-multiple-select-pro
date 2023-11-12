# react-native-multiple-select-pro

Select all options, single and multiple selectors. This package will provide you item search facility and delete selected facility.:v::sparkling_heart:

| ![Screenshot a](gif/MultiSelector.gif) |
| -------------------------------------- |

## Installation

Using Yarn:

```sh
yarn add react-native-multiple-select-pro
```

```sh
npm install react-native-multiple-select-pro
```

## Usage

```js
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
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
      {/* you could get all selected data in data state*/}
      {console.log(data)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
});
```

## Properties

| Prop                      | Type    | Description                                 | Default             |
| ------------------------- | ------- | ------------------------------------------- | ------------------- |
| <b>dataSet</b>            | Array[] | dataSet you must input array data .         | `required`          |
| <b>title</b>              | String  | Label or title                              | `Search here`       |
| <b>data</b>               | Array   | you will get selected result in date prop   | `not-required`      |
| <b>setData</b>            | Array[] | Pass setState data in setData props         | `required callback` |
| <b>buttonName</b>         | String  | Name of button                              | `#00bbda`           |
| <b>checkboxColor</b>      | String  | Color of checkbox                           | `#00bbda`           |
| <b>txtColor</b>           | String  | color of text of body element               | `white`             |
| <b>buttonTxtColor</b>     | String  | Text color of button                        | `white`             |
| <b>buttonBGColor</b>      | String  | Background color of button                  | `white`             |
| <b>height</b>             | String  | accepted percentage of table height         | `"60%"`             |
| <b>bgColor</b>            | String  | Background color of body element            | `#00bbda`           |
| <b>hideButtonBGColor</b>  | String  | Hide button background color                | `#00bbda`           |
| <b>hideButtonTxtColor</b> | String  | hide Button text Color                      | `#white`            |
| <b>inputBoxHeight</b>     | number  | Height of InputBox                          | `35`                |
| <b>containerHeight</b>    | string  | Height of container accepte only percentage | `60%`               |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License
