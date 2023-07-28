import Searchbar from "./Searchbar";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { gameList } from "./Utils";

const Header = () => {
  return (
    <header>
      <div className="flex bg-[#28344e]">
        <a className="logo" href="#!">
          <img
            src="https://s-lol-web.op.gg/images/icon/opgglogo.svg?v=1690271849565"
            alt="로고"
            className="w-24 h-11 px-3 float-left bg-[#5383E8] justify-center items-center"
          />
        </a>
        <nav>
          <ul className="flex list-none ">
            {gameList.map((obj, index) => (
              <li
                key={index}
                className={`flex float-left px-3 ${
                  obj.name === "리그오브레전드"
                    ? "bg-[#5383E8] text-white"
                    : "bg-[#28344e] text-[#C3CBD1]"
                }`}
              >
                <a
                  href={obj.href}
                  className="flex h-11 justify-center items-center"
                >
                  <img src={obj.src} alt={obj.name} className=" w-6 h-9" />
                  <span className="text-xs ml-2 text-center justify-center">
                    {obj.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-2 ml-14 mr-5">
          <button>
            <img
              src="https://s-lol-web.op.gg/images/icon/icon-more.svg?v=1690447902108"
              alt="more"
              className="flex"
            />
          </button>
        </div>
        <div className="mt-2.5 mx-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#b4ceff"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2.5 mx-2">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#b4ceff"
              className="w-5 h-5"
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </button>
        </div>
        <div className="flex mt-2 mx-2 ">
          <div className="mt-0.5">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#b4ceff"
                className="w-4.5 h-5"
              >
                <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex ml-1">
            <button type="button" className="mb-2.5 ml-1">
              <span className="text-xs text-[#C3CBD1] ">한국어</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#c2cad6"
                className="flex w-4 h-4 float-right mt-1.5 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div>
            <div className="flex">
              <div className="text-sm text-gray-500 ml-6 mr-6">|</div>
              <button
                type="button"
                className="text-white text-xs mt-1 before:content-none"
              >
                hello
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#c2cad6"
                  className="flex w-4 h-4 float-right mt-0.5 ml-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Searchbar />
      <Navbar />
      <Profile />
    </header>
  );
};

export default Header;
