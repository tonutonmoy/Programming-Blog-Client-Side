import { getUserInfo } from "../../Utils/auth.helper";
import { jwtDecode } from "jwt-decode";
import { gql, useQuery } from "@apollo/client";

const ProfileGQL = gql`
  query Profile($userId: ID!) {
    profile(userId: $userId) {
      image
    }
  }
`;

const NavbarImage = () => {
  const token = getUserInfo();
  let userId: string | null = null;

  if (token) {
    try {
      const decodedToken: { userId: string } = jwtDecode(token);
      userId = decodedToken.userId;
      console.log(userId);
    } catch (error) {
      console.error("Invalid token", error);
    }
  }

  const { loading, error, data } = useQuery(ProfileGQL, {
    variables: { userId },
    skip: !userId, // Skip the query if userId is not available
  });

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }
  console.log(data?.profile?.image, "dadad");
  return (
    <div>
      {token && data?.profile?.image && (
        <img src={data?.profile?.image} alt="User Profile" />
      )}
    </div>
  );
};

export default NavbarImage;
