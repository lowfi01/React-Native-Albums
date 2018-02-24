import React from 'react';
import { Text, Button } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => (
  <Card>
    <CardSection>
      <Text>{album.title}</Text>
    </CardSection>
  </Card>
);

export default AlbumDetail;
