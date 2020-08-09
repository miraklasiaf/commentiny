import NextLink from 'next/link';
import { Box, Flex, Text, Link, Avatar } from '@chakra-ui/core';
import { TableTag, Tr, Td, Th } from './table-components';

function Dummy() {
  return (
    <Tr>
      <Td>
        <Flex align="center">
          <Avatar size="sm" />
          <Box ml={4}>
            <Text
              fontSize="sm"
              lineHeight="5"
              fontWeight="medium"
              color="gray.900"
            >
              Faisal Karim
            </Text>
            <Text fontSize="sm" lineHeight="5" color="gray.900">
              you@domain.com
            </Text>
          </Box>
        </Flex>
      </Td>
      <Td>
        <Box fontSize="sm" lineHeight={5} color="gray.900">
          Director
        </Box>
        <Box fontSize="sm" lineHeight={5} color="gray.900">
          Human Resources
        </Box>
      </Td>
      <Td>
        <Box
          as="span"
          display="inline-flex"
          px={2}
          fontSize="sm"
          lineHeight={5}
          fontWeight="semibold"
          borderRadius="full"
          bg="green.100"
          color="green.800"
        >
          Active
        </Box>
      </Td>
      <Td>
        <Text fontSize="sm" lineHeight={5} color="gray.500">
          Owner
        </Text>
      </Td>
      <Td>
        <Box
          as="a"
          href="#"
          fontSize="sm"
          lineHeight={5}
          fontWeight="medium"
          color="indigo.600"
        >
          Edit
        </Box>
      </Td>
    </Tr>
  );
}

export default function Table() {
  return (
    <Box overflowX="auto">
      <Box
        display="inline-block"
        overflow="hidden"
        minWidth="full"
        borderBottomWidth="1px"
        borderRadius={{ sm: 'lg' }}
        boxShadow="default"
        verticalAlign="middle"
      >
        <TableTag minWidth="full">
          <thead>
            <Tr>
              <Th>Name</Th>
              <Th>Title</Th>
              <Th>Status</Th>
              <Th>Role</Th>
              <Th />
            </Tr>
          </thead>
          <Box as="tbody" bg="white">
            <Dummy />
            <Dummy />
            <Dummy />
          </Box>
        </TableTag>
      </Box>
    </Box>
  );
}
