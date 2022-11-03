import React from 'react';
import {  ModalContent , TermBox , ItemsBox } from './styles';

export default function TermCard(props) {
    const handlerCopy = (e) =>  {
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
    }
	return <>
        <TermBox onCopy={(e) => {e.preventDefault(); return false}} >
            {props.items.map(ele => (
                <ModalContent>
                    <h4> {ele.title}</h4>
                    {ele.items && ele.items.length > 0 && ele.items.map(item => (
                        <ItemsBox>
                            <h5 dir="rtl">{item.header}</h5>
                            {item.content.length> 1 && 
                                <ul dir="rtl">
                                {item.content.map(def => (
                                    <li>
                                        {def}
                                    </li>
                                    ))}
                                </ul>
                            }
                            {item.content.length == 1 && 
                                item.content.map(def => (
                                    <p>
                                        {def}
                                    </p>
                                    ))
                            }
                        </ItemsBox>
                    ))}
                </ModalContent>
            ))}
        </TermBox>
	</>
};