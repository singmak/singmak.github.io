import * as React from 'react';
import HeroSection from '../components/HeroSection';
import MainLayout from '../components/MainLayout';

const IndexPage = () => {
  return (
    <div>
      <MainLayout pageTitle={'Home'}>
        <HeroSection />
      </MainLayout>
    </div>
  );
};

export default IndexPage;