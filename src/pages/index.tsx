import React, { useEffect } from 'react';
import { AllMdxNodes } from '../types';
import { logPage } from '../analytics';
import PageWrapper from '../components/PageWrapper';
import { Container } from '@mui/material';

const Index = ({ data }: PageProps<AllMdxNodes>) => {
  useEffect(() => logPage('Index', 'index'), []);
  return (
    <PageWrapper pageTitle="Blog" description={PAGE_DESCRIPTION}>
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 5 }}>
      </Container>
    </PageWrapper>
  );
};

export default Index;