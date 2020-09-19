import { useRouter } from 'next/router'
import { Box, Text, useColorModeValue } from '@chakra-ui/core'
import { Comment, CommentLink } from '@/components/comment'
import { getAllComment, getAllSites, getSite } from '@/lib/db-admin'
import 'iframe-resizer/js/iframeResizer.contentWindow'

export default function EmbeddedCommentPage({ initialComment, site }) {
  const router = useRouter()
  const textColor = useColorModeValue('gray.900', 'gray.200')

  return (
    <Box display="flex" flexDirection="column" width="full">
      <CommentLink paths={router?.query?.site || []} />
      {initialComment?.length ? (
        initialComment.map((comment, index) => (
          <Comment
            key={comment.id}
            settings={site?.settings}
            isLast={index === initialComment.length - 1}
            {...comment}
          />
        ))
      ) : (
        <Text color={textColor}>There are no comments for this site.</Text>
      )}
    </Box>
  )
}

export async function getStaticProps(context) {
  const [siteId, route] = context.params.site
  const { comment } = await getAllComment(siteId, route)
  const { site } = await getSite(siteId)

  return {
    props: {
      initialComment: comment,
      site
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const { sites } = await getAllSites()
  const paths = sites.map((site) => ({
    params: {
      site: [site.id.toString()]
    }
  }))

  return {
    paths,
    fallback: true
  }
}
