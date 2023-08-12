const Footer = () => {
  let AccountLinks = [
    { name: "Register", link: "/" },
    { name: "Login", link: "/" },
  ];
  let DiscoverLinks = [
    { name: "Current events", link: "/" },
    { name: "Past events", link: "/" },
    { name: "Organisers", link: "/" },
  ];
  let Logos = [
    { name: "linked in", link: "/" , xmlns:"http://www.w3.org/2000/svg", path:"M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"},
    { name: "github", link: "/" , xmlns:"http://www.w3.org/2000/svg", path:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},
  ];

  return (
    <footer className="bg-[#212121] py-20 pt-10 pb-4 ">
      <div className="justify-content mx-auto w-4/6 gap-8 md:flex flex-col">
        <div className="basis-1/2 md:mt-0 font-semibold text-[#F6F7F8] flex gap-5 items-center border-b-[1px] pb-5 border-b-[#707070]">
          <div>Create your Acoount and partipate in MSIT events.</div>
          <button
            type="button"
            className="inline-block rounded border-2 border-primary-100 px-4 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-primary-accent-100 hover:bg-neutral-500 hover:bg-opacity-10 focus:border-primary-accent-100 focus:outline-none focus:ring-0 active:border-primary-accent-200 dark:text-primary-100 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
          >
            Get Started
          </button>
        </div>

        <div className=" md:flex pb-4 md:pb-4">
          <div className="mt-16 basis-1/2 md:mt-0">
            <ul>
              <h4 className=" text-[#F6F7F8] pb-3">Your Account</h4>
              {AccountLinks.map((link) => (
                <li
                  key={link.name}
                  className=" text-md md:my-0 my-4 text-[#C5C4C4] font-normal text-sm py-2"
                >
                  <a href={link.link} className="font-semibold duration-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 basis-1/2 md:mt-0">
            <ul>
              <h4 className=" text-[#F6F7F8] pb-4 font-medium text-base">Discover</h4>
              {DiscoverLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-md md:my-0 my-4 text-[#C5C4C4] font-normal text-sm py-2"
                >
                  <a href={link.link} className="font-semibold duration-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h4 className=" text-white">Follow us</h4>
          <div className="mb-5 md:mb-9 flex basis-1/2 mt-4 md:mt-4 items-center">
                {
                  Logos.map((anchorlink)=>(
                    <a
                    href={anchorlink.link}
                    className="mr-9 text-neutral-800 dark:text-neutral-200"
                  >
                    <svg
                      xmlns={anchorlink.xmlns}
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={anchorlink.path}/>
                    </svg>
                  </a>
                  ))
                }
          </div>
          <h4 className=" text-[#FFFFFF]">© 2023 Event Handler</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
