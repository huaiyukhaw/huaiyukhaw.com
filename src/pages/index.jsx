import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  FacebookIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoPallydeli from '@/images/logos/pallydeli.svg'
// import logoFacebook from '@/images/logos/facebook.svg'
// import logoPlanetaria from '@/images/logos/planetaria.svg'
// import logoStarbucks from '@/images/logos/starbucks.svg'
import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ZestIcon(props) {
  return (
    <svg viewBox="0 0 300 300" fill="#ffc233" aria-hidden="true" {...props}>
      <path d="M213.98,76.18c7.87,10.8,5.01,22.81-6.72,29.08-2.76,1.48-5.57,2.87-8.36,4.32-24.84,12.93-49.71,25.82-74.51,38.84-4.53,2.38-8.51,2.07-12-1.51-3.48-3.58-3.93-7.67-1.2-12.02,1.22-1.94,2.29-3.98,3.32-6.03,13.05-25.95,26-51.95,39.15-77.85,5.37-10.58,15.93-13.76,25.87-7.37,7.87,5.06,15.09,11.16,20.79,15.45,5.57,6.94,9.83,11.86,13.65,17.09Zm21.45,119.38c1.52-3.37,3.74-6.59,4.45-10.12,3.33-16.39,3.31-32.88-.39-49.22-2.47-10.93-12.45-16.91-22.97-13.51-30.02,9.71-59.93,19.76-89.9,29.62-4.79,1.58-8.31,4.08-7.97,9.69,.32,5.31,3.51,7.94,8.47,9.48,29.34,9.12,58.64,18.38,87.92,27.72,7.43,2.37,13.98,1.62,20.39-3.66ZM63.78,24c-5.75,6.96-7.33,12.88-5.2,19.34,9.95,30.18,20.06,60.3,30.04,90.47,1.68,5.09,4.99,7.59,10.28,7.29,5.05-.28,6.72-3.78,8.09-8.13,9.03-28.69,18.28-57.31,27.41-85.97,5.1-16-.48-25.09-16.86-27.84-14.4-2.42-28.79-2.32-43.05,.68-4.34,.91-8.39,3.23-10.71,4.16Zm137.17,239.95c4.86-6.34,9.95-12.46,14.46-18.99,7.12-10.29,4.21-21.72-6.98-27.39-26.11-13.23-52.32-26.25-78.48-39.38-2.23-1.12-4.32-2.52-6.56-3.61-4.12-2-7.77-.96-10.87,2.16-2.95,2.96-3.91,6.4-1.89,10.3,14.83,28.56,29.54,57.19,44.59,85.64,5.38,10.16,16.95,12.83,26.35,6.32,6.69-4.63,12.89-9.97,19.39-15.05Z" />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Pallydeli Group',
      title: 'IT Executive and Sales Associate',
      start: '2020',
      end: '2021',
    },
    {
      company: 'Inmagine Group',
      title: 'Data Scientist Intern',
      start: '2019',
      end: '2020',
    },
    // {
    //   company: 'Planetaria',
    //   title: 'CEO',
    //   logo: logoPlanetaria,
    //   start: '2019',
    //   end: {
    //     label: 'Present',
    //     dateTime: new Date().getFullYear(),
    //   },
    // },
    // {
    //   company: 'Airbnb',
    //   title: 'Product Designer',
    //   logo: logoAirbnb,
    //   start: '2014',
    //   end: '2019',
    // },
    // {
    //   company: 'Facebook',
    //   title: 'iOS Software Engineer',
    //   logo: logoFacebook,
    //   start: '2011',
    //   end: '2014',
    // },
    // {
    //   company: 'Starbucks',
    //   title: 'Shift Supervisor',
    //   logo: logoStarbucks,
    //   start: '2008',
    //   end: '2011',
    // },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            {/* <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div> */}
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="/cv.pdf"
        alt="Huaiyu Khaw's CV"
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download Resume
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Huaiyu Khaw - Frontend developer, data scientist, and community
          organizer.
        </title>
        <meta
          name="description"
          content="I'm Huaiyu Khaw, a software engineer based in Penang. My passion lies in creating user-friendly and aesthetically pleasing applications that leverage cutting-edge technology."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Frontend developer, data scientist, and community organizer.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Huaiyu Khaw, a software engineer based in Penang. My
            passion lies in creating user-friendly and aesthetically pleasing
            applications that leverage cutting-edge technology.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <SocialLink
              href="https://linkedin.com/in/huaiyukhaw"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://github.com/huaiyukhaw"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://facebook.com/huaiyukhaw517"
              aria-label="Follow on Facebook"
              icon={FacebookIcon}
            />
            <SocialLink
              href="https://twitter.com/huaiyukhaw"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <div className="flex items-center gap-2">
              <Button
                href="https://zest.huaiyukhaw.com/huaiyukhaw"
                alt="Huaiyu Khaw's CV"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="group"
              >
                <ZestIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                My Zest CV
              </Button>
              <Button
                href="/cv.pdf"
                alt="Huaiyu Khaw's CV"
                target="_blank"
                variant="secondary"
                rel="noopener noreferrer"
                className="group"
              >
                PDF Resume
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {/* {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))} */}
            <Card as="article">
              <Card.Title href={`https://zest.huaiyukhaw.com/huaiyukhaw`}>
                Zest CV
              </Card.Title>
              <Card.Description>
                The profile builder for people in tech with robust work profiles
                at its core.
              </Card.Description>
              <Card.Cta>View my profile in Zest CV</Card.Cta>
            </Card>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
