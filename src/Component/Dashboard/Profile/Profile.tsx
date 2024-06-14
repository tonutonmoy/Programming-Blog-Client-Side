import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUniversity,
  faMapMarkerAlt,
  faBriefcase,
  faEnvelope,
  faCity,
  faPhone,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Add the icons to the library so you can use them in your project
library.add(
  faUniversity,
  faMapMarkerAlt,
  faBriefcase,
  faEnvelope,
  faCity,
  faPhone,
  faInfoCircle
);

import { gql, useQuery } from "@apollo/client";
import ProfileModal from "./ProfileModal";
import { useState } from "react";
import { Toaster } from "sonner";

const SingleUserGQL = gql`
  query SingleUser {
    singleUser {
      email
      id
      name
      profile {
        bio
        city
        country
        image
        number
      }
    }
  }
`;

const Profile = () => {
  const [modal, setModal] = useState(false);
  const { loading, error, data, refetch } = useQuery(SingleUserGQL);

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  console.log(data?.singleUser, "p");
  return (
    <>
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        onClick={() => setModal(true)}
                        className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1"></div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                    {data?.singleUser?.name}
                  </h3>

                  <section className=" space-y-2 ">
                    <div className="text-sm  leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                      <FontAwesomeIcon
                        icon="envelope"
                        className="mr-2 text-lg text-blueGray-400"
                      />
                      {data?.singleUser?.email}
                    </div>
                    <div className="text-sm  leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                      <FontAwesomeIcon
                        icon="city"
                        className="mr-2 text-lg text-blueGray-400"
                      />
                      {data?.singleUser?.profile?.country}{" "}
                    </div>
                    <div className="text-sm  leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                      <FontAwesomeIcon
                        icon="city"
                        className="mr-2 text-lg text-blueGray-400"
                      />

                      {data?.singleUser?.profile?.city}
                    </div>
                    <div className="text-sm  leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                      <FontAwesomeIcon
                        icon="phone"
                        className="mr-2 text-lg text-blueGray-400"
                      />
                      {data?.singleUser?.profile?.number}
                    </div>
                  </section>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <FontAwesomeIcon
                        icon="info-circle"
                        className="mr-2 text-lg text-blueGray-400"
                      />
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {data?.singleUser?.profile?.bio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {modal && (
            <ProfileModal
              setModal={setModal}
              refetch={refetch}
              name={data?.singleUser?.name}
              country={data?.singleUser?.profile?.country}
              city={data?.singleUser?.profile?.city}
              number={data?.singleUser?.profile?.number}
              bio={data?.singleUser?.profile?.bio}
            />
          )}
          <Toaster position="top-right" />
        </section>
      </main>
    </>
  );
};

export default Profile;
