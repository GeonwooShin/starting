import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useDebounce from "../hooks/useDebounce";
import { Button, Container, TextField, Typography, Box } from "@mui/material";

const SignupForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nickname, setNickname] = useState("");
  const [mbti, setMbti] = useState("");
  const [school, setSchool] = useState("");
  const [department, setDepartment] = useState("");
  const [uniqSchoolNum, setUniqSchoolNum] = useState("");
  const [validation, setValidation] = useState(true);

  const memberId = useSelector((state) => state.userSlice.memberId);
  const accessToken = useSelector((state) => state.userSlice.accessToken);

  const debounceNickname = useDebounce(nickname, 500);

  const onChangeNickname = useCallback(
    (e) => {
      setNickname(e.target.value);
      console.log(nickname);
    },
    [nickname]
  );
  useEffect(() => {
    axios
      .get(`http://13.209.146.204:8080/duplicate/${memberId}/${nickname}`, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        if (res.data.data === true) setValidation(false);
        else setValidation(true);
        console.log(validation);
      })
      .catch((err) => console.log(err.response));
  }, [debounceNickname]);

  const onSubmitInfo = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      birthOfDate: birth,
      phoneNumber: phoneNumber,
      nickname: nickname,
      mbti: mbti,
      school: school,
      department: department,
      uniqSchoolNum: uniqSchoolNum,
    };
    axios
      .post(`http://13.209.146.204:8080/inputs/${memberId}`, data, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        navigate("/");
        alert("서비스 이용 가능");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Typography component="h1" variant="h5" mt={3} mb={3}>
          Starting이 처음이신가요?
        </Typography>
        <Typography component="h1" variant="subtitle2" mt={1} mb={3}>
          서비스 이용을 위해 추가정보를 입력해주세요!
        </Typography>
        <TextField
          margin="normal"
          label="이름"
          required
          fullWidth
          name="name"
          autoFocus
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="normal"
          label="생년월일"
          required
          fullWidth
          name="birthOfDate"
          onChange={(e) => setBirth(e.target.value)}
        />
        <TextField
          margin="normal"
          label="전화 번호"
          required
          fullWidth
          name="phoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          margin="normal"
          error={!validation}
          helperText={validation ? "" : "이미 사용중인 닉네임입니다."}
          label="닉네임"
          required
          fullWidth
          name="nickname"
          onChange={onChangeNickname}
        />
        <TextField
          margin="normal"
          label="MBTI"
          required
          fullWidth
          name="mbti"
          onChange={(e) => setMbti(e.target.value)}
        />
        <TextField
          margin="normal"
          label="학교"
          required
          fullWidth
          name="school"
          onChange={(e) => setSchool(e.target.value)}
        />
        <TextField
          margin="normal"
          label="학과"
          required
          fullWidth
          name="department"
          onChange={(e) => setDepartment(e.target.value)}
        />
        <TextField
          margin="normal"
          label="학번"
          required
          fullWidth
          name="uniqSchoolNumber"
          onChange={(e) => setUniqSchoolNum(e.target.value)}
        />
        <Button
          onClick={onSubmitInfo}
          type="submit"
          fullWidth
          variant="contained"
        >
          제출
        </Button>
      </Box>
    </Container>
  );
};

export default SignupForm;
