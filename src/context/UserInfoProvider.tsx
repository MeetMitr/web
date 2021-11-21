import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

export interface UserInfoInterface {
  firstname: string;
}

const UserInfoContext = createContext({
  state: {} as Partial<UserInfoInterface>,
  setState: {} as Dispatch<SetStateAction<Partial<UserInfoInterface>>>,
});

const UserInfoProvider = ({
  children,
  value = {} as UserInfoInterface,
}: {
  children: React.ReactNode;
  value?: Partial<UserInfoInterface>;
}) => {
  const [state, setState] = useState(value);
  return (
    <UserInfoContext.Provider value={{ state, setState }}>
      {children}
    </UserInfoContext.Provider>
  );
};

const useUserInfo = () => {
  const context = useContext(UserInfoContext);
  if (!context) {
    throw new Error("useUserInfo must be used within a UserInfoContext");
  }
  return context;
};

export { UserInfoProvider, useUserInfo };
