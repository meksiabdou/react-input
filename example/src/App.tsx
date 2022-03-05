import React, { ChangeEvent, useEffect, useRef } from 'react'
import { useState } from 'react'
import ReactInput, { InputProps } from 'react-input'

const App = () => {
  const [data, setData] = useState<any>({
    password: undefined,
    email: undefined,
    role: undefined,
    colors: undefined
  })

  const inputs: Array<InputProps> = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      defaultValue: 'test@email.com',
      onChange: (e: ChangeEvent<any>) => {
        setData({
          ...data,
          email: e.target.value
        })
      }
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'password',
      onChange: (e: ChangeEvent<any>) => {
        setData({
          ...data,
          password: e.target.value
        })
      }
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
      onChange: (e: ChangeEvent<any>) => {
        setData({
          ...data,
          role: e.target.value
        })
      }
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
      onChange: (e: ChangeEvent<any>) => {
        // console.log(e.target.value);
        setData({
          ...data,
          colors: e.target.value
        })
      }
    }
  ]

  const inputsRef = useRef<Array<any>>([])

  useEffect(() => {
    console.log(inputsRef.current)
  }, [inputsRef])

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
        )
      })}

      <div className='mb-1'>
        <p>Email : {data.email || ''}</p>
        <p>Password : {data.password || ''}</p>
        <p>Role : {data.role || ''}</p>
        <p>
          Colors :{' '}
          {(data.colors as Array<any>)?.map((item) => item.value)?.join(', ')}
        </p>
      </div>
    </div>
  )
}

export default App
