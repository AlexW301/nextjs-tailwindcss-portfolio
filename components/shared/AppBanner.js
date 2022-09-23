import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";

function AppBanner() {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col items-center mt-5 sm:justify-between sm:flex-row md:mt-2"
    >
      <div className="w-full text-left md:w-1/2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="text-2xl text-center uppercase font-general-semibold lg:text-3xl xl:text-4xl sm:text-left text-[#366173]  dark:text-primary-light"
        >
          Hi, Iam Jared Macuso
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-4 text-lg leading-normal text-center text-gray-500 font-general-medium md:text-xl lg:text-2xl xl:text-3xl sm:text-left dark:text-gray-200"
        >
          A Professional Videographer & Photographer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block"
        >
          <Link href="#projects" passHref>
            <a className="font-general-medium cursor-pointer flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border bg-[#366173] hover:bg-[#264a5a] py-2.5 sm:py-3 shadow-lg rounded-lg text-white duration-500">
              <span className="text-sm duration-100 sm:text-lg">My Work</span>
            </a>
          </Link>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex items-center justify-center w-full mt-8 sm:w-1/2 sm:mt-0"
      >
        {/* <img
					layout="responsive"
					src={
						activeTheme === 'dark'
							? '/images/jared-headshot.jpg'
							: '/images/developer-dark.svg'
					}
					alt="Developer"
				/> */}

        <Image
          src={`/images/jared-headshot-square.jpg`}
          className={`rounded-xl`}
          height={1275 / 3}
          width={1275 / 3}
          alt={`Jared Mancuso`}
        />
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
