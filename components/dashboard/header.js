import NextLink from 'next/link';
import { Button, Flex } from '@chakra-ui/core';
import ThemeToggle from '../theme-toggle';
import MobileNav from './mobile-nav';
import { MY_APP } from '@/utils/constants';

export default function Header(props) {
  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      left={[0, 0, 64]}
      right={0}
      align="center"
      h={16}
      px={[4, 6, 8]}
      borderBottomWidth="1px"
      {...props}
    >
      <Flex w="full" align="center" justify="center">
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
            <MobileNav />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
