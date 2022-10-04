import React from "react";
import { Container } from "@mui/system";
import Profile from "../components/Profile";
import MyFriends from "../components/MyFriends";
import MyTeams from "../components/MyTeams";
import axios from "axios";
import { useSelector } from "react-redux";

const Mypage = () => {
  const [userInfo, setUserInfo] = useState({});
  const memberId = useSelector((state) => state.userSlice.userId);
  useEffect(() => {
    axios
      .get(`http://13.209.146.204:8080/mypage/${memberId}`)
      .then((res) => {
        setUserInfo(res.data.data);
        console.log("회원 데이터 불러오기 완료");
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <Container>
      <Profile data={userInfo}></Profile>
      <div className="mypage-myfrineds-myteams">
        <MyFriends></MyFriends>
      </div>
    </Container>
  );
};

export default Mypage;
