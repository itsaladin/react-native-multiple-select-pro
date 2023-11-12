import type { ViewProps } from 'react-native';

export interface MultiSelectorProps extends ViewProps {
  title?: string;
  inputBoxHeight?: number;
  containerHeight?: any;
  bgColor?: string;
  buttonBGColor?: string;
  buttonTxtColor?: string;
  txtColor?: string;
  checkboxColor?: string;
  dataSet: any;
  data?: any;
  setData?: any;
  buttonName?: string;
  hideButtonBGColor?: string;
  hideButtonTxtColor?: string;
}
