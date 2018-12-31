// @flow
import React from 'react';
import CoreLayout from '../../layouts/CoreLayout/CoreLayout';
import PromoBanner from '../../components/PromoBanner/PromoBanner';
import HomeNewsfeed from './components/HomeNewsfeed/HomeNewsfeed';

const HomeView = () => (
  <CoreLayout>
    <PromoBanner />
    <HomeNewsfeed />
  </CoreLayout>
);

export default HomeView;
