import Image from "next/image";
import Link from "next/link";

interface CardDetail {
  icon: string;
  title: string;
  label: string;
}
const cardsDetails: CardDetail[] = [
  {
    icon: "/assets/head-time.svg",
    title: "Mon - Sat 9.00 - 18.00",
    label: "Sunday Closed",
  },
  {
    icon: "/assets/email.svg",
    title: "Email",
    label: "contact@logistics.com",
  },
  {
    icon: "/assets/phone.svg",
    title: "Call Us",
    label: "+91 63523 90558",
  },
];
const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50   w-full">
      <div className="flex-center md:flex hidden   bg-darkBlueNav py-2 text-white">
        <Header />
      </div>
      <div className=" ">
        <NavbarMain />
      </div>
    </nav>
  );
};

export default Navbar;

const Header = () => {
  return (
    <div className="flex justify-around items-center mx-auto w-full max-w-screen-2xl md:px-6 xs:px-8 sm:px-16">
      <div className="hidden md:block">
        <Link href="/">
          <Image
            src="/assets/dumy_logo.svg"
            width={120}
            height={120}
            alt="JSM logo"
          />
        </Link>
      </div>

      <ul className=" flex justify-center   max-md:hidden-e md:gap-6 lg:gap-10">
        {cardsDetails.map((item: CardDetail, index: number) => (
          <li
            key={index}
            className="body-text text-gradient_blue-purple-e !font-bold-e text-center"
          >
            <HeaderContactCard details={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

{
  /* <ul className="flex-center gap-x-3 max-md:hidden-e md:gap-x-10">
{cardsDetails.map((item: CardDetail) => (
  <li className="body-text text-gradient_blue-purple-e !font-bold-e">
    <HeaderContactCard
      details={{
        icon: item.icon,
        title: item.title,
        label: item.label,
      }}
    />
  </li>
))}
</ul> */
}
interface HeaderContactCardProps {
  details: CardDetail; // Assuming CardDetail is your interface for the card details
}

const HeaderContactCard: React.FC<HeaderContactCardProps> = ({ details }) => {
  return (
    <div className="flex flex-col-e items-center gap-2 px-2 py-2">
      <div className="w-14 h-14 sm:w-20 sm:h-20 flex items-center p-0 sm:p-4 bg-[#273270] rounded-full">
        <Image
          width={70}
          height={70}
          alt="img-time"
          src={details.icon}
          //  className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="text-left">
        <h2 className="text-sm sm:text-base font-semibold text-white">
          {details.title}
        </h2>
        <p className="text-xs sm:text-sm text-white">{details.label}</p>
      </div>
    </div>
  );
};
const NavbarMain = () => {
  const menues = ["Home", "About", "Exam", "Pages", "Project", "Contact"];
  return (
    <nav className="bg-navGradient ">
      <div className="flex flex-wrap justify-start items-center mx-auto max-w-screen-xl p-4">
        <button
          data-collapse-toggle="mega-menu-full"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          id="mega-menu-full"
          className="items-center p-2 text-white justify-between font-medium hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 rounded-lg bg-transprent md:flex-row md:space-x-8 md:mt-0 md:border-0 text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {menues.map((menu, ind) => {
              return (
                <>
                  {menu === "Exam" ? (
                    <li key={`menu_${ind}`}>
                      <button
                        id="mega-menu-full-dropdown-button"
                        data-collapse-toggle="mega-menu-full-dropdown"
                        className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-white rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                        {menu}
                        <svg
                          className="w-2.5 h-2.5 ml-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                    </li>
                  ) : (
                    <li key={`menu_${ind}`}>
                      <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                        aria-current="page"
                      >
                        {menu}
                      </a>
                    </li>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Exam sub menu */}
      {/* <div
        id="mega-menu-full-dropdown"
        className="mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
          <ul>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with third-party tools that you're already using.
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div> */}
    </nav>
  );
};

{
  /* <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="https://jsmastery.pro/next13" target="_blank">
              demo
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link href="https://jsmastery.pro/masterclass" target="_blank">
              Candid
            </Link>
          </li>
        </ul> */
}
