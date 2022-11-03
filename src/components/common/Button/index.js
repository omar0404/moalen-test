import React from 'react';

import { Container, Button, ButtonLink } from './styles';
import Link from 'next/link'

export default function ButtonComponent(props) {

    return <Container {...props}>
        {props.link ? <Link {...props}><ButtonLink {...props} style={{}}>{props.children}</ButtonLink></Link> : <Button style={{}} {...props}>{props.children}</Button>}
    </Container>
};