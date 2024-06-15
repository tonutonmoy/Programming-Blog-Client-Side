/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../Redux/hooks";
import { getUserInfo } from "../../Utils/auth.helper";

import { gql, useQuery } from "@apollo/client";
import { profileRefetch } from "../../Redux/Slice/ProfileSlice/ProfileSlice";

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
  const dispatch = useAppDispatch();
  const refetchRef = useRef<any>(null);

  const { loading, error, data, refetch } = useQuery(ProfileGQL);
  useEffect(() => {
    if (refetch) {
      refetchRef.current = refetch;
      dispatch(profileRefetch(refetch));
    }
  }, [refetch, dispatch]);

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
