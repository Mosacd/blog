import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar";

const ProfileCard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl flex flex-col items-center dark:bg-neutral-900 mt-10">
          <Avatar className="w-16 h-16">
  <AvatarImage src="" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
      <h2 className="text-xl font-bold text-center mt-4">Jane Doe</h2>
      <p className="text-gray-600 text-center dark:text-white mt-2">
        Tech enthusiast, software engineer, and avid blogger. Passionate about AI, web development, and the future of technology.
      </p>
      
      <div className="flex justify-between mt-4 gap-10">
        <div className="text-center">
          <p className="font-bold text-lg">1234</p>
          <p className="text-gray-600 dark:text-white mt-1">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-lg">567</p>
          <p className="text-gray-600 dark:text-white mt-1">Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;