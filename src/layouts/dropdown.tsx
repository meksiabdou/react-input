import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef
} from 'react'

const Dropdown = forwardRef(
  (
    {
      options,
      onChange,
      value,
      placeholder,
      style,
      dir
    }: {
      dir: any
      style: any
      value: any
      placeholder: any
      options: Array<any>
      onChange: (e: any) => void
    },
    ref
  ) => {
    const [dropdown, setDropdown] = useState<boolean>(false)
    const dropdownRef = useRef<any>(null)

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as any)
      ) {
        setDropdown(false)
      }
    }

    useImperativeHandle(ref, () => {
      return dropdownRef.current
    })

    // console.log(ref);

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
      <div className='dropdown' style={{ width: '100%' }} ref={dropdownRef}>
        <button
          className='dropdown-toggle'
          type='button'
          style={{
            ...(style || {}),
            width: '100%',
            textAlign: 'initial',
            // color: '#808080',
            direction: dir || 'initial'
          }}
          onClick={() => setDropdown(!dropdown)}
        >
          {value || placeholder || ''}
        </button>
        <ul
          className='dropdown-menu'
          style={{ display: dropdown ? 'block' : 'none', marginTop: 5 }}
        >
          {Array.isArray(options)
            ? options.map((item, i) => {
                if (item.value !== undefined && item.label !== undefined) {
                  return (
                    <li
                      role='button'
                      onClick={() =>
                        onChange
                          ? onChange({
                              target: { value: item.value }
                            } as any)
                          : () => null
                      }
                      className='dropdown-item'
                      key={i.toString()}
                      value={item.value}
                    >
                      {typeof item.label === 'function'
                        ? item.label()
                        : item.label}
                    </li>
                  )
                }
                return null
              })
            : null}
        </ul>
      </div>
    )
  }
)

export default Dropdown
