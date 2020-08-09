import { getLayout } from '@/layouts/dashboard';
import { Box, Flex, SimpleGrid } from '@chakra-ui/core';

const DashboardReports = () => (
  <SimpleGrid columns={3} h="full">
    <Box />
    <Flex align="center" justify="center">
      Urgent
    </Flex>
    <Flex align="center" justify="center">
      Not Urgent
    </Flex>
    <Flex align="center" justify="center" bg="gray.100">
      Important
    </Flex>
    <Flex align="center" justify="center" bg="gray.100">
      Do
    </Flex>
    <Flex align="center" justify="center" bg="gray.100">
      Do It (Personal Growth)
    </Flex>
    <Flex align="center" justify="center" bg="black" color="white">
      Not Important
    </Flex>
    <Flex align="center" justify="center" bg="black" color="white">
      Delegate
    </Flex>
    <Flex align="center" justify="center" bg="black" color="white">
      Useless
    </Flex>
  </SimpleGrid>
);

DashboardReports.getLayout = getLayout;

export default DashboardReports;
