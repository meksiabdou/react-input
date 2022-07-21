# @meksiabdou/react-input

![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![NextJs](	https://img.shields.io/badge/next.js-000000?style=flat&logo=nextdotjs&logoColor=white)&nbsp;


![bundlephobia](https://badgen.net/bundlephobia/minzip/@meksiabdou/react-input)
![npm](https://badgen.net/npm/v/@meksiabdou/react-input)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![license](https://badgen.net/github/license/meksiabdou/react-input)

> React Input


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
| ref | false | String | undefined |
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
| style | false | String | undefined |
| htmlFor | false | CSSProperties | undefined |
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
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import ReactInput, { InputProps } from '@meksiabdou/react-input';

const App = () => {

  const [data, setData] = useState<any>({
    password: undefined,
    email: undefined,
    role: undefined,
    colors: [{ value: 'Blue', label: 'Blue' }]
  });

    const onChange = ({ target }: any) => {
    const { name, value } = target;
    setData((preData : any) => {
      return (
        {
          ...preData,
          [name]: value
        }
      )
    });
  };

  const onClick = (e: any) => {
    console.log(e);
  }

  const inputs: Array<InputProps> = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      defaultValue: 'test@email.com',
      onChange: onChange,
      onClick: onClick,
    },
    {
      name: 'amount',
      // type: 'text',
      placeholder: 'Amount',
      defaultValue: 1000,
      as: 'currencyInput',
      decimalSeparator: '.',
      onChange: onChange,
      onClick: onClick,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
      onChange: onChange,
      onClick: onClick,
    },
    {
      name: 'role',
      as: 'dropdown',
      placeholder: 'Select role',
      options: [
        {
          value: '',
          label: 'Select....'
        },
        {
          value: 'Admin',
          label: 'Admin'
        },
        {
          value: 'Manger',
          label: 'Manger'
        }
      ],
      onChange: onChange,
    },
    {
      name: 'colors',
      as: 'react-select',
      placeholder: 'Select color',
      defaultValue: [{ value: 'Blue', label: 'Blue' }],
      isMulti: true,
      options: [
        {
          value: 'Read',
          label: 'Read'
        },
        {
          value: 'Blue',
          label: 'Blue'
        },
        {
          value: 'Black',
          label: 'Black'
        }
      ],
      onChange: onChange,
    }
  ];

  const inputsRef = useRef<Array<any>>([]);

  useEffect(() => {
    console.log(inputsRef.current);
  }, [inputsRef]);

  return (
    <div
      style={{
        marginTop: 50,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      {inputs.map((input, index) => {
        return (
          <div key={input.name} style={{ width: 300 }}>
            <ReactInput
              ref={(ref: any) => (inputsRef.current[index] = ref)}
              {...(input as any)}
              value={data[input.name]}
            />
          </div>
        );
      })}
      <div className='mb-1'>
        <p>Email : {data.email || ''}</p>
        <p>Amount : {data.amount || ''}</p>
        <p>Password : {data.password || ''}</p>
        <p>Role : {data.role || ''}</p>
        <p>
          Colors :{' '}
          {(data.colors as Array<any>)?.map((item) => item.value)?.join(', ')}
        </p>
      </div>
    </div>
  );
};
```

## License

MIT © [meksiabdou](https://github.com/meksiabdou)


