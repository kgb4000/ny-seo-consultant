import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Footer from '@/components/Footer'

import { NextSeo } from 'next-seo'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NextSeo />
      <header className="container px-4 max-w-7xl mx-auto">
        <div>
          <img
            src="images/new-york-seo-consultant.png"
            className="max-w-11 mx-auto"
            alt="New York SEO Consultant"
          />
        </div>
        <nav>
          <ul className="nav flex justify-around max-w-2xl mx-auto">
            <li>
              <Link href="#services" className="text-sm lg:text-xl">
                Services
              </Link>
            </li>
            <li>
              <Link href="#why-me" className="text-sm lg:text-xl">
                Why me?
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-sm lg:text-xl">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#diagnosis" className="text-sm lg:text-xl ">
                Free Diagnosis
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="bg-slate-50">
          <div className="container max-w-5xl mx-auto px-4 text-black">
            <div className="py-24">
              <h1 className="text-6xl lg:text-8xl font-bold pb-4 text-center">
                Looking for a New York SEO Consultant?
              </h1>
              <p className="text-xl lg:text-2xl text-center">
                I help businesses in NYC 10x website traffic to get more leads,
                and sales from Google
              </p>
              <div className="text-center py-12">
                <Link
                  href="#diagnosis"
                  className="md:text-xl rounded bg-red-600 py-6 px-6 font-bold text-white hover:bg-red-800"
                >
                  Get Your Free SEO Diagnosis
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="container max-w-7xl mx-auto px-4 my-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold pb-4">
              5 Reasons You Need to Partner With a New York City SEO Consultant
              [Like Me!]
            </h2>
            <p className="text-xl lg:text-2xl text-center">
              Here are five reasons you need professional SEO services and to
              work with an SEO specialist
            </p>
          </div>
          <div className="py-5 my-5 after:lg:py-20 lg:my-20">
            <div className="lg:grid grid-cols-2 gap-10 items-center">
              <img
                src="images/growth.png"
                className="pb-10 w-96 mx-auto order-2"
                alt="Ultimate growth engine."
              />
              <div>
                <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                  SEO is Your Ultimate Growth Engine
                </h3>
                <p>
                  SEO isn't just a digital marketing strategy; it's your
                  business's lifeline, your secret weapon to ranking higher in
                  search engines and reaching more customers!
                </p>
                <p>
                  Now, imagine in the city of New York, thirty potential
                  customers are searching for your services the same day, and
                  voilà, your business appears in the search results.
                </p>
                <p>That's the power of SEO!</p>
                <p>
                  It's like having a neon sign in Times Square, but instead of
                  lighting up the night, it's directing people searching for
                  your services straight to your business, all-day everyday.
                </p>
                <p>
                  With the SEO, you're not just throwing darts in the dark,
                  hoping to hit.
                </p>
                <p>
                  You're a sharpshooter, hitting the bullseye every time,
                  driving traffic ready to convert.
                </p>
                <p>Now, this brings me to the second reason.</p>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="lg:grid grid-cols-2 gap-10 items-center">
              <img
                src="images/pc-search.png"
                className="pb-10 w-96 mx-auto"
                alt="Search intent"
              />
              <div>
                <h3 className="text-2xl lg:text-4xl font-bold pb-2 order-1">
                  Search Intent
                </h3>
                <p>Picture this.</p>
                <p>
                  Your customer, Emma, is searching for a plumber to install a
                  new shower in her home.
                </p>
                <p>Her intent is clear: she needs a shower installed.</p>
                <p>
                  She doesn't go to Instagram, Facebook, or TickTok to look for
                  a plumber to install her shower.
                </p>
                <p>She gets on her cell phone or laptop and searches Google.</p>
                <p>
                  When people in New York City want to find something, they
                  google it.
                </p>
                <p>Now, my third reason.</p>
              </div>
            </div>
          </div>
          <div className="py-5 my-5 after:lg:py-20 lg:my-20">
            <div className="lg:grid grid-cols-2 gap-10 items-center">
              <img
                src="images/24-7.png"
                className="pb-10 w-96 mx-auto order-2"
                alt="Google works 24/7."
              />
              <div>
                <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                  Google Works 24/7
                </h3>
                <p>Search engines are like AI assistants that never sleep.</p>
                <p>
                  They always connect people with what they're looking for every
                  hour of every day.
                </p>
                <p>
                  This 24/7 help is especially important in a place like New
                  York City that doesn't sleep.
                </p>
                <p>
                  Your business stays open even when you close your doors for
                  the night.
                </p>
                <p>
                  A well-set-up website acts like a helpful friend, answering
                  questions and making connections, day or night.
                </p>
                <p>
                  With search engines constantly working, your business is never
                  closed.
                </p>
                <p>
                  It's always taking orders, always helpful, even when the city
                  goes quiet.
                </p>
                <p>This brings me to the fourth reason.</p>
              </div>
            </div>
          </div>
          <div className="py-5 my-5 after:lg:py-20 lg:my-20">
            <div className="lg:grid grid-cols-2 gap-10 items-center">
              <img
                src="images/binary.png"
                className="pb-10 w-96 mx-auto"
                alt="Binary."
              />
              <div>
                <h3 className="text-2xl lg:text-4xl font-bold pb-2 order-1">
                  SEO Doesn't Stop Working
                </h3>
                <p>What happens when you stop paying for social media ads?</p>
                <p>They stop working.</p>
                <p>
                  While the effects of social media marketing methods disappear
                  when you stop paying for them, SEO keeps working.
                </p>
                <p>
                  It doesn't just help you get one-time results; it keeps
                  bringing people to your business long after they see you in
                  the search rankings.
                </p>
                <p>
                  It's about using the right words and creating exciting content
                  that makes your online presence strong and lasting.
                </p>
                <p>Let's go to reason number four.</p>
              </div>
            </div>
          </div>
          <div className="py-5 my-5 after:lg:py-20 lg:my-20">
            <div className="lg:grid grid-cols-2 gap-10 items-center">
              <img
                src="images/competitors.png"
                className="pb-10 w-96 mx-auto order-1"
                alt="Search intent"
              />
              <div>
                <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                  Your Competitors Are Already Doing SEO
                </h3>
                <p>Your rivals are already doing SEO.</p>
                <p>Don't believe me?</p>
                <p>Go to Google and search for one of your services.</p>
                <p>Do you appear on the first page?</p>
                <p>Do you appear on the first page for any of your services?</p>
                <p>
                  If not, you're losing more than just money to your
                  competitors.
                </p>
                <p>
                  You're losing market share, referrals, and lifetime customers
                  to your competitors.
                </p>
                <p>Still think you don't need New York SEO?</p>
                <p>Think again.</p>
              </div>
            </div>
          </div>
          <div className="text-center py-12">
            <Link
              href="#diagnosis"
              className="rounded md:text-2xl bg-red-600 py-6 px-6 font-bold text-white hover:bg-red-800"
            >
              Get Your Free SEO Diagnosis
            </Link>
          </div>
        </section>
        <section
          className="container max-w-7xl mx-auto px-4 py-5"
          id="services"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold pb-4">
              New York SEO Consulting Services
            </h2>
            <p className="lg:text-2xl">
              I offer the following SEO services to businesses in all five New
              York City boroughs
            </p>
          </div>
          <div className="lg:grid grid-cols-2 gap-5 lg:py-20">
            <div>
              <div className="bg-slate-50 py-10 px-8 lg:p-20 my-6 lg:my-0">
                <div>
                  <h3 className="text-3xl font-bold pb-4">
                    1-on-1 SEO Consulting
                  </h3>
                </div>
                <p>Get a 1-on-1 SEO consulting to guide your SEO success!</p>
                <p>
                  I provide tailored advice and strategies that fit your
                  business’s needs and goals.
                </p>
                <p>
                  Whether you're a budding entrepreneur or run an established
                  enterprise, I'm here to navigate you through the New York SEO
                  jungle.
                </p>
                <p>
                  I'll work closely with you to understand your objectives,
                  analyze your website's current standings, and formulate an
                  actionable SEO plan to boost your SEO performance.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 py-10 px-8 lg:p-20 my-6 lg:my-0">
              <div>
                <h3 className="text-3xl font-bold pb-4">Local SEO Services</h3>
              </div>
              <p>
                Want to be the top choice in your area, like Brooklyn, Bronx, or
                Staten Island, and grab all the great leads and customers?
              </p>
              <p>
                Local SEO services help small businesses in New York City get
                noticed in Google's local search pack and the local search
                results.
              </p>
              <p>
                This means your business will show up more for the keywords that
                matter most to you!
              </p>
              <p>
                Transform your website into a powerhouse for generating leads.
                Get advanced SEO strategies, content marketing, and
                link-building, no matter your industry.
              </p>
            </div>
            <div className="bg-slate-50 py-10 px-8 lg:p-20 my-6 lg:my-0">
              <div>
                <h3 className="text-3xl font-bold pb-4">Keyword Research</h3>
              </div>
              <p>
                Looking to pinpoint the exact words and phrases customers are
                typing into the search bar?
              </p>
              <p>
                Keyword Research is your roadmap to understanding your
                audience’s language!
              </p>
              <p>
                I dig deep to find the keywords that matter most to your
                business, focusing on terms likely to bring in traffic and
                convert visitors into customers.
              </p>
              <p>
                I explore every nook and cranny of your niche, identifying
                golden nuggets—those highly relevant, low-competition keywords
                that can propel your website to the top of search engine
                results.
              </p>
              <p>
                Whether you’re a seasoned brand in Staten Island or a new
                business in Queens, my keyword research service lays the
                foundation for your SEO success and turning your website into a
                magnet for your target audience!
              </p>
            </div>
            <div>
              <div className="bg-slate-50 py-10 px-8 lg:p-20 my-6 lg:my-0">
                <div>
                  <h3 className="text-3xl font-bold pb-4">SEO Audit Service</h3>
                </div>
                <p>Ever wonder why your site isn't getting the traffic?</p>
                <p>An SEO Audit can tell you why.</p>
                <p>It's like a health check for your website!</p>
                <p>
                  I dive into every aspect of your site to identify roadblocks
                  that stop you from ranking high on search engines.
                </p>
                <p>
                  I look at your website's structure, internal and external
                  links, keyword usage, and content quality, and give you a
                  clear picture of where you stand.
                </p>
                <p>
                  Whether you're a plumber, electrician, or general contractor
                  in Brooklyn, Queens, or Manhattan, my detailed reports and
                  actionable insights are your first step to beating your
                  competition.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-slate-50 py-10 px-8 lg:p-20 my-6 lg:my-0">
                <div>
                  <h3 className="text-3xl font-bold pb-4">Link Building</h3>
                </div>
                <p>
                  Want to boost your website's authority and drive more organic
                  traffic your way?
                </p>
                <p>Link Building is the key!</p>
                <p>
                  I specialize in acquiring high-quality, relevant backlinks
                  that signal to search engines your site is a trusted source of
                  information.
                </p>
                <p>
                  I employ various strategies, including content marketing,
                  outreach, and digital PR, to secure valuable links from
                  reputable sites in your industry.
                </p>
                <p>
                  Whether you're a small business in New York or a nationwide
                  brand, we craft a customized link-building plan that aligns
                  with your goals and targets.
                </p>
                <p>
                  My service is not just about quantity; I focus on quality and
                  relevance to build a solid and natural link profile.
                </p>
                <p>
                  This approach ensures your site gains the trust and
                  credibility it needs to climb the search engine rankings,
                  attracting more visitors and converting them into loyal
                  customers!
                </p>
              </div>
            </div>
            <div>
              <div className="bg-slate-50 py-10 px-8 lg:p-20 my-6 lg:my-0">
                <div>
                  <h3 className="text-3xl font-bold pb-4">
                    Google My Business Management
                  </h3>
                </div>
                <p>
                  Want your business to shine and grab attention when local New
                  Yorkers search for your services?
                </p>
                <p>Google My Business Management is your spotlight!</p>
                <p>
                  I optimize your listing to make your business pop up when
                  potential customers are on the hunt, whether you're an
                  electrician, a plumber, or a roofer.
                </p>
                <p>
                  I manage every detail—from your business information and
                  customer reviews to posting engaging photos and
                  updates—ensuring your profile is spruced up and appealing.
                </p>
                <p>
                  By managing your GMB profile, your business shows up
                  accurately and enticingly when someone nearby is looking for
                  what you offer.
                </p>
                <p>
                  My goal is to make your business a local standout, attracting
                  more clicks, calls, and turning local searchers into regulars.
                </p>
                <p>
                  With my hands-on management, your Google My Business profile
                  becomes a powerful tool to connect with your community and
                  grow your clientele!
                </p>
              </div>
            </div>
          </div>
          <div className="text-center py-12">
            <Link
              href="#diagnosis"
              className="md:text-2xl rounded bg-red-600 py-6 px-6 font-bold text-white hover:bg-red-800"
            >
              Get Your Free SEO Diagnosis
            </Link>
          </div>
        </section>
        <section
          className="container max-w-7xl mx-auto px-4 py-5 my-5"
          id="why-me"
        >
          <div>
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-4xl lg:text-6xl font-bold pb-4">
                In a Pool of SEO Agencies in New York City, Why Work Me?
              </h2>
              <p className="lg:text-2xl">
                Why work with me for your NYC SEO Services
              </p>
            </div>
            <div className="py-5 my-5 after:lg:py-20 lg:my-20">
              <div className="lg:grid grid-cols-2 gap-10 items-center">
                <img
                  src="images/results.png"
                  className="pb-10 w-96 mx-auto order-2"
                  alt="Ultimate growth engine."
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                    I Focus on Your Results
                  </h3>
                  <p>
                    I'm your go-to person for all things SEO, especially
                    regarding local SEO services for New York City businesses.
                  </p>
                  <p>My main goal?</p>
                  <p>
                    SEO is about more than just getting your website to appear
                    in search results or get lots of clicks.
                  </p>
                  <p>
                    It's about bringing in real customers interested in your
                    electrical services, boosting sales, and helping your
                    business expand.
                  </p>
                  <p>
                    I'm all about creating strategies that do more than make
                    your website visible — I make sure that the people who see
                    your site become customers, helping your revenue increase!
                  </p>
                </div>
              </div>
            </div>
            <div className="py-5 my-5 after:lg:py-20 lg:my-20">
              <div className="lg:grid grid-cols-2 gap-10 items-center">
                <img
                  src="images/coding.png"
                  className="pb-10 w-96 mx-auto"
                  alt="Custom SEO campaigns."
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                    I Build Custom SEO Campaigns, No Cookie Cutter
                  </h3>
                  <p>
                    I craft SEO strategies that are tailor-made for your
                    specific business.
                  </p>
                  <p>
                    I’m not a fan of the “one-size-fits-all” approach. Instead,
                    I’m all about picking the strategies that mesh well with
                    your revenue goals, your industry, and, of course, your
                    audience.
                  </p>
                  <p>
                    By really diving into understanding your business and what
                    you want to achieve online, I ensure every aspect of our
                    plan works, from selecting the right keywords to creating
                    awesome content, is customized to boost your online
                    presence.
                  </p>
                  <p>
                    And I'm constantly tuning in, checking out the analytics and
                    performance data, and tweaking things here and there to
                    ensure everything's running smoothly and effectively.
                  </p>
                  <p>
                    I'm committed to ensuring your SEO strategies do what
                    they're supposed to, and I won't stop. I'm here to ensure
                    your business stands out online, succeeds, and gets those
                    customers and sales you're after!
                  </p>
                  <p>
                    This personalized touch is my secret sauce to driving more
                    organic traffic and boosting your site's search engine
                    rankings!
                  </p>
                </div>
              </div>
            </div>
            <div className="py-5 my-5 after:lg:py-20 lg:my-20">
              <div className="lg:grid grid-cols-2 gap-10 items-center">
                <img
                  src="images/black-seo-expert.png"
                  className="pb-10 w-96 mx-auto order-2"
                  alt="Ultimate growth engine."
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                    I Know What I'm Doing
                  </h3>
                  <p>I am a New York SEO specialist.</p>
                  <p>
                    I've honed my skills in SEO (and web development) and have a
                    track record of getting sites ranked.
                  </p>
                  <p>
                    My approach to SEO is holistic, covering everything from
                    keyword research and content creation to technical SEO and
                    link building.
                  </p>
                  <p>
                    I keep up with the latest SEO trends and algorithm changes
                    to ensure my strategies are always practical and relevant. I
                    also know how important it is to communicate clearly and
                    work with my clients to help them reach their goals.
                  </p>
                  <p>
                    When you work with me, you're working with a specialist who
                    knows how to make New York SEO work for your business.
                  </p>
                  <p>
                    When you work with me, you're working with a professional
                    who knows everything there is to know about electrical SEO
                    and how to make it work for your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="py-5 my-5 after:lg:py-20 lg:my-20">
              <div className="lg:grid grid-cols-2 gap-10 items-center">
                <img
                  src="images/chat.png"
                  className="pb-10 w-96 mx-auto"
                  alt="Ultimate growth engine."
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                    I’m All About Open Communication!
                  </h3>
                  <p>
                    Keeping you informed about your SEO campaign at every step
                    is super important to me.
                  </p>
                  <p>
                    I don't just tell you what I'm up to but also why I'm doing
                    it.
                  </p>
                  <p>
                    I'll send you regular, easy-to-understand reports showing
                    what our work is achieving.
                  </p>
                  <p>
                    You'll see all the important stuff—how we're doing on key
                    performance indicators, metrics, and any milestones we've
                    hit.
                  </p>
                  <p>
                    And, if we run into any snags, I'll be straight-up with you
                    about what's going on and how we will fix it.
                  </p>
                  <p>
                    I aim to make the sometimes puzzling world of SEO super
                    clear and easy for you to get. This way, you're not just
                    watching from the sidelines—you're always informed.
                  </p>
                  <p>
                    Being open and honest is all about building a trusting
                    relationship with you.
                  </p>
                  <p>
                    It ensures we're working together in the most genuine way
                    possible!
                  </p>
                </div>
              </div>
            </div>
            <div className="py-5 my-5 after:lg:py-20 lg:my-20">
              <div className="lg:grid grid-cols-2 gap-10 items-center">
                <img
                  src="images/us-vs-competition.png"
                  className="pb-10 w-96 mx-auto order-2"
                  alt="Us vs. the competition."
                />
                <div>
                  <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                    I Don't Work With Your Competition!
                  </h3>
                  <p>My rule is super simple.</p>
                  <p>
                    I won’t work with any other company in your industry in your
                    local area.
                  </p>
                  <p>
                    I’m a big believer in giving my clients my full attention,
                    and that means pouring all my skills and resources into one
                    business per industry in each market area. This way, you
                    know I’m 100% on your side with no divided loyalties.
                  </p>
                  <p>
                    This also means that all the cool strategies, insights, and
                    competitive edges I come up with are yours and yours
                    alone—none of your competitors will get their hands on them!
                  </p>
                  <p>
                    I’m really dedicated to this “one-per-area” approach because
                    it lets me concentrate fully on making sure your business
                    blows the others out of the water in the search engine
                    results!
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center py-12">
              <Link
                href="#diagnosis"
                className="md:text-2xl rounded bg-red-600 py-6 px-6 font-bold text-white hover:bg-red-800"
              >
                Get Your Free SEO Diagnosis
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="container max-w-7xl mx-auto md:py-20 px-6 my-5">
            <h2 className="text-4xl text-center lg:text-6xl font-bold pb-10">
              Meet Your New York SEO Consultant
            </h2>
            <div className="md:grid grid-cols-2 items-center gap-10">
              <div>
                <img
                  src="images/kgb4000.webp"
                  className="w-40 md:w-56 mx-auto rounded-full"
                  alt="Kester Browne, New York SEO Consultant."
                />
                <p className="text-2xl text-center font-bold pb-1 mb-1">
                  Kester Browne
                </p>
                <p className="text-sm text-center pt-0 mt-0">
                  NYC SEO Consultant
                </p>
              </div>
              <div className="md:px-0">
                <p>
                  With over half a decade in the field, Kester isn't just any
                  SEO specialist – he's a passionate advocate for local
                  businesses.
                </p>
                <p>
                  He loves working with local businesses and believes that local
                  businesses are what drive the economy in New York, and the
                  rest of the country.
                </p>
                <p>
                  He enjoys ranking his clients higher in the search engines and
                  boosting revenues for smaller businesses and industries often
                  sidelined by Google’s algorithms.
                </p>
                <p>
                  His experience in both local and national SEO campaigns gives
                  him an advantage over other SEO consultants that usually steer
                  clear of one or the other, putting him in the top tier of
                  search engine optimization professionals in NYC.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="text-center py-12">
              <Link
                href="#diagnosis"
                className="md:text-2xl rounded bg-red-600 py-6 px-6 font-bold text-white hover:bg-red-800"
              >
                Get Your Free SEO Diagnosis
              </Link>
            </div> */}
        </section>
        <section className="bg-slate-50 py-24" id="diagnosis">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl lg:text-6xl font-bold pb-4 text-center">
              Get Your Free SEO Diagnosis
            </h2>
            <p className="text-center px-4">
              Find out why you’re not ranking #1 in Google for your most
              important keywords
            </p>
            <div className="max-w-3xl mx-auto">
              <form className="px-4 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none borderrounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="email"
                    placeholder="Joe@gmail.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="website"
                  >
                    Website
                  </label>
                  <input
                    className="shadow appearance-none rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="website"
                    type="text"
                    placeholder="https://"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Get My SEO Diagnosis
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section id="faq">
          <div className="container max-w-6xl mx-auto px-4 py-5 lg:py-10 my-5">
            <div className="">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-6xl font-bold pb-10">
                  Frequently Asked Questions about New York Local SEO
                </h2>
              </div>
              <div className="lg:grid grid-cols-2 gap-20">
                <div className="py-5">
                  <div>
                    <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                      Why is SEO important for businesses in New York City?
                    </h3>
                    <p>
                      When people search for things on the internet, businesses
                      that use SEO are more likely to show up first, and people
                      usually click on the first thing they see.
                    </p>
                    <p>
                      Showing up in on the first page is crucial for New York
                      businesses.
                    </p>
                    <p>
                      Because many businesses offer the same thing, showing up
                      first will make a huge difference.
                    </p>
                    <p>
                      It helps businesses attract more people and builds trust
                      because people generally trust companies that appear first
                      in searches.
                    </p>
                    <p>
                      And when businesses get more people visiting their sites,
                      it means more customers and more sales.
                    </p>
                    <p>
                      So, in a busy place like New York, SEO helps companies to
                      get noticed, get customers, and grow!
                    </p>
                  </div>
                  <div className="py-5">
                    <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                      How much does Local SEO cost for a New York City business?
                    </h3>
                    <p>
                      The cost of SEO services for New York City businesses can
                      vary widely depending on the scope of the project and the
                      specific needs and goals of the company.
                    </p>
                    <p>
                      On average, small to mid-sized businesses spend between
                      $2,000 and $5,000 monthly on SEO services.
                    </p>
                    <p>
                      Keep in mind that investing in high-quality SEO services
                      can yield a significant return on investment in the long
                      term.
                    </p>
                  </div>

                  <div className="py-5">
                    <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                      How long does it usually take to see results from SEO in
                      NYC?
                    </h3>
                    <p>
                      In a highly competitive market like New York City, seeing
                      tangible results from SEO typically requires time.
                    </p>
                    <p>
                      It can take around three to six months to see results from
                      SEO services, but sometimes it can take longer.
                    </p>
                    <p>
                      It usually depends on the industry, competition, and the
                      current state of the website.
                    </p>
                    <p>
                      Even after initial improvements, continuous effort is
                      crucial to maintain and further enhance the rankings.
                    </p>
                  </div>
                  <div className="py-5">
                    <h3 className="text-2xl font-bold pb-2">
                      Can I manage my own SEO or should I hire a professional?
                    </h3>
                    <p>
                      Managing your SEO is undoubtedly possible, especially if
                      you understand SEO principles well, have the time to
                      dedicate and are willing to learn.
                    </p>
                    <p>
                      Numerous resources and tools are available online to help
                      business owners optimize their websites, improve their
                      content, and build backlinks.
                    </p>
                    <p>
                      However, the learning curve can be steep, and SEO is a
                      long-term, ongoing process that can be time-consuming.
                    </p>
                    <p>
                      On the other hand, hiring a professional or a reputable
                      SEO specialist can be advantageous, especially if you lack
                      the time or expertise to manage your SEO effectively.
                    </p>
                    <p>
                      Professionals bring experience, advanced skills, and
                      industry insights that can help create more refined and
                      practical strategies that address your business's unique
                      needs and goals.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="py-5">
                    <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                      Why is SEO so expensive?
                    </h3>
                    <p>
                      SEO is expensive because of the nature of the work
                      involved and its impact on a business's online presence
                      and profitability.
                    </p>
                    <p>
                      Effective SEO requires deep expertise and continual
                      learning as search engine algorithms are ever-evolving,
                      necessitating professionals to stay abreast of the latest
                      updates and trends.
                    </p>
                    <p>
                      Secondly, SEO is not a one-time task; it demands ongoing
                      efforts in optimizing websites, creating high-quality
                      content, building links, and conducting keyword research,
                      to maintain and improve search engine rankings over time.
                    </p>
                    <p>The upfront costs can be significant.</p>
                    <p>
                      But the long-term benefits, including increased brand
                      credibility, customer trust, and sustained organic
                      traffic, often outweigh the initial investment, rendering
                      SEO a cost-effective strategy in the long run.
                    </p>
                  </div>
                  <div className="py-5">
                    <h3 className="text-2xl lg:text-4xl font-bold pb-2">
                      Should you work with a large digital agency?
                    </h3>
                    <p>
                      You may be contemplating hiring a large digital agency for
                      your SEO needs. While this can be a viable option, it’s
                      crucial to consider the following factors and make an
                      informed decision:
                    </p>
                    <p className="font-bold">Lack of Personalization:</p>
                    <p>
                      Your account may merely be a droplet in an ocean,
                      potentially leading to a decreased personalized service a
                      smaller SEO company might offer.
                    </p>
                    <p className="font-bold">Risk of Becoming a Statistic:</p>
                    <p>
                      There’s a risk of feeling like a mere entry in a long list
                      of clients, rather than a valued partner.
                    </p>
                    <p>
                      This impersonal approach could impact the speed and
                      meticulousness with which your business’s needs are
                      addressed, coupled with the high probability of frequent
                      staff changes.
                    </p>
                    <p className="font-bold">Elevated Costs:</p>
                    <p>
                      The imposing overhead of large SEO companies can
                      inadvertently lead to elevated costs for their clientele.
                      For burgeoning businesses or smaller entities, these
                      enhanced costs might pose financial constraints.
                    </p>
                    <p className="font-bold">Longer Response Times:</p>
                    <p>
                      The larger client lists of bigger agencies might extend
                      the response times to your queries, concerns, or requests.
                      This delay could translate to prolonged wait times for
                      resolutions or actions pertaining to your account.
                    </p>
                    <p className="font-bold">One-Size-Fits-All Approach:</p>
                    <p>
                      The inclination of large SEO agencies to rely on
                      standardized strategies and packages may not align with
                      the diverse needs of every business. A more nuanced,
                      customized approach may be requisite to address your
                      organization’s distinct needs.
                    </p>
                    <p className="font-bold">Lack of Transparency:</p>
                    <p>
                      There might be a cloud of ambiguity surrounding the
                      strategies and methodologies employed by larger SEO firms.
                      This lack of clarity can create uncertainties regarding
                      the efficacy and the nature of the work being executed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-10">
            <Link
              href="#diagnosis"
              className="md:text-2xl rounded bg-red-600 py-6 px-6 font-bold text-white hover:bg-red-800"
            >
              Get Your Free SEO Diagnosis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
