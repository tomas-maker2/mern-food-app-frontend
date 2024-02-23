import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { UserNameMenu } from "./UserNameMenu";

export const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className="flex spce-x-2 items-center">
      {isAuthenticated ? (
        <UserNameMenu/>
      ) : (
        <Button
          onClick={async () => await loginWithRedirect()}
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
        >
          Login In
        </Button>
      )}
    </span>
  );
};
