import Image from "next/image";
import { useEffect, useState } from "react";
import Icons from "./Icons";
import pro3 from "../../public/pro2.jpg";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const style = {
  header: "fixed inset-0 z-50 flex h-14 bg-[#1a1a1b]",
  wrapper: "flex flex-1 items-center space-x-4 border-b border-[#343536] px-5",
  leftHeader: "flex flex-1 items-center space-x-4",
  rightHeader: "flex items-center space-x-4",
  profileImageContainer:
    "flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full relative",
  profileImage: "object-cover",
};

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.leftHeader}>
          <Logo />
          <SearchBar />
        </div>
        <div className={style.rightHeader}>
          <Icons />

          <button>
            <div className={style.profileImageContainer}>
              <Image
                className={style.profileImage}
                src="https://i.pinimg.com/564x/f9/c9/1a/f9c91a4f7d5d2d2f632c896812f28e3b.jpg"
                layout="fill"
                alt="Profile Image"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
