import { auth } from "@/config/firebase";
import { Button } from "antd";

export default function Home() {
  const logout = () => {
    auth.signOut();
    if (window) {
      window.location.reload();
    }
  };
  return (
    <>
      <div>Login </div>
      <Button onClick={logout} type="default">
        로그아웃
      </Button>
    </>
  );
}
