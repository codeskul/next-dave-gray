import { getUser } from "@/lib/getUser";
import { getUserPosts } from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";
import type { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params: { userId },
}: Params): Promise<Metadata> => {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is page of ${user.name}`,
  };
};

const UserDetail = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const usersPostsData: Promise<Post[]> = getUserPosts(userId);

  // const [user, posts] = await Promise.all([userData, usersPostsData]);

  const user = await userData;
  return (
    <div>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading Posts ...</h2>}>
        {/* <UserPosts posts={posts} /> */}
        <UserPosts promise={usersPostsData} />
      </Suspense>
    </div>
  );
};

export default UserDetail;
