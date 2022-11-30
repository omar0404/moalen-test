import React from 'react';

import { ContentContainer, Container, Content } from './styles';
import ListCard from '../ListCard';

export default function InfluencersCards({influencersList}) {
  
    return (  
    <Container>
        <ContentContainer>
            <Content>
              {influencersList.map(item =><ListCard key={item.id} data={item} /> )}					
            </Content>
        </ContentContainer>
    </Container>)
};