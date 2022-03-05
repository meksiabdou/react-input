/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, {
  useState,
  useCallback,
  CSSProperties,
  ChangeEvent,
  forwardRef
} from 'react'
import CurrencyInput from 'react-currency-input-field'
import Select, { StylesConfig } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import { InputProps } from '../interface'
import Dropdown from './dropdown'
import BsEyeFill from './eye'
import BsEyeSlashFill from './eyeSlash'

const ReactInput: React.FC<InputProps> = forwardRef(
  (props: InputProps, ref: any): JSX.Element => {
    const [passwordShow, setPasswordShow] = useState<boolean>(false)
    const {
      // ref,
      placeholder,
      label,
      name,
      type,
      value,
      className,
      dir,
      defaultValue,
      error,
      onChange,
      onFocus,
      as,
      icon,
      options,
      style,
      htmlFor,
      decimalSeparator,
      thousandSeparator,
      precision,
      prefix,
      suffix,
      onChangeEvent,
      isClearable,
      isMulti,
      disabled,
      ...rest
    } = props
    const [_value, setValue] = useState(value || defaultValue)

    const styleGroup: CSSProperties = {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'stretch',
      width: '100%',
      border: '1px solid',
      borderColor: '#ced4da',
      borderRadius: '.25rem',
      padding: '2px',
      backgroundColor: '#fff',
      ...(typeof style === 'object' ? style : {})
    }

    const styleInput: CSSProperties = {
      padding: '.375rem .75rem',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#212529',
      border: 'none',
      borderRadius: '0',
      boxShadow: 'none',
      backgroundColor: 'transparent',
      outline: 'none',
      position: 'relative',
      flex: '1 1 auto',
      width: '1%',
      minWidth: 0,
      minHeight: 38,
      justifyContent: 'space-between'
    }

    const styleInputSelect: CSSProperties = {
      padding: '.375rem .75rem .375rem 0.75rem',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#212529',
      border: 'none',
      borderRadius: '0',
      boxShadow: 'none',
      transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
      appearance: 'none',
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right .75rem center',
      backgroundSize: '16px 12px',
      backgroundColor: 'transparent',
      minHeight: 38,
      width: '100%',
      outline: 'none',
      justifyContent: 'space-between'
    }

    const styleViewIcon: CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      padding: '.375rem .75rem',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#212529',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      backgroundColor: 'transparent',
      border: 'none',
      borderRadius: '0'
    }

    const errorStyle: CSSProperties = {
      display: 'block',
      width: '100%',
      marginTop: '.25rem',
      fontSize: '.875em',
      color: '#dc3545',
      marginLeft: '2px',
      marginRight: '2px'
    }

    const stylelabel: CSSProperties = {
      marginLeft: '2px',
      marginRight: '2px',
      marginBottom: '3px'
    }

    const customStyles: StylesConfig = {
      control: (provided: any) => ({
        ...provided,
        ...styleInput,
        width: '100%'
      }),
      container: () => ({
        width: '100%'
      }),
      valueContainer: (provided: any) => {
        return { ...provided, padding: 0 }
      },
      ...(style || {})
    }

    // const _ref = useRef(null);

    const Component = useCallback((inputsProps: any) => {
      const _props: any = {}
      // console.log(defaultValue);

      Object.keys(inputsProps).map((key) => {
        if (
          ![
            'onChangeEvent',
            'isClearable',
            'isMulti',
            'decimalSeparator',
            'thousandSeparator',
            'suffix',
            'prefix',
            'precision'
          ].includes(key)
        ) {
          _props[key] = (inputsProps as any)[key]
        }
        return true
      })
      switch (as) {
        case 'textarea':
          return <textarea ref={ref} {..._props} />
        case 'input':
          return <input ref={ref} {..._props} />
        case 'select':
          return (
            <select
              ref={ref}
              {..._props}
              options={null}
              className='form-select'
              style={
                {
                  ...styleInputSelect,
                  direction: _props.dir || 'initial'
                } as CSSProperties
              }
            >
              {Array.isArray(_props.options)
                ? _props.options.map((item: any, i: number) => {
                    if (item.value !== undefined && item.label !== undefined) {
                      return (
                        <option key={i.toString()} value={item.value}>
                          {item.label}
                        </option>
                      )
                    }
                    return null
                  })
                : null}
            </select>
          )
        case 'dropdown':
          return (
            <Dropdown
              options={_props.options}
              ref={ref}
              {..._props}
              style={styleInputSelect}
            />
          )
        case 'currencyInput':
          return (
            <CurrencyInput
              ref={ref}
              {..._props}
              type={undefined}
              decimalSeparator={inputsProps.decimalSeparator}
              groupSeparator={inputsProps.thousandSeparator}
              suffix={inputsProps.suffix}
              prefix={inputsProps.prefix}
              decimalScale={inputsProps.precision}
              allowNegativeValue={false}
              // fixedDecimalLength={2}
              disableAbbreviations
              onChange={undefined}
              onValueChange={(v: number) => {
                if (inputsProps.onChange) {
                  inputsProps.onChange({
                    target: { value: v, name: _props.name }
                  } as any)
                }
              }}
            />
          )
        case 'creatableSelect':
          return (
            <CreatableSelect
              ref={ref}
              {..._props}
              isDisabled={_props.disabled || false}
              styles={customStyles}
              isClearable={inputsProps.isClearable}
              isMulti={inputsProps.isMulti}
              value={Array.isArray(_props.value) ? _props.value : []}
              options={
                Array.isArray(_props.options)
                  ? _props.options
                  : _props.defaultValue
              }
              onChange={(e: any) => {
                if (inputsProps.onChange) {
                  inputsProps.onChange({
                    target: { value: e, name: _props.name }
                  } as any)
                }
              }}
            />
          )
        case 'react-select':
          return (
            <Select
              ref={ref}
              {..._props}
              isDisabled={_props.disabled || false}
              styles={customStyles}
              isMulti={inputsProps.isMulti}
              value={
                Array.isArray(_props.value) ? _props.value : _props.defaultValue
              }
              options={Array.isArray(_props.options) ? _props.options : []}
              onChange={(e: any) => {
                if (inputsProps.onChange) {
                  inputsProps.onChange({
                    target: { value: e, name: _props.name }
                  } as any)
                }
              }}
            />
          )
        default:
          return <input ref={ref} {..._props} />
      }
    }, [])

    return (
      <div className={className || 'mb-1'}>
        {label && as !== 'dropdown' ? (
          <label htmlFor={htmlFor || name} style={stylelabel}>
            {label}
          </label>
        ) : null}
        <div
          className='input-group'
          style={{ ...styleGroup, borderColor: error ? '#dc3545' : '#ced4da' }}
        >
          <Component
            // ref={ref}
            id={htmlFor || name}
            name={name}
            dir={dir || 'auto'}
            type={passwordShow ? 'text' : type || undefined}
            isMulti={isMulti}
            isClearable={isClearable}
            decimalSeparator={decimalSeparator}
            thousandSeparator={thousandSeparator}
            suffix={suffix}
            prefix={prefix}
            precision={precision}
            options={options}
            value={_value}
            // defaultValue={defaultValue}
            disabled={disabled}
            placeholder={placeholder || ''}
            label={label}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (onChange) {
                if (type === 'checkbox' || type === 'radio') {
                  if ((e?.target as any)?.checked) {
                    e.target.value = '1'
                  } else {
                    e.target.value = '0'
                  }
                }
                setValue(e.target.value)
                return onChange(e)
              }
              return null
            }}
            onFocus={onFocus}
            onChangeEvent={onChangeEvent || undefined}
            style={
              { ...styleInput, direction: dir || 'initial' } as CSSProperties
            }
            {...rest}
          />
          {icon && typeof icon === 'function' ? (
            <span style={styleViewIcon} className='input-group-text'>
              {icon()}
            </span>
          ) : null}
          {type === 'password' && (
            <span
              style={styleViewIcon}
              className='input-group-text'
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? (
                <BsEyeSlashFill size={18} color='#464646' />
              ) : (
                <BsEyeFill size={18} color='#464646' />
              )}
            </span>
          )}
          {/* as === 'select' ? <DownChevron width={18} color='#464646' /> : null */}
        </div>
        {error ? <label style={errorStyle}>{error}</label> : null}
      </div>
    )
  }
)

ReactInput.defaultProps = {
  className: undefined,
  value: undefined,
  onChange: undefined,
  onFocus: undefined,
  type: undefined,
  as: undefined,
  placeholder: '',
  label: undefined,
  defaultValue: undefined,
  error: undefined,
  dir: 'ltr',
  icon: undefined,
  options: undefined,
  style: undefined,
  htmlFor: undefined,
  decimalSeparator: undefined,
  thousandSeparator: undefined,
  precision: undefined,
  prefix: undefined,
  suffix: undefined,
  onChangeEvent: undefined,
  isClearable: false,
  isMulti: false
}

export default ReactInput
