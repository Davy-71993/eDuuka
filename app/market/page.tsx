import Container from '@/components/Container';

interface PageProps {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

const Page: React.FC<PageProps> = (props) => {
  return (
    <Container className='' >
      Hello There
    </Container>
  );
};

export default Page;
