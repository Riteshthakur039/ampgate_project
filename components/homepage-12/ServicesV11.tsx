import { MarkdownData } from '@/interface'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const businessSolutionServices: MarkdownData[] = getMarkDownData('data/ai-solutions/services').sort(
  //@ts-ignore
  (a, b) => a.serialNumber - b.serialNumber,
)

const sliceOne = businessSolutionServices.slice(0, 3)
const sliceTwo = businessSolutionServices.slice(3, 6)
const sliceThree = businessSolutionServices.slice(6, 9)

const ServicesV11 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                Ampgate Labs
                <i className="font-instrument">— AI Services That Deliver Impact </i>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                We build AI solutions that streamline operations and drive revenue growth.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/ai-solutions/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Explore AI Services</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Explore AI Services</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center px-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark [&>*]:border-y dark:[&>*]:border-y-dark">
        {/* Service Card1 */}
        {sliceOne.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <span>
                  {/* Icon 1 (Brain/AI) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 60 60" fill="none">
                    <rect width={40} height={40} className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      d="M15 20C15 16.6863 17.6863 14 21 14H39C42.3137 14 45 16.6863 45 20V25C45 28.3137 42.3137 31 39 31H21C17.6863 31 15 28.3137 15 25V20Z"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 31V40C21 43.3137 23.6863 46 27 46H33C36.3137 46 39 43.3137 39 40V31"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="25" cy="22" r="2" className="fill-secondary dark:fill-backgroundBody" />
                    <circle cx="35" cy="22" r="2" className="fill-secondary dark:fill-backgroundBody" />
                    <path
                      d="M25 37H35"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
                <p>{service.description}</p>
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
                <span>
                  {/* Icon 1 (Brain/AI) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 60 60" fill="none">
                    <rect width={40} height={40} className="fill-secondary dark:fill-backgroundBody" />
                    <path
                      d="M15 20C15 16.6863 17.6863 14 21 14H39C42.3137 14 45 16.6863 45 20V25C45 28.3137 42.3137 31 39 31H21C17.6863 31 15 28.3137 15 25V20Z"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 31V40C21 43.3137 23.6863 46 27 46H33C36.3137 46 39 43.3137 39 40V31"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="25" cy="22" r="2" className="fill-backgroundBody dark:fill-secondary" />
                    <circle cx="35" cy="22" r="2" className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      d="M25 37H35"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <h5 className="mb-3 mt-6 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                  {service.title}
                </h5>
                <p className="mb-8 text-backgroundBody dark:text-secondary">{service.description}</p>
                <Link
                  href={`/ai-solutions/services/${service.slug}`}
                  className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
                  <div className="rv-button-top flex items-center gap-2">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-backgroundBody dark:stroke-secondary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rv-button-bottom flex items-center">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-secondary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
      {/* second Card Container */}
      <div className="flex flex-wrap justify-center px-5 max-lg:mt-5 max-lg:gap-5 xl:px-5 max-xl:[&>*:first-child]:border-r dark:max-xl:[&>*:first-child]:border-dark [&>*:last-child]:border-x dark:[&>*:last-child]:border-x-dark [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark max-xl:[&>*:nth-child(2)]:border-r dark:max-xl:[&>*:nth-child(2)]:border-dark max-2xl:[&>*:nth-child(3)]:border-r dark:max-2xl:[&>*:nth-child(3)]:border-dark max-lg:[&>*]:border-y max-lg:dark:[&>*]:border-y-dark lg:[&>*]:border-b lg:dark:[&>*]:border-b-dark">
        {/* Service Card v2 */}
        {sliceTwo.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <span>
                  {/* Icon 2 (Workflow/Process) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 60 60" fill="none">
                    <rect width={40} height={40} className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      d="M9.61413 20.7855C9.25894 20.9986 9.14377 21.4593 9.35688 21.8144C9.56999 22.1696 10.0307 22.2848 10.3859 22.0717L9.61413 20.7855ZM24.2857 12.8571L24.7357 12.2571C24.4918 12.0742 24.1613 12.0571 23.8998 12.214L24.2857 12.8571ZM35.7143 21.4286L35.2643 22.0286C35.5379 22.2338 35.9157 22.2279 36.1828 22.0142L35.7143 21.4286ZM50.4685 10.5857C50.792 10.3269 50.8444 9.85493 50.5857 9.53148C50.3269 9.20803 49.8549 9.15559 49.5315 9.41435L50.4685 10.5857ZM46.3929 50C46.3929 50.4142 46.7286 50.75 47.1429 50.75C47.5571 50.75 47.8929 50.4142 47.8929 50H46.3929ZM47.8929 27.1429C47.8929 26.7286 47.5571 26.3929 47.1429 26.3929C46.7286 26.3929 46.3929 26.7286 46.3929 27.1429H47.8929ZM23.5357 50C23.5357 50.4142 23.8715 50.75 24.2857 50.75C24.6999 50.75 25.0357 50.4142 25.0357 50H23.5357ZM25.0357 27.1429C25.0357 26.7286 24.6999 26.3929 24.2857 26.3929C23.8715 26.3929 23.5357 26.7286 23.5357 27.1429H25.0357ZM34.9643 50C34.9643 50.4142 35.3001 50.75 35.7143 50.75C36.1285 50.75 36.4643 50.4142 36.4643 50H34.9643ZM36.4643 35.7143C36.4643 35.3001 36.1285 34.9643 35.7143 34.9643C35.3001 34.9643 34.9643 35.3001 34.9643 35.7143H36.4643ZM12.1071 50C12.1071 50.4142 12.4429 50.75 12.8571 50.75C13.2714 50.75 13.6071 50.4142 13.6071 50H12.1071ZM13.6071 35.7143C13.6071 35.3001 13.2714 34.9643 12.8571 34.9643C12.4429 34.9643 12.1071 35.3001 12.1071 35.7143H13.6071ZM10.3859 22.0717L24.6716 13.5003L23.8998 12.214L9.61413 20.7855L10.3859 22.0717ZM23.8357 13.4571L35.2643 22.0286L36.1643 20.8286L24.7357 12.2571L23.8357 13.4571ZM36.1828 22.0142L50.4685 10.5857L49.5315 9.41435L35.2458 20.8429L36.1828 22.0142ZM47.8929 50V27.1429H46.3929V50H47.8929ZM25.0357 50V27.1429H23.5357V50H25.0357ZM36.4643 50V35.7143H34.9643V50H36.4643ZM13.6071 50V35.7143H12.1071V50H13.6071Z"
                      className="fill-secondary dark:fill-backgroundBody"
                    />
                  </svg>
                </span>
                <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
                <p>{service.description}</p>
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
                <span>
                  {/* Icon 2 (Workflow/Process) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 60 60" fill="none">
                    <rect width={40} height={40} className="fill-secondary dark:fill-backgroundBody" />
                    <path
                      d="M9.61413 20.7855C9.25894 20.9986 9.14377 21.4593 9.35688 21.8144C9.56999 22.1696 10.0307 22.2848 10.3859 22.0717L9.61413 20.7855ZM24.2857 12.8571L24.7357 12.2571C24.4918 12.0742 24.1613 12.0571 23.8998 12.214L24.2857 12.8571ZM35.7143 21.4286L35.2643 22.0286C35.5379 22.2338 35.9157 22.2279 36.1828 22.0142L35.7143 21.4286ZM50.4685 10.5857C50.792 10.3269 50.8444 9.85493 50.5857 9.53148C50.3269 9.20803 49.8549 9.15559 49.5315 9.41435L50.4685 10.5857ZM46.3929 50C46.3929 50.4142 46.7286 50.75 47.1429 50.75C47.5571 50.75 47.8929 50.4142 47.8929 50H46.3929ZM47.8929 27.1429C47.8929 26.7286 47.5571 26.3929 47.1429 26.3929C46.7286 26.3929 46.3929 26.7286 46.3929 27.1429H47.8929ZM23.5357 50C23.5357 50.4142 23.8715 50.75 24.2857 50.75C24.6999 50.75 25.0357 50.4142 25.0357 50H23.5357ZM25.0357 27.1429C25.0357 26.7286 24.6999 26.3929 24.2857 26.3929C23.8715 26.3929 23.5357 26.7286 23.5357 27.1429H25.0357ZM34.9643 50C34.9643 50.4142 35.3001 50.75 35.7143 50.75C36.1285 50.75 36.4643 50.4142 36.4643 50H34.9643ZM36.4643 35.7143C36.4643 35.3001 36.1285 34.9643 35.7143 34.9643C35.3001 34.9643 34.9643 35.3001 34.9643 35.7143H36.4643ZM12.1071 50C12.1071 50.4142 12.4429 50.75 12.8571 50.75C13.2714 50.75 13.6071 50.4142 13.6071 50H12.1071ZM13.6071 35.7143C13.6071 35.3001 13.2714 34.9643 12.8571 34.9643C12.4429 34.9643 12.1071 35.3001 12.1071 35.7143H13.6071ZM10.3859 22.0717L24.6716 13.5003L23.8998 12.214L9.61413 20.7855L10.3859 22.0717ZM23.8357 13.4571L35.2643 22.0286L36.1643 20.8286L24.7357 12.2571L23.8357 13.4571ZM36.1828 22.0142L50.4685 10.5857L49.5315 9.41435L35.2458 20.8429L36.1828 22.0142ZM47.8929 50V27.1429H46.3929V50H47.8929ZM25.0357 50V27.1429H23.5357V50H25.0357ZM36.4643 50V35.7143H34.9643V50H36.4643ZM13.6071 50V35.7143H12.1071V50H13.6071Z"
                      className="fill-backgroundBody dark:fill-secondary"
                    />
                  </svg>
                </span>
                <h5 className="mb-3 mt-6 text-4xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                  {service.title}
                </h5>
                <p className="mb-8 text-backgroundBody dark:text-secondary">{service.description}</p>
                <Link
                  href={`/ai-solutions/services/${service.slug}`}
                  className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
                  <div className="rv-button-top flex items-center gap-2">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-backgroundBody dark:stroke-secondary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rv-button-bottom flex items-center">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-secondary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>

      {/* third Card Container */}
      <div className="mt-5 flex flex-wrap justify-center gap-5 px-5 xl:px-5 [&>*:not(:last-child)]:border-l dark:[&>*:not(:last-child)]:border-l-dark [&>*]:border-y dark:[&>*]:border-y-dark">
        {/* Service Card v3 */}
        {sliceThree.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="group relative min-h-[410px] w-full overflow-hidden md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[390px]">
            <div>
              {/* Front Side */}
              <div className="absolute h-full w-full flex-1 translate-y-0 px-[30px] py-10 opacity-100 transition-all duration-700 group-hover:-translate-y-full group-hover:opacity-0">
                <span>
                  {/* Icon 3 (Users/Community) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 60 60" fill="none">
                    <rect width={40} height={40} className="fill-backgroundBody dark:fill-secondary" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.0011 16.6657C30.0011 20.3471 27.0166 23.3314 23.335 23.3314C19.6535 23.3314 16.6689 20.3471 16.6689 16.6657C16.6689 12.9843 19.6535 10 23.335 10C27.0166 10 30.0011 12.9843 30.0011 16.6657Z"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36.6673 40.6654C36.6673 45.8083 30.6983 49.9997 23.3322 49.9997C15.9661 49.9997 10 45.8197 10 40.6654C10 35.5111 15.9689 31.334 23.3351 31.334C30.7012 31.334 36.6673 35.5111 36.6673 40.6654Z"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M44.1125 22.8897C44.1125 25.0988 42.3216 26.8897 40.1123 26.8897C37.903 26.8897 36.1121 25.0988 36.1121 22.8897C36.1121 20.6805 37.903 18.8896 40.1123 18.8896C41.1732 18.8896 42.1907 19.3111 42.9409 20.0612C43.6911 20.8114 44.1125 21.8288 44.1125 22.8897Z"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M41.9995 47.3333C46.0391 47.6649 49.5989 44.6977 50 40.6647C49.5975 36.6328 46.038 33.6672 41.9995 33.999"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="mb-4 mt-9 text-4xl leading-[1.2] -tracking-[1.08px]">{service.title}</h5>
                <p>{service.description}</p>
              </div>
              {/* Hover Back Side */}
              <div className="absolute z-10 h-full w-full flex-1 translate-y-full bg-secondary px-[30px] py-12 transition-all duration-700 group-hover:inset-0 group-hover:translate-y-0 dark:bg-backgroundBody">
                <span>
                  {/* Icon 3 (Users/Community) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 60 60" fill="none">
                    <rect width={40} height={40} className="fill-secondary dark:fill-backgroundBody" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.0011 16.6657C30.0011 20.3471 27.0166 23.3314 23.335 23.3314C19.6535 23.3314 16.6689 20.3471 16.6689 16.6657C16.6689 12.9843 19.6535 10 23.335 10C27.0166 10 30.0011 12.9843 30.0011 16.6657Z"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M36.6673 40.6654C36.6673 45.8083 30.6983 49.9997 23.3322 49.9997C15.9661 49.9997 10 45.8197 10 40.6654C10 35.5111 15.9689 31.334 23.3351 31.334C30.7012 31.334 36.6673 35.5111 36.6673 40.6654Z"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M44.1125 22.8897C44.1125 25.0988 42.3216 26.8897 40.1123 26.8897C37.903 26.8897 36.1121 25.0988 36.1121 22.8897C36.1121 20.6805 37.903 18.8896 40.1123 18.8896C41.1732 18.8896 42.1907 19.3111 42.9409 20.0612C43.6911 20.8114 44.1125 21.8288 44.1125 22.8897Z"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M41.9995 47.3333C46.0391 47.6649 49.5989 44.6977 50 40.6647C49.5975 36.6328 46.038 33.6672 41.9995 33.999"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h5 className="mb-3 mt-6 text-3xl leading-[1.2] -tracking-[1.08px] text-backgroundBody dark:text-secondary">
                  {service.title}
                </h5>
                <p className="mb-8 text-backgroundBody dark:text-secondary">{service.description}</p>
                <Link
                  href={`/ai-solutions/services/${service.slug}`}
                  className="rv-button rv-button-sm-v2 rv-button-secondary-v2">
                  <div className="rv-button-top flex items-center gap-2">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-backgroundBody dark:stroke-secondary"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="rv-button-bottom flex items-center">
                    <span className="text-nowrap">Learn More</span>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none">
                        <path
                          d="M1 12.5L13 0.5M13 0.5H3.25M13 0.5V10.25"
                          className="stroke-secondary dark:stroke-backgroundBody"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default ServicesV11
