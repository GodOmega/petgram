import { gql, useMutation } from "@apollo/client";

const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`;

const useRegister = () => {
  const { register, loading, error } = useMutation(REGISTER);

  return [register, loading, error];
};

export default useRegister;
