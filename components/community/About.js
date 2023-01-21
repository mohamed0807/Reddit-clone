import Image from 'next/image'
import pf from '../../public/pro2.jpg'
const style = {
  wrapper:
    'flex flex-col space-y-2 divide-y divide-[#343536] rounded border border-[#343536] bg-[#1a1a1b] p-4 text-gray-300',
  profileInfoContainer: 'flex items-center space-x-4 ',
  profilePicContainer: `relative h-12 w-12`,
  profilePic: 'object-cover',
  aboutContent: 'py-2 text-sm',
  statsWrapper: 'flex items-center space-x-16',
  stat: 'flex flex-col',
  statTitle: 'text-xs',
  footer: 'flex flex-col space-y-4 pt-2',
  createdAt: 'text-sm font-light',
  joinedButton:
    'cursor-pointer rounded-full border border-gray-300 py-1 text-center text-sm font-semibold',
}

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className='pb-2'>
        <div className={style.profileInfoContainer}>
          <div className={style.profilePicContainer}>
              <Image
              src="https://i.pinimg.com/564x/f9/c9/1a/f9c91a4f7d5d2d2f632c896812f28e3b.jpg"
              layout='fill'
              className={style.profilePic}
              alt='Profile Image'
            />
          </div>
          <p>Mohamed</p>
        </div>
        <p className={style.aboutContent}>
        Reddit (stylized in all lowercase as reddit) is an American social news aggregation, content rating, and discussion website. Registered users (commonly referred to as "Redditors") submit content to the site such as links, text posts, images, and videos, which are then voted up or down by other members. Posts are organized by subject into user-created boards called "communities" or "subreddits". Submissions with more upvotes appear towards the top of their subreddit and, if they receive enough upvotes, ultimately on the site's front page. Reddit administrators moderate the communities. Moderation is also conducted by community-specific moderators, who are not Reddit employees.[7] 
        </p>

        <div className={style.statsWrapper}>
          <div className={style.stat}>
            <span>2.1m</span>
            <span className={style.statTitle}>Members</span>
          </div>
          <div className={style.stat}>
            <span>246</span>
            <span className={style.statTitle}>Online</span>
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <p className={style.createdAt}>Created at Dec 16, 2022</p>

        <div className={style.joinedButton}>Joined</div>
      </div>
    </div>
  )
}

export default About
