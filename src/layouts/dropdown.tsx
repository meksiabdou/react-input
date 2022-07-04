import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  forwardRef
} from 'react';
import { OptionProps } from '../interface';

const Dropdown = forwardRef(
  (
    {
      options,
      onChange,
      value,
      placeholder,
      style,
      dir,
      children
    }: {
      dir: 'ltr' | 'rtl';
      style: CSSStyleSheet;
      value: any;
      placeholder: string;
      options: Array<OptionProps>;
      onChange?: (e: any) => void;
      children?: any;
    },
    ref
  ) => {
    const [dropdown, setDropdown] = useState<boolean>(false);
    const dropdownRef = useRef<any>(null);

    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as any)
      ) {
        setDropdown(false);
      }
    };

    useImperativeHandle(ref, () => {
      return dropdownRef.current;
    });

    // console.log(ref);

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div className='dropdown' style={{ width: '100%' }} ref={dropdownRef}>
        <button
          className='dropdown-toggle'
          type='button'
          style={{
            ...(style || {}),
            width: '100%',
            textAlign: 'initial',
            direction: dir || 'initial'
          }}
          onClick={() => setDropdown(!dropdown)}
        >
          {value || placeholder || ''}
        </button>
        <ul
          className='dropdown-menu'
          style={{
            display: dropdown ? 'block' : 'none',
            marginTop: 5,
            direction: dir || 'initial'
          }}
        >
          {children
            ? children
            : Array.isArray(options)
            ? options.map((item, i) => {
                if (item.value !== undefined && item.label !== undefined) {
                  return (
                    <li
                      role='button'
                      onClick={() =>
                        onChange ? onChange(item.value) : () => null
                      }
                      className='dropdown-item'
                      style={{ cursor: 'pointer', listStyle: 'none' }}
                      key={i.toString()}
                      value={item.value}
                    >
                      {item.label}
                    </li>
                  );
                }
                return null;
              })
            : null}
        </ul>
      </div>
    );
  }
);

export default Dropdown;
