import React from 'react'
import { Heading, Flex, Text } from '@chakra-ui/core'

import AddSiteModal from './add-site-modal'

const SiteEmptyState = () => (
  <Flex
    direction="column"
    w="full"
    bg="white"
    borderRadius="8px"
    p={16}
    justify="center"
    align="center"
  >
    <Heading size="lg" mb={2}>
      You haven’t added any sites.
    </Heading>
    <Text mb={4}>Let’s get started.</Text>
    <AddSiteModal>Add Your First Site</AddSiteModal>
  </Flex>
)

export default SiteEmptyState
