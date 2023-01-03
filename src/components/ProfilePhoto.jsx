import React from "react";
import photo from "../assets/profile.jpg";

function ProfilePhoto() {
  return (
    <div className="m-8 flex w-6/12 items-center justify-center">
      <img
        src={photo}
        alt="Profile Photo"
        className="rounded-full border-4 border-neutral-600"
      />
    </div>
  );
}

export default ProfilePhoto;
