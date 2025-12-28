import { useParams,useNavigate } from "react-router-dom";

const Profile = () => {
  const { username } = useParams();
  const navigate= useNavigate();

  return (
    <main>
      <h1>Profile Page</h1>
      <p>Username from URL: {username}</p>

      <button onClick={()=> navigate("/")}> Go Back Home</button>
    </main>
  );
};

export default Profile;
