import Image from "next/image";
import Link from "next/link";

interface CardDetail {
  icon: string;
  title: string;
  label: string;
}
const Navbar = () => {
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

  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2  bg-darkBlueNav py-7 text-white">
      <div className="flex justify-around  mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image src="/assets/logo.svg" width={55} height={40} alt="JSM logo" />
        </Link>

        <Image
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

interface HeaderContactCardProps {
  details: CardDetail; // Assuming CardDetail is your interface for the card details
}

const HeaderContactCard: React.FC<HeaderContactCardProps> = ({ details }) => {
  return (
    <div className="flex items-start gap-3 px-4 py-4">
      <div className="w-[70px] h-[70px] flex items-center p-4 bg-[#273270]  rounded-full">
        <Image width={700} height={700} alt="img-time" src={details.icon} />
      </div>

      <div>
        <div className="flex items-center justify-between mt-3">
          <h2 className="text-sm font-semibold text-white ">{details.title}</h2>
        </div>
        <p className="text-white">{details.label} </p>
      </div>
    </div>
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
