import { getLayout } from '@/layouts/dashboard'
import useSWR from 'swr'
import fetcher from '@/utils/fetcher'
import { useAuth } from '@/context/auth'
import {
  CommentTableHeader,
  CommentTableSkeleton,
  CommentEmptyState,
  CommentTable
} from '@/components/comment'

const DashboardComment = () => {
  const { user } = useAuth()
  const { data } = useSWR(user ? ['/api/comment', user.token] : null, fetcher)

  if (!data) {
    return (
      <>
        <CommentTableHeader />
        <CommentTableSkeleton />
      </>
    )
  }

  return (
    <>
      <CommentTableHeader />
      {data?.comment?.length ? (
        <CommentTable comment={data.comment} />
      ) : (
        <CommentEmptyState />
      )}
    </>
  )
}

DashboardComment.getLayout = getLayout

export default DashboardComment
