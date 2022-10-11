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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default App;
