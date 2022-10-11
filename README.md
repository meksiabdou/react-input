# @meksiabdou/react-input

![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![NextJs](	https://img.shields.io/badge/next.js-000000?style=flat&logo=nextdotjs&logoColor=white)&nbsp;


![bundlephobia](https://badgen.net/bundlephobia/minzip/@meksiabdou/react-input)
![npm](https://badgen.net/npm/v/@meksiabdou/react-input)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![license](https://badgen.net/github/license/meksiabdou/react-input)

> html input for reactjs


## Install

```cmd
yarn add @meksiabdou/react-input
```

```cmd
npm install @meksiabdou/react-input
```

### Parameters

| Name | Required | Type | Default Value |
|:------:|:------:|:------:|:---------------:|
| ref | false | any | undefined |
| name | true | String | none |
| placeholder | false | String | undefined |
| label | false | String | undefined |
| type | false | String | undefined |
| value | false | String | undefined |
| defaultValue | false | String | undefined |
| error | false | String | undefined |
| className | false | String | undefined |
| dir | false | rtl , ltr , auto | undefined |
| as | false | 'input' , 'textarea' ,'select' ,'dropdown' ,'currencyInput' ,'creatableSelect', 'react-select' | input |
| icon | false | ReactNode | undefined |
| options | false | Array | undefined |
| style | false | CSSProperties | undefined |
| inputGroupStyle | false | function | undefined |
| reactSelectStyle | false | StylesConfig | undefined |
| htmlFor | false | String | undefined |
| precision | false | number | undefined |
| prefix | false | String | undefined |
| suffix | false | String | undefined |
| allowDecimals | false | boolean | undefined |
| allowNegativeValue | false | boolean | undefined |
| decimalsLimit | false | number | undefined |
| decimalScale | false | number | undefined |
| fixedDecimalLength | false | number | undefined |
| groupSeparator | false | String | undefined |
| intlConfig | false | IntlConfig (https://mzl.la/3xEpJoQ) | undefined |
| disableAbbreviations | false | boolean | undefined |
| disableGroupSeparators | false | boolean | undefined |
| isClearable | false | boolean | undefined |
| isMulti | false | boolean | undefined |
| disabled | false | boolean | undefined |
| onChange | false | function | undefined |
| onFocus | false | function | undefined |


## Usage

```tsx
import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import ReactInput, { InputProps } from '../.';

const App = () => {
  const [data, setData] = useState<any>({
    password: undefined,
    email: undefined,
    role: undefined,
    country: undefined,
    colors: undefined,
    confirm: undefined,
  });

  const [direction, setDirection] = useState('ltr');

  const stringToBoolean = (str: string) => {
    if (['true', 'false'].includes(str?.toString())) {
      return str.toString() === 'true';
    }
    return undefined;
  };

  const onChange = ({ target }: any) => {
    const { name, value } = target;
    setData((preData: any) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const onClick = (e: any) => {
    console.log(e);
  };

  const [inputs, setInput] = useState<Array<InputProps>>([]);

  const inputsRef = useRef<Array<any>>([]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setInput([
        {
          name: 'email',
          type: 'email',
          label: <h4>Email</h4>,
          placeholder: 'Email',
          defaultValue: 'test@email.com',
          inputGroupStyle: (style) => {
            return {};
          },
          onChange: onChange,
          onClick: onClick,
        },
        {
          name: 'amount',
          // type: 'text',
          placeholder: 'Amount',
          label: <h4>Amount</h4>,
          defaultValue: 15000,
          as: 'currencyInput',
          decimalSeparator: '.',
          onChange: onChange,
          onClick: onClick,
        },
        {
          name: 'password',
          type: 'password',
          placeholder: 'password',
          label: <h4>Password</h4>,
          onChange: onChange,
          onClick: onClick,
        },
        {
          name: 'confirm',
          type: 'checkbox',
          label: <h4>Confirm</h4>,
          defaultChecked: false,
          style: {
            height: 30,
            width: 30,
          },
          onChange: onChange,
        },
        {
          name: 'active',
          type: 'radio',
          label: <h4>Active</h4>,
          defaultChecked: true,
          style: {
            height: 30,
            width: 30,
          },
          onChange: onChange,
        },
        {
          name: 'role',
          as: 'select',
          label: <h4>Roles</h4>,
          placeholder: 'Select role',
          defaultValue: 'Admin',
          //dir: 'rtl',
          options: [
            {
              value: '',
              label: 'Select....',
            },
            {
              value: 'Admin',
              label: 'Admin',
            },
            {
              value: 'Manger',
              label: 'Manger',
            },
          ],
          onChange: onChange,
        },
        {
          name: 'direction',
          as: 'dropdown',
          label: <h4>Direction</h4>,
          placeholder: 'Select direction',
          children: (
            <div>
              {[{ value: 'rtl' }, { value: 'ltr' }].map(item => (
                <p
                  style={{ cursor: 'pointer' }}
                  onClick={() => setDirection(item.value)}
                  key={item.value}
                >
                  {item.value}
                </p>
              ))}
            </div>
          ),
        },
        {
          name: 'country',
          as: 'dropdown',
          label: <h4>Countries</h4>,
          placeholder: 'Select country',
          options: [
            {
              value: '',
              label: 'Select....',
            },
            {
              value: 'algeria',
              label: 'Algeria',
            },
            {
              value: 'Tunisia',
              label: 'tunisia',
            },
          ],
          onChange: onChange,
        },
        {
          name: 'colors',
          as: 'react-select',
          label: <h4>Colors</h4>,
          placeholder: 'Select color',
          defaultValue: [{ value: 'Blue', label: 'Blue' }],
          isMulti: true,
          options: [
            {
              value: 'Read',
              label: 'Read',
            },
            {
              value: 'Blue',
              label: 'Blue',
            },
            {
              value: 'Black',
              label: 'Black',
            },
          ],
          onChange: onChange,
        },
      ]);
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        marginTop: 50,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {inputs.map((input, index) => {
        return (
          <div key={index.toString()} style={{ width: 300 }}>
            <ReactInput
              ref={(ref: any) => (inputsRef.current[index] = ref)}
              {...(input as any)}
              dir={direction}
              value={data[input.name]}
              checked={stringToBoolean(data[input.name])}
            />
          </div>
        );
      })}

      <div className="mb-1">
        <p>Email : {data.email || ''}</p>
        <p>Amount : {data.amount || ''}</p>
        <p>Password : {data.password || ''}</p>
        <p>Country : {data.country || ''}</p>
        <p>Role : {data.role || ''}</p>
        <p>
          Colors :{' '}
          {(data.colors as Array<any>)?.map(item => item.value)?.join(', ')}
        </p>
      </div>
    </div>
  );
};
```

## License

MIT © [meksiabdou](https://github.com/meksiabdou)


