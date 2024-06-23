import Container from "./Container";
import logo from "../assets/logo/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-400 to-green-500 text-white border-t pt-12 pb-32 px-4 lg:px-0">
      <Container>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-2/5 space-y-10">
            <div>
              <img
                className=" w-[100px] h-[20px]  md:w-[250px] md:h-[30px]  "
                src={logo}
                alt="logo"
              />
            </div>
            <p className="text-gray-100 hidden lg:block p-0 lg:pr-12">
              Boisterous he on understood attachment as entreaties ye
              devonshire. In mile an form snug were been sell. Extremely ham any
              his departure for contained curiosity defective. Way now
              instrument had eat diminution melancholy expression sentiments
              stimulated.
            </p>
          </div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
            <h6 className="font-semibold text-gray-100 mb-4">Company</h6>
            <ul>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
            <h6 className="font-semibold text-gray-100 mb-4">Content</h6>
            <ul>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
            <h6 className="font-semibold text-gray-100 mb-4">Company</h6>
            <ul>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-100 py-2">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
