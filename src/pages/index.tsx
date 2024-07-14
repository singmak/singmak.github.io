import { navigate } from 'gatsby';

const Index = () => {
  if (typeof window !== 'undefined') navigate('/blog');
};

export default Index;