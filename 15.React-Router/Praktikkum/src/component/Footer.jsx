const Footer = () => {
  return (
    <>
      <footer className="bg-white pt-20">
        <div className="flex justify-between items-start mx-5">
          <div className="w-full">
            <h3 className="text-[#37517e] text-2xl font-bold">ARSHA</h3>
            <p className="mt-4 text-[14px] leading-6">
              A108 Adam Street
              <br />
              New York, NY 535022
              <br />
              United States
              <br />
              <br />
              <strong>Phone:</strong> +1 5589 55488 55
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </div>
          <div className="w-full">
            <h4 className="text-[#37517e] text-base font-bold">Useful Links</h4>
            <ul className="list-none mt-4 space-y-4 text-[14px]">
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h4 className="text-[#37517e] text-base font-bold">Our Services</h4>
            <ul className="list-none mt-4 space-y-4 text-[14px]">
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-[#777777] hover:underline">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>
          <div className="max-w-full">
            <h4 className="text-[#37517e] text-base font-bold">
              Our Social Networks
            </h4>
            <p className="mt-4 text-[14px] w-80">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div className="flex gap-3 mt-4 text-[#47b2e4] text-[28px]">
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#37517e] h-[81px]  mt-8">
          <p className="text-white text-[14px] ml-20">
            © Copyright <strong>Arsha</strong>. All Rights Reserved
          </p>
          <p className="text-white text-[14px] mr-20">
            Designed by{" "}
            <a href="#" className="text-[#47b2e4]">
              BootstrapMade
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
