import ServicesV11 from '@/components/homepage-12/ServicesV11'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'AI Solutions Services',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Services"
        title="AI Solutions That Deliver Impact"
        italicTitle=""
        description="We build AI solutions that streamline operations and drive revenue growth. Discover our comprehensive range of AI services designed to transform your business."
      />
      <ServicesV11 />
      <CTA>
        Ready to Transform Your Business?
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/08.png' },
            { id: '2', img: '/images/agent/09.png' },
            { id: '3', img: '/images/agent/10.png' },
          ]}
        />
        Let's discuss your AI needs.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default ServicesPage
