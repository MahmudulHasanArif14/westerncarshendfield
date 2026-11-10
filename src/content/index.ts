import about from './site-content/about.json';
import airport_gatwick from './site-content/airport_gatwick.json';
import airport_heathrow from './site-content/airport_heathrow.json';
import airport_london_city from './site-content/airport_london_city.json';
import airport_luton from './site-content/airport_luton.json';
import airport_stansted from './site-content/airport_stansted.json';
import airport_transfers from './site-content/airport_transfers.json';
import area_henfield from './site-content/area_henfield.json';
import areas from './site-content/areas.json';
import area_locations from './site-content/area_locations.json';
import blog_listing from './site-content/blog_listing.json';
import contact from './site-content/contact.json';
import faq from './site-content/faq.json';
import home from './site-content/home.json';
import lp_airport_transfers_offer from './site-content/lp_airport_transfers_offer.json';
import services from './site-content/services.json';
import terms_conditions from './site-content/terms_conditions.json';
import gatwick_transfers from './site-content/gatwick_transfers.json';
import our_services from './site-content/our_services.json';
import henfieldToGatwickTaxi from './data/blog/henfield-to-gatwick-taxi.json';
import henfieldToHeathrowTransfers from './data/blog/henfield-to-heathrow-transfers.json';

export const pages = {
  about, airport_gatwick, airport_heathrow, airport_london_city,
  airport_luton, airport_stansted, airport_transfers, area_henfield,
  areas, blog_listing, contact, faq, home, lp_airport_transfers_offer,
  services, terms_conditions, gatwick_transfers, our_services,
};

export const data = {
  blog: [henfieldToGatwickTaxi, henfieldToHeathrowTransfers],
};

export const landingPages: unknown[] = [];

export {
  about,
  airport_gatwick,
  airport_heathrow,
  airport_london_city,
  airport_luton,
  airport_stansted,
  airport_transfers,
  area_henfield,
  area_locations,
  areas,
  blog_listing,
  contact,
  faq,
  home,
  lp_airport_transfers_offer,
  services,
  terms_conditions,
  gatwick_transfers,
  our_services,
};
