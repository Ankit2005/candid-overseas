import Image from "next/image";

const BestInWorld = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-4 px-2 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow-2xl my-5">
          <div>
            <h1 className="font-bold text-primary text-4xl my-4">
              Maximize Your Potential through PTE Excellence
            </h1>
            <p className="text-secondaryText">
              {" "}
              Our PTE coaching empowers Indian students for success in
              international education, offering comprehensive preparation for
              the PTE test and essential language skills vital for academic
              achievement in a fast-paced world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 shadow-2xl my-5">
              <div className="flex space-x-4">
                <div>
                  <Image
                    src="/assets/tropy.svg"
                    alt="tropy"
                    height={50}
                    width={50}
                  />
                </div>
                <div>
                  {/* <p className="text-primary font-bold ">17+</p> */}
                  <p className="text-primary">
                    Expert guidance tailored to individual needs
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div>
                  <Image
                    src="/assets/two_user_green.svg"
                    alt="tropy"
                    height={50}
                    width={50}
                  />
                </div>
                <div>
                  {/* <p className="text-primary font-bold ">23+</p> */}
                  <p className="text-primary">
                    Comprehensive coverage of all PTE modules
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div>
                  <Image
                    src="/assets/smiley.svg"
                    alt="tropy"
                    height={50}
                    width={50}
                  />
                </div>
                <div>
                  {/* <p className="text-primary font-bold ">183+</p> */}
                  <p className="text-primary">
                    Proven strategies for tackling the exam effectively
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div>
                  <Image
                    src="/assets/briefcase.svg"
                    alt="tropy"
                    height={50}
                    width={50}
                  />
                </div>
                <div>
                  {/* <p className="text-primary font-bold ">315+</p> */}
                  <p className="text-primary">
                    Access to cutting-edge resources and practice materials
                  </p>
                </div>
              </div>

              <div></div>
            </div>
          </div>

          <div>
            <Image
              src="/assets/pte_image_one.svg"
              alt="image"
              height={300}
              width={350}
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default BestInWorld;
