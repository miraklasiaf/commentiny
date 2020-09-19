import { Flex } from '@chakra-ui/core';
import Footer from '@/components/footer';

const Default = ({ children }) => (
  <Flex as="main" w="full" justify="center" direction="column">
    <Flex direction="column" w="full" h="full">
      {children}
      <Footer />
    </Flex>
  </Flex>
);

export const getLayout = (page) => <Default>{page}</Default>;

export default Default;
