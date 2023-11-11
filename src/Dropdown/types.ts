import type { ViewProps } from 'react-native';

export interface DropdownProps extends ViewProps {
  bgColor?: string;
  height?: any;
  buttonBGColor?: string;
  buttonTxtColor?: string;
  txtColor?: string;
  checkboxColor?: string;
  dataSet: any;
  // onDonePress?: (event: GestureResponderEvent) => void;
  data?: any;
  setData?: any;
  buttonName: string;
}
