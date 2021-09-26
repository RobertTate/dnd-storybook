import { useContext } from "react";
import { AuthUserContext } from "../config/firebase";

const HomePage = () => {
  const { user } = useContext(AuthUserContext);

  return (
    <>
      <p>Home</p>
      <p>User Properties:</p>
      <ul>
      {Object.keys(user).map((key) => {
        return <li key={key}>{key}</li>
      })}
      </ul>
      <p>Display Name: {user.displayName}</p>
      <p>Unique Id: {user.uid}</p>
    </>
  )
}

export default HomePage;
