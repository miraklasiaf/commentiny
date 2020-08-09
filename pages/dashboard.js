import { getLayout } from '@/layouts/dashboard';
import { Flex } from '@chakra-ui/core';

const DashboardIndex = () => (
  <Flex position="relative" h="full">
    Commentiny Portal
  </Flex>
);

DashboardIndex.getLayout = getLayout;

export default DashboardIndex;
