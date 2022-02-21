import ProfileCard from "./ProfileCard";

const ProfileList = () => {
  return (
    <div className="Gbemi-container border-bottom">
      <h5 className="my-3 py-3">People you may know</h5>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

export default ProfileList;
