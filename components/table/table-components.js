import { Box, Text } from '@chakra-ui/core';

export const Th = (props) => (
  <Text
    as="th"
    px={6}
    py={3}
    color="gray.500"
    bg="gray.50"
    fontSize="xs"
    fontWeight="medium"
    letterSpacing="wider"
    lineHeight={4}
    textAlign="left"
    textTransform="uppercase"
    borderBottomWidth="1px"
    {...props}
  />
);

export const Tr = (props) => <Box as="tr" {...props} />;

export const Td = (props) => (
  <Box
    as="td"
    px={6}
    py={4}
    borderBottom="1px"
    borderBottomColor="gray.200"
    whiteSpace="nowrap"
    {...props}
  />
);

export const TableTag = (props) => <Box as="table" {...props} />;
