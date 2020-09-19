import NextLink from 'next/link';
import { Button, Flex } from '@chakra-ui/core';
import ThemeToggle from './theme-toggle';
import { MY_APP } from '@/utils/constants';

export default function Header(props) {
  return (
    <Flex
      pos="fixed"
      as="header"
      top={0}
      insetX={0}
      h={16}
      borderBottomWidth="1px"
      {...props}
    >
      <Flex w="full" align="center" justify="center">
        <Flex w="full" maxW="5xl" align="center" justify="center">
          <Flex w="full" align="center" justify="space-between">
            <Flex align="center">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" px={0} fontWeight="bold">
                  {MY_APP}
                </Button>
              </NextLink>
            </Flex>
            <Flex>
              <ThemeToggle />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
