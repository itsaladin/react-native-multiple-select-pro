# react-native-multiple-select-pro

Select all options, single and multiple selectors. This package will provide you item search facility and delete selected facility.:v::sparkling_heart:

| ![Screenshot a](screenshots/dropdown.gif) |
| ----------------------------------------- |

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
import { Dropdown } from 'react-native-multiple-select-pro';

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
  ];

  return (
    <View style={styles.container}>
      <Dropdown
        dataSet={DATASET}
        height="60%"
        txtColor={'white'}
        bgColor={'#00bbda'}
        buttonTxtColor={'#00bbda'}
        buttonBGColor={'white'}
        checkboxColor={'white'}
        buttonName="Submit!"
        setData={setData}
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

| Prop                  | Type    | Description                               | Default        |
| --------------------- | ------- | ----------------------------------------- | -------------- |
| <b>dataSet</b>        | Array[] | dataSet you must input array data .       | `required`     |
| <b>data</b>           | Array   | you will get selected result in date prop | `not-required` |
| <b>setData</b>        | Array[] | Pass setState data in setData props       | `setState`     |
| <b>buttonName</b>     | String  | Name of button                            | `#00bbda`      |
| <b>checkboxColor</b>  | String  | Color of checkbox                         | `#00bbda`      |
| <b>txtColor</b>       | String  | color of text of body element             | `white`        |
| <b>buttonTxtColor</b> | String  | Text color of button                      | `white`        |
| <b>buttonBGColor</b>  | String  | Background color of button                | `white`        |
| <b>height</b>         | String  | accepted percentage of table height       | `"60%"`        |
| <b>bgColor</b>        | String  | Background color of table                 | `#00bbda`      |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License
