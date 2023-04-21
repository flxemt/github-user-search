import StatItem from './StatItem'
import InfoDetail from './InfoDetail'

export default function UserCard({ user }) {
  const date = new Date(user.created_at)
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }

  const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date)
  const isGridOverflowing = [user.location, user.twitter_username, user.blog, user.company].some(
    item => item?.length > 24
  )

  return (
    <div className="mt-4 px-6 pt-8 pb-12 grid bg-snow-white shadow-card text-blue dark:text-white rounded-md dark:bg-dark-blue dark:shadow-none text-h4 md:mt-6 md:p-10 md:text-body xl:grid-cols-[117px_auto] xl:gap-x-9 xl:p-12 xl:pt-11">
      <div className="items-center grid grid-cols-[70px_auto] gap-x-5 md:grid-cols-[117px_auto] md:gap-x-10 xl:col-span-2 xl:gap-x-9 xl:items-start">
        <img src={user.avatar_url} alt={user.name} className="object-cover rounded-full xl:row-span-2" />
        <div className="grid xl:grid-cols-2">
          <div className="font-bold text-h3 leading-h3 text-dark dark:text-white md:text-h1 md:leading-h1">
            {user.name}
          </div>
          <div className="text-primary md:text-h3 md:leading-h3 xl:col-span-2 xl:mt-[0.125rem]">@{user.login}</div>
          <div className="text-grayish-blue dark:text-white md:leading-[1.375rem] md:mt-1 xl:col-start-2 xl:row-start-1 xl:justify-self-end xl:self-center xl:mt-0">
            Joined {formattedDate}
          </div>
        </div>
        <p
          className="mt-8 md:mt-6 col-span-2 xl:col-start-2 xl:col-span-1 xl:mt-5"
          style={{ opacity: user.bio ? '1' : '0.75' }}
        >
          {user.bio ?? 'This profile has no bio'}
        </p>
      </div>
      <div className="mt-6 md:mt-8 xl:col-start-2 xl:col-end-3">
        <div className="bg-light-gray dark:bg-very-dark-blue px-[0.875rem] py-[1.125rem] rounded-sm flex justify-between md:px-8 md:py-4 xl:pr-[5.25rem]">
          <StatItem name="Repos" value={user.public_repos} />
          <StatItem name="Followers" value={user.followers} />
          <StatItem name="Following" value={user.following} />
        </div>
        <div
          className="mt-6 grid gap-4 md:grid-cols-2 md:gap-[1.1875rem] md:mt-[1.875rem] xl:mt-9 xl:gap-x-16 xl:gap-y-[0.9375rem]"
          style={{ gridTemplateColumns: isGridOverflowing ? 'initial' : '' }}
        >
          <InfoDetail name="Location" image="icon-location" value={user.location} marginRight="1.125rem" />
          <InfoDetail name="Twitter" image="icon-twitter" value={user.twitter_username} />
          <InfoDetail name="Website" image="icon-website" value={user.blog} isLink={true} />
          <InfoDetail name="Company" image="icon-company" value={user.company} />
        </div>
      </div>
    </div>
  )
}
