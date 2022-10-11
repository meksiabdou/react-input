import { CSSProperties } from 'react';

export const styleInput: CSSProperties = {
  padding: '.375rem .75rem',
  border: 'none',
  borderRadius: '0',
  boxShadow: 'none',
  backgroundColor: 'transparent',
  outline: 'none',
  position: 'relative',
  width: '100%',
};

export const styleInputSelect: CSSProperties = {
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
  //backgroundPosition: 'right .75rem center',
  backgroundSize: '16px 12px',
  backgroundColor: 'transparent',
  minHeight: 38,
  width: '100%',
  outline: 'none',
  justifyContent: 'space-between'
};

export const styleViewIcon: CSSProperties = {
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
};

export const errorStyle: CSSProperties = {
  display: 'block',
  width: '100%',
  marginTop: '.25rem',
  fontSize: '.875em',
  color: '#dc3545',
  marginLeft: '2px',
  marginRight: '2px'
};

export const stylelabel: CSSProperties = {
  marginLeft: '2px',
  marginRight: '2px',
  marginBottom: '3px'
};

export const styleGroup: CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  //flexWrap: 'wrap',
  alignItems: 'stretch',
  //border: '1px solid',
  //borderColor: '#ced4da',
  minHeight: '38px',
  borderRadius: '.25rem',
  padding: '2px',
  backgroundColor: '#fff'
};
