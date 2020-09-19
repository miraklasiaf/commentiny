import NextLink from 'next/link'
import { Box, Link } from '@chakra-ui/core'
import { parseISO, format } from 'date-fns'
import { TableContainer, Table, Tr, Th, Td } from '@/components/table-components'
import DeleteSiteButton from './delete-site-button'

const SiteTable = ({ sites }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th width="50px">{''}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site, index) => (
            <Box as="tr" key={site.id}>
              <Td>
                <NextLink
                  href="/dashboard/site/[siteId]"
                  as={`/dashboard/site/${site.id}`}
                  passHref
                >
                  <Link id={`site-table-link-${index}`} fontWeight="medium">
                    {site.name}
                  </Link>
                </NextLink>
              </Td>
              <Td>
                <Link href={site.url} isExternal>
                  {site.url}
                </Link>
              </Td>
              <Td>
                <NextLink
                  href="/dashboard/site/[siteId]"
                  as={`/dashboard/site/${site.id}`}
                  passHref
                >
                  <Link color="gray.400" fontWeight="medium">
                    View Feedback
                  </Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(site.createdAt), 'PPpp')}</Td>
              <Td>
                <DeleteSiteButton siteId={site.id} />
              </Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  )
}

export default SiteTable
