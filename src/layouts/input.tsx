import React, {
  useState,
  useCallback,
  CSSProperties,
  ChangeEvent,
  forwardRef,
  useEffect,
  isValidElement,
} from 'react';
import CurrencyInput from 'react-currency-input-field';
import Select, { StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { InputProps } from '../interface';
import {
  errorStyle,
  styleGroup,
  styleInput,
  styleInputSelect,
  stylelabel,
  styleViewIcon,
} from '../styles';
import Dropdown from './dropdown';
import BsEyeFill from './eye';
import BsEyeSlashFill from './eyeSlash';

const ReactInput: React.FC<InputProps> = forwardRef(
  (IProps: InputProps, ref: any): JSX.Element => {
    const [passwordShow, setPasswordShow] = useState<boolean>(false);
    const {
      label,
      name,
      type,
      value: userValue,
      className,
      dir,
      defaultValue,
      defaultChecked,
      checked: userChecked,
      error,
      onChange,
      onFocus,
      as,
      icon,
      // options,
      style,
      htmlFor,
      children,
      inputGroupStyle,
      reactSelectStyle,
      ...rest
    } = IProps;

    const stringToBoolean = (str: any) => {
      if (['true', 'false'].includes(str.toString())) {
        return str.toString() === 'true';
      }
      return !!str;
    };

    const [value, setValue] = useState(defaultValue || defaultChecked || '');

    useEffect(() => {
      if (userValue !== undefined && userValue !== null) {
        if (type !== 'checkbox' && type !== 'radio') {
          setValue(userValue);
        }
      }
    }, [userValue]);

    useEffect(() => {
      if (userChecked !== undefined && userChecked !== null) {
        if (type === 'checkbox' || type === 'radio') {
          setValue(userChecked);
        }
      }
    }, [userChecked]);

    const customStyles: StylesConfig = {
      control: (provided: any) => ({
        ...provided,
        ...styleInput,
        width: '100%',
      }),
      container: () => ({
        width: '100%',
      }),
      valueContainer: (provided: any) => {
        return { ...provided, padding: 0 };
      },
      ...(reactSelectStyle || {}),
    };

    const Component = useCallback((props: InputProps) => {
      const {
        isMulti,
        suffix,
        prefix,
        precision,
        label: _,
        //thousandSeparator,
        decimalSeparator,
        decimalScale,
        isClearable,
        options,
        allowNegativeValue,
        fixedDecimalLength,
        disableGroupSeparators,
        disableAbbreviations,
        intlConfig,
        groupSeparator,
        allowDecimals,
        onChange: _onChange,
        ..._rest
      } = props;

      const selectStyle = {
        ...styleInputSelect,
        backgroundPosition: `${
          _rest.dir === 'rtl' ? 'left' : 'right'
        } .75rem center`,
      };

      switch (as) {
        case 'textarea':
          return (
            <textarea ref={ref} {...(_rest as any)} onChange={_onChange} />
          );
        case 'input':
          return <input ref={ref} {...(_rest as any)} onChange={_onChange} />;
        case 'select':
          return (
            <select
              ref={ref}
              {...(_rest as any)}
              onChange={_onChange}
              className="form-select"
              style={
                {
                  ...selectStyle,
                  direction: _rest.dir || 'initial',
                } as CSSProperties
              }
            >
              {Array.isArray(options)
                ? options.map((item: any, i: number) => {
                    if (item.value !== undefined && item.label !== undefined) {
                      return (
                        <option key={i.toString()} value={item.value}>
                          {item.label}
                        </option>
                      );
                    }
                    return null;
                  })
                : null}
            </select>
          );
        case 'dropdown':
          return (
            <Dropdown
              options={options}
              ref={ref}
              {...(_rest as any)}
              style={selectStyle}
              onChange={e => {
                if (_onChange) {
                  _onChange({
                    target: { value: e, name: _rest.name },
                  } as any);
                }
              }}
            >
              {children}
            </Dropdown>
          );
        case 'currencyInput':
          return (
            <CurrencyInput
              ref={ref}
              {...(_rest as any)}
              type={undefined}
              decimalSeparator={decimalSeparator}
              //thousandSeparator={thousandSeparator}
              suffix={suffix}
              prefix={prefix}
              decimalScale={decimalScale}
              precision={precision}
              allowNegativeValue={allowNegativeValue}
              fixedDecimalLength={fixedDecimalLength}
              disableGroupSeparators={disableGroupSeparators}
              disableAbbreviations={disableAbbreviations}
              intlConfig={intlConfig}
              groupSeparator={groupSeparator}
              allowDecimals={allowDecimals}
              onValueChange={(v: string, _, values) => {
                if (_onChange) {
                  _onChange(
                    {
                      target: { value: v, name: _rest.name },
                    } as any,
                    values?.formatted,
                    values?.float
                  );
                }
              }}
            />
          );
        case 'creatableSelect':
          return (
            <CreatableSelect
              ref={ref}
              {...(_rest as any)}
              type={undefined}
              isDisabled={_rest.disabled || false}
              isRtl={_rest.dir === 'rtl'}
              styles={customStyles}
              isClearable={isClearable}
              isMulti={isMulti}
              value={Array.isArray(_rest.value) ? _rest.value : []}
              options={Array.isArray(options) ? options : _rest.defaultValue}
              onChange={(e: any) => {
                if (_onChange) {
                  _onChange({
                    target: { value: e, name: _rest.name },
                  } as any);
                }
              }}
            />
          );
        case 'react-select':
          return (
            <Select
              ref={ref}
              {...(_rest as any)}
              type={undefined}
              isDisabled={_rest.disabled || false}
              isRtl={_rest.dir === 'rtl'}
              styles={customStyles}
              isMulti={isMulti}
              value={Array.isArray(_rest.value) ? _rest.value : []}
              options={Array.isArray(options) ? options : _rest.defaultValue}
              onChange={(e: any) => {
                if (_onChange) {
                  _onChange({
                    target: { value: e, name: _rest.name },
                  } as any);
                }
              }}
            />
          );
        default:
          return <input ref={ref} {...(_rest as any)} onChange={_onChange} />;
      }
    }, []);

    return (
      <div className={className}>
        {isValidElement(label) ? (
          label
        ) : (
          <label htmlFor={htmlFor || name} style={stylelabel}>
            {label}
          </label>
        )}
        <div
          //className="input-group"
          style={{
            border: error ? '1px solid #dc3545' : '1px solid #ced4da',
            ...(typeof inputGroupStyle === 'function' ? inputGroupStyle(styleGroup) : styleGroup)
            //...(typeof style === 'object' ? style : styleGroup),
          }}
        >
          <Component
            id={htmlFor || name}
            name={name}
            dir={dir || 'auto'}
            type={passwordShow ? 'text' : type || undefined}
            value={value}
            checked={
              type === 'checkbox' || type === 'radio'
                ? stringToBoolean(value)
                : undefined
            }
            //label={label}
            onChange={(e: ChangeEvent<HTMLInputElement>, ...params) => {
              if (onChange && typeof onChange === 'function') {
                if (type === 'checkbox' || type === 'radio') {
                  if ((e?.target as any)?.checked) {
                    e.target.value = 'true';
                  } else {
                    e.target.value = 'false';
                  }
                }
                setValue(e.target.value);
                return onChange(e, ...params);
              }
              return null;
            }}
            onFocus={onFocus}
            style={
              { ...styleInput, direction: dir || 'initial', ...style } as CSSProperties
            }
            {...rest}
          />
          {isValidElement(icon) ? (
            <span style={styleViewIcon} className="input-group-text">
              {icon}
            </span>
          ) : null}
          {type === 'password' && (
            <span
              style={styleViewIcon}
              className="input-group-text"
              onClick={() => setPasswordShow(!passwordShow)}
            >
              {passwordShow ? (
                <BsEyeSlashFill size={18} color="#464646" />
              ) : (
                <BsEyeFill size={18} color="#464646" />
              )}
            </span>
          )}
        </div>
        {error ? <label style={errorStyle}>{error}</label> : null}
      </div>
    );
  }
);

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
  //thousandSeparator: undefined,
  precision: undefined,
  prefix: undefined,
  suffix: undefined,
  isClearable: false,
  isMulti: false,
};

export default ReactInput;
