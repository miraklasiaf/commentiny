import { PLATFORM_URL } from './utils/constants';

const title = 'Commentiny';
const description =
  'The easiest way to add comments or reviews to your static site.';

const SEO = {
  title,
  description,
  canonical: `${PLATFORM_URL}`,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: `${PLATFORM_URL}`,
    title,
    description,
    images: [
      {
        url: `${PLATFORM_URL}/static/images/og.png`,
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;
