import { notFound, redirect } from 'next/navigation';
import HomePage from '@/site-pages/index';
import AboutPage from '@/site-pages/about-us';
import ContactPage from '@/site-pages/contact-us';
import AirportTransfersPage from '@/site-pages/airport-transfers';
import GatwickPage from '@/site-pages/airport-transfers/gatwick';
import HeathrowPage from '@/site-pages/airport-transfers/heathrow';
import StanstedPage from '@/site-pages/airport-transfers/stansted';
import LutonPage from '@/site-pages/airport-transfers/luton';
import LondonCityPage from '@/site-pages/airport-transfers/london-city';
import ServicesPage from '@/site-pages/services';
import FaqPage from '@/site-pages/faq';
import AreasPage from '@/site-pages/areas-we-cover';
import HenfieldPage from '@/site-pages/areas-we-cover/henfield';
import AreaLocationPage from '@/site-pages/areas-we-cover/location';
import { area_locations } from '@/content';
import { getHubPosts, getHubPost } from '@/lib/blog-hub';
import { getPostBySlug } from '@/lib/blog';
import TermsPage from '@/site-pages/terms-conditions';
import BlogPage from '@/site-pages/blog/index';
import BlogPostPage from '@/site-pages/blog/[slug]';
import OfferPage from '@/site-pages/lp/airport-transfers-offer';

export default async function RoutePage({ params }: { params: Promise<{ path?: string[] }> }) {
  const { path = [] } = await params;
  const route = `/${path.join('/')}`;
  if (route === '/our-services') redirect('/services');
  if (route === '/henfield-to-gatwick-transfers') redirect('/airport-transfers/gatwick');
  const Page = ({
    '/': HomePage,
    '/about-us': AboutPage,
    '/contact-us': ContactPage,
    '/airport-transfers': AirportTransfersPage,
    '/airport-transfers/gatwick': GatwickPage,
    '/airport-transfers/heathrow': HeathrowPage,
    '/airport-transfers/stansted': StanstedPage,
    '/airport-transfers/luton': LutonPage,
    '/airport-transfers/london-city': LondonCityPage,
    '/services': ServicesPage,
    '/faq': FaqPage,
    '/areas-we-cover': AreasPage,
    '/areas-we-cover/henfield': HenfieldPage,
    '/terms-conditions': TermsPage,
    '/blog': BlogPage,
    '/lp/airport-transfers-offer': OfferPage,
  } as Record<string, React.ComponentType>)[route];
  if (route === '/blog') return <BlogPage hubPosts={await getHubPosts()} />;
  if (route.startsWith('/blog/') && path.length === 2) {
    const hubPost = await getHubPost(path[1]);
    if (!hubPost && !getPostBySlug(path[1])) notFound();
    return <BlogPostPage hubPost={hubPost} />;
  }
  if (!Page && path[0] === 'areas-we-cover' && path.length === 2) {
    const location = area_locations.locations.find((l) => l.slug === path[1]);
    if (location) return <AreaLocationPage location={location} />;
  }
  if (!Page) notFound();
  return <Page />;
}
