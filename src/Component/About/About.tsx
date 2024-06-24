import Container from "../../SharedComponent/Container";

import photo from "../../assets/About/DSC06901.jpg";
import { AiOutlineMail } from "react-icons/ai";

const About = () => {
  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center">
        <div className="  rounded-lg p-8 md:p-12 lg:p-16 space-y-12">
          <section>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Welcome to our Programming Blog! We're dedicated to providing you
              with the latest tips, tutorials, and insights into the world of
              software development. Whether you're a beginner or an experienced
              programmer, we aim to offer valuable content to help you on your
              coding journey.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Our team of passionate developers and writers works tirelessly to
              bring you articles on a wide range of programming languages,
              tools, and frameworks. We believe in sharing knowledge and
              fostering a community where everyone can learn and grow together.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Thank you for visiting our blog. If you have any questions or
              suggestions, feel free to reach out to us. Happy coding!
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Mission Statement
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              Our mission is to empower developers of all levels by providing
              high-quality, accessible, and up-to-date programming resources. We
              strive to create a welcoming and inclusive environment where
              knowledge is shared freely, and continuous learning is encouraged.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Founded in 2022 by a group of passionate developers, our blog
              started as a small project to document our own learning journeys.
              Over time, it has grown into a platform that reaches thousands of
              readers every month. Our story is one of constant learning,
              collaboration, and the joy of coding.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              From humble beginnings, we've expanded our team and our content
              offerings, but our core mission remains the same: to help
              developers improve their skills and stay updated with the latest
              in technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Core Values
            </h2>
            <ul className="list-disc list-inside space-y-2 text-lg md:text-xl text-gray-700">
              <li>
                <strong>Passion:</strong> We are passionate about technology and
                love sharing our knowledge with others.
              </li>
              <li>
                <strong>Community:</strong> We believe in the power of community
                and the importance of helping each other grow.
              </li>
              <li>
                <strong>Excellence:</strong> We strive to provide high-quality,
                accurate, and useful content.
              </li>
              <li>
                <strong>Inclusivity:</strong> We welcome developers of all
                backgrounds and experience levels.
              </li>
              <li>
                <strong>Continuous Learning:</strong> We embrace the
                ever-evolving nature of technology and are committed to
                continuous learning.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Meet the Team
            </h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
                <div className="bg-gray-200 rounded-lg p-4">
                  <img
                    src={photo}
                    alt="Team Member"
                    className="w-full object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800">Tonmoy</h3>
                  <p className="text-gray-600">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              We'd love to hear from you! Whether you have questions,
              suggestions, or just want to say hi, feel free to reach out to us.
            </p>
            <p className="text-lg flex items-center gap-2 md:text-xl text-gray-700">
              <AiOutlineMail className=" md:text-2xl bg-green-400 text-white rounded-xl w-[50px] h-[30px] p-1" />
              :
              <a
                href="mailto:www.tonutonmoy12@gmail.com"
                className="text-green-500"
              >
                www.tonutonmoy12@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default About;
