import * as React from 'react';
import HeroSection from '../components/HeroSection';
import MainLayout from '../components/MainLayout';

const IndexPage = () => {
  return (
    <MainLayout pageTitle={''}>
      <HeroSection />
    </MainLayout>
  );
};

export default IndexPage;