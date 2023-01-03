import React from "react";
import { ReactDOM } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ProfilePhoto from "./ProfilePhoto";

function ProfileCard() {
  return (
    <div className="flex max-w-5xl rounded-md border-2 border-neutral-600">
      <ProfilePhoto />
      <div className="flex w-full flex-col justify-center gap-3 pr-8 pl-3">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default ProfileCard;
