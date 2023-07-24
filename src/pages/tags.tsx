import React, { useEffect, useCallback } from 'react';
import { graphql, PageProps, navigate } from 'gatsby';
import { AllMdxGroup } from '../types';
import { logPage } from '../analytics';
import PageWrapper from '../components/PageWrapper';
import { Container, Chip, Box } from '@mui/material';

const Tag = ({ tag }: { tag: string }) => {
  const onTagClick = useCallback(() => {
    navigate(`/tag/${tag}`);
  }, [tag]);
  return (
    <Box key={tag} sx={{
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderBottom: '10px solid transparent',
    }}>
      <Chip label={tag} variant="filled" onClick={onTagClick}/>
    </Box>
  );
};

const Tags = ({ data }: PageProps<AllMdxGroup>) => {
  useEffect(() => logPage('Tags', 'tags'), []);
  return (
    <PageWrapper pageTitle="Tags">
      <Container maxWidth="md" sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 5, marginBottom: 5 }}>
        {data.allMdx.group.map(({ fieldValue }) => (<Tag tag={fieldValue} key={fieldValue}/>))}
      </Container>
    </PageWrapper>
  );
};

export const query = graphql`{
  allMdx(sort: {frontmatter: {date: DESC}}) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
    }
  }
}`;

export default Tags;