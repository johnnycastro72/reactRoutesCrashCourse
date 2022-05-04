import { Link, Routes, Route } from 'react-router-dom'
import ViewProfile from '../components/ViewProfile'
import EditProfile from '../components/EditProfile'

const Profile = () => {
  return (
    <>
      <h1>Profile Page</h1>

      <ul>
        <li>
          <Link to='viewprofile'>View Profile</Link>
        </li>
        <li>
          <Link to='editprofile'>Edit Profile</Link>
        </li>
      </ul>

      <Routes>
        <Route path='/viewprofile' element={<ViewProfile />}/>
        <Route path='/editprofile' element={<EditProfile />}/>
      </Routes>
    </>
  );
};

export default Profile;
