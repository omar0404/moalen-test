import React,{forwardRef} from 'react';
import {FaCaretDown } from "react-icons/fa";
import Select from 'react-select';

import { Container, Label, Error} from './styles';

const colourStyles = {
  control: (styles) => ({ ...styles,  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color:'white',
  border:'none',
  padding: '16px 16px',
  boxSizing: 'border-box',
  border: 'none',
  fontSize: '14px',
  lineHeight: '24px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '32px',
  color: 'white',
  textIndent: '1px',
  ':focus': {
      outline: 'none' 
  }, }),
  option: (styles) => ({
    ...styles,
       fontSize:'14px'
  }),
  
  placeholder: (styles) => ({ ...styles, color:'white'}),
  singleValue: (styles) => ({ ...styles,  color:'white' }),

  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: 'transparent',
    };
  },
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
  }),
  multiValueRemove: (styles) => ({
   ...styles,
    color: 'black',
    svg:{
      position:'unset',

    },
    ':hover': {
      backgroundColor: 'transparent',
      color: 'white',
    },
  }),
};

export default  forwardRef((props,ref) => {
    return <Container>
        <Label>{props.label}</Label>
        <Select
        ref={ref}
        defaultValue={props.value}
        isMulti={props.isMultiple}
        options={props.options}
        onChange={e => e ? props.onChange(e) : null}
        styles={colourStyles}
        placeholder={props.options[0]?.label}
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator:() => null,
          IndicatorsContainer:()=>null
        }}
      />
        <FaCaretDown />
        {!!props.error && <Error>{props.error}</Error>}
    </Container>
});