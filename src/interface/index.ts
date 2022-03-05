/* eslint-disable no-unused-vars */
import { ChangeEvent, CSSProperties, ReactNode } from 'react'

export interface InputProps {
  ref?: any
  placeholder?: string
  label?: string
  name: string
  type?: string
  value?: any
  defaultValue?: any
  error?: string
  className?: string
  dir?: 'rtl' | 'ltr'
  as?:
    | 'input'
    | 'textarea'
    | 'select'
    | 'dropdown'
    | 'currencyInput'
    | 'creatableSelect'
    | 'react-select'
  icon?: ReactNode
  options?: Array<{
    value: string | number
    label: string | number
  }>
  style?: CSSProperties
  htmlFor?: string
  decimalSeparator?: '.' | ','
  thousandSeparator?: '.' | ','
  precision?: number
  prefix?: string | null
  suffix?: string | null
  onChange?: (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => void
  onChangeEvent?: (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>,
    maskedvalue?: any,
    floatvalue?: any
  ) => void
  onFocus?: (e: any) => void
  isClearable?: boolean
  isMulti?: boolean
  disabled?: boolean
}
