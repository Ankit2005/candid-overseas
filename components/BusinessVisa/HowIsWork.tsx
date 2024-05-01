import Image from "next/image";

const HowIsWork = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div>
          <h1 className="text-black font-bold text-xl my-2 ">
            Why Business Visa Consultation Is Important ?
          </h1>
          <p className="text-[#666C89]">
            In today's globalized business landscape, crossing borders is easier
            than ever. Our business visa consultancy is crucial for Indian
            entrepreneurs seeking global success. We firmly believe that a
            well-managed visa process is key to a successful international
            business journey. A business visa not only ensures legal entry but
            opens doors to global opportunities and establishes a credible
            presence in the international business arena.
          </p>
        </div>

        <div className="container mx-auto p-4">
          <div className="lg:flex">
            <div className="w-full lg:w-6/12 px-4 ">
              <div className="bg-white p-4 text-[#666C89]">
                <ol
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  data-aos-duration="2000"
                  className="list-disc pl-2 mt-4"
                >
                  <li>Self Assessment</li>
                  <li>Submit an Expression of Interest (EOI)</li>
                  <li>Receive an Invitation to Apply (ITA)</li>
                  <li>
                    If you have 160 points or more you’ll be selected from the
                    EOI pool and may be sent an ITA
                  </li>
                  <li>Submit a resident application</li>
                  <li>if successful, you’ll be issued a resident visa</li>
                </ol>
              </div>
              <div className="text-[#666C89] my-10">
                <p text-black font-bold text-xl>
                  Long term skill shortage list
                </p>
                <p>
                  Duis semper lacus scelerisque, aliquam leo quis, porttitor
                  leo. Etiam lobortis dapibus libero vel porttitor. Nulla tempor
                  elit nec feugiat tempus.Phasellus at quam id elit hendrerit
                  semper feugiat id nunc. Morbi quis justo velit. Duis semper
                  lacus scelerisque, aliquam leo quis, porttitor leo. Fusce
                  lectus ex, pretium efficitur suscipit sed, faucibus vel elit
                  Integer adipiscing erat eget risus sollicitudin pellentesque
                  non erat. Maecenas nibh dolor malesuada sagittis accumsan
                  ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt
                  nunc{" "}
                </p>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4 ">
              <div className="bg-white p-4">
                <Image
                  src="/assets/howiswork.svg"
                  className=" rounded-md"
                  width={600}
                  height={400}
                  alt="candid logo"
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-4 border-gray-400 border-t-2"></hr>
        <div className="lg:flex">
          <div className="w-full lg:w-6/12 px-4 ">
            <div className="bg-white p-4">
              <Image
                src="/assets/howiswork.svg"
                className=" rounded-md"
                width={500}
                height={200}
                alt="candid logo"
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4 ">
            <div className="bg-white p-4 text-[#666C89] flex  justify-end">
              <h1 className="text-black  font-bold text-xl">How it works</h1>
            </div>
            <div className="text-[#666C89] my-10">
              <p text-black font-bold text-xl>
                Duis semper lacus scelerisque, aliquam leo quis, porttitor leo.
                Etiam lobortis dapibus libero vel porttitor. Nulla tempor elit
                nec feugiat tempus.Phasellus at quam id elit hendrerit semper
                feugiat id nunc. Morbi quis justo velit. Duis semper lacus
                scelerisque, aliquam leo quis, porttitor leo. Fusce lectus ex,
                pretium efficitur suscipit sed, faucibus vel elit Integer
                adipiscing erat eget risus sollicitudin pellentesque non erat.
                Maecenas nibh dolor malesuada sagittis accumsan ipsum.
                Pellentesque ultrices ultrices sapien, nec tincidunt nunc
                posuere.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HowIsWork;
