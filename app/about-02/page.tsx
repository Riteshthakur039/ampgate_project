import AboutHero from '@/components/aboutpage-02/AboutHero'
import TeamGallery from '@/components/aboutpage-02/TeamGallery'
import ClientsV3 from '@/components/shared/ClientsV3'
import ServicesV6 from '@/components/shared/ServicesV6'
import PageHero from '@/components/shared/PageHero'
import CtaV2 from '@/components/shared/CtaV2'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'
import SkewMarquee from '@/components/shared/SkewMarquee'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'About-02',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <AboutHero />
      <Video />
      <PageHero
        title="About Our Company"
        italicTitle=""
        badgeTitle="About"
        spacing="pt-10 sm:pt-16 md:pt-[100px] mb-10 lg:mb-20"
      />
      <SkewMarquee />
      <ServicesV6 />
      <TeamGallery />
      <ClientsV3 />
      <FaqV2 />
      <CtaV2 />
    </LayoutOne>
  )
}

export default AboutPage
