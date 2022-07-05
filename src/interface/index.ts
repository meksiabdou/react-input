/* eslint-disable no-unused-vars */
import {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes
} from 'react';
import { IntlConfig } from 'react-currency-input-field/dist/components/CurrencyInputProps';

export interface OptionProps {
  value: any;
  label: string;
}

export interface InputProps
  extends InputHTMLAttributes<'input' | 'textarea' | 'select'> {
  ref?: any;
  placeholder?: string;
  label?: string;
  name: string;
  type?: string;
  value?: any;
  defaultValue?: any;
  error?: string;
  className?: string;
  dir?: 'rtl' | 'ltr' | 'auto';
  as?:
    | 'input'
    | 'textarea'
    | 'select'
    | 'dropdown'
    | 'currencyInput'
    | 'creatableSelect'
    | 'react-select';
  icon?: () => any;
  options?: Array<{
    value: string | number;
    label: string | number;
  }>;
  style?: CSSProperties;
  htmlFor?: string;
  decimalSeparator?: '.' | ',';
  // thousandSeparator?: '.' | ',';
  precision?: number;
  prefix?: string;
  suffix?: string;
  allowDecimals?: boolean;
  allowNegativeValue?: boolean;
  decimalsLimit?: number;
  decimalScale?: number;
  fixedDecimalLength?: number;
  groupSeparator?: '.' | ',' | string;
  intlConfig?: IntlConfig;
  disableAbbreviations?: boolean;
  disableGroupSeparators?: boolean;
  isClearable?: boolean;
  isMulti?: boolean;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<any>, formatted?: any, floatvalue?: any) => void;
  onFocus?: (e: any) => any;
}
