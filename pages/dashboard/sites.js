import { getLayout } from '@/layouts/dashboard'
import {
  SiteTableHeader,
  SiteTableSkeleton,
  SiteTable,
  SiteEmptyState
} from '@/components/sites'
import useSWR from 'swr'
import { useAuth } from '@/context/auth'
import fetcher from '@/utils/fetcher'

const DashboardSites = () => {
  const { user } = useAuth()
  const { data } = useSWR(user ? ['/api/sites', user.token] : null, fetcher)
  const isPaidAccount = true

  if (!data) {
    return (
      <>
        <SiteTableHeader />
        <SiteTableSkeleton />
      </>
    )
  }

  if (data.sites.length) {
    return (
      <>
        <SiteTableHeader isPaidAccount={isPaidAccount} />
        <SiteTable sites={data.sites} />
      </>
    )
  }

  return (
    <>
      <SiteTableHeader isPaidAccount={isPaidAccount} />
      <SiteEmptyState />
    </>
  )
}

DashboardSites.getLayout = getLayout

export default DashboardSites
