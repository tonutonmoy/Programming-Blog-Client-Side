import { getUserInfo } from "../../Utils/auth.helper";

import { gql, useQuery } from "@apollo/client";

const ProfileGQL = gql`
  query Profile {
    profile {
      userError
      result {
        image
      }
    }
  }
`;

const NavbarImage = () => {
  const token = getUserInfo();

  const { loading, error, data } = useQuery(ProfileGQL);

  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div>
      {token && data?.profile?.result?.image && (
        <img src={data?.profile?.result?.image} alt="User Profile" />
      )}
    </div>
  );
};

export default NavbarImage;
