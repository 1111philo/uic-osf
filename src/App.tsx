import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { WordPressPartnership } from './components/WordPressPartnership';
import { Projects } from './components/Projects';
import { Bounties } from './components/Bounties';
import { PartnershipSolicitation } from './components/PartnershipSolicitation';
import { WhatIsOpenSource } from './components/WhatIsOpenSource';

function App() {
  const scrollToBounties = () => {
    const bountiesSection = document.getElementById('bounties-section');
    if (bountiesSection) {
      bountiesSection.scrollIntoView({ behavior: 'smooth' });
      // You might want to pass the projectId to the Bounties component to auto-filter
      // For now, we just scroll. To implement auto-filter, we'd need to lift state up or use a context/url param.
      // Given the requirements, simple scrolling is the primary request, filtering is secondary interaction.
      // But "That button will scroll to the next seection: an aggrigation of bounties that can be filtered by Project or tag."
      // It implies the button just scrolls. The user can then filter.
    }
  };

  return (
    <Layout>
      <Hero />
      <WordPressPartnership />
      <Projects onScrollToBounties={scrollToBounties} />
      <Bounties />
      <PartnershipSolicitation />
      <WhatIsOpenSource />
    </Layout>
  );
}

export default App;
