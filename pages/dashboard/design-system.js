import { getLayout } from '@/layouts/dashboard';
import { Box } from '@chakra-ui/core';

const DashboardDesignSystem = () => {
  return (
    <Box>
      Design System
      <Box mt={4}>
        tes
        <Box>tes</Box>
      </Box>
    </Box>
  );
};

DashboardDesignSystem.getLayout = getLayout;

export default DashboardDesignSystem;
