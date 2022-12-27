import {
  Modal,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import { Box, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import { signupdata, logindata } from "../../Redux/AuthReducer/users/actions";
import { useDispatch } from "react-redux";
import { getData, saveData } from "../../Component/Utils/customLocalstorage";
import { useSelector } from "react-redux";
import { Link } from "@chakra-ui/react";
import { signInWithGoogle } from "../../Service/firebase";

const user = {
  email: "",
  password: "",
};

export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState(true);
  const [text, setText] = useState(true);
  const [tokenid, setToken] = useState(false);
  const [Form, setForm] = useState(user);

  const { email, password } = Form;

  const dispatch = useDispatch();

  const id = getData("token");

  const { response } = useSelector((state) => {
    return {
      response: state.AuthReducer.response,
    };
  });

  console.log(response);

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;

    setForm({ ...Form, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // check the login form data with the server

    if (email && password) {
      const payload = {
        email,
        password,
      };
      dispatch(logindata(payload));

      if (response.message === "login successful ") {
        // alert("Login Successful !");
        toast({
          position: "top",
          title: "Login Successful",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        // setToken(true);
        onClose();
        navigate("/");
      } else {
        toast({
          position: "top",
          title: "please check your credentials",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    } else {
      toast({
        position: "top",
        title: "please check your credentials",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setForm({ ...Form, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (email && password) {
      const payload = {
        email,
        password,
      };
      dispatch(signupdata(payload));

      alert("Signup Successful !");
      setUser(true);
    } else {
      alert("please check your credentials");
    }
  };

  const setSignText = () => {
    onOpen();
  };

  const signOut = () => {
    toast({
      position: "top",
      title: "Logout Successful",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    // setToken(false);
    saveData("token", "");
    navigate("/");
  };

  return (
    <>
      <Box>
        {id !== "" ? (
          <Link onClick={signOut}>Sign Out</Link>
        ) : (
          <Link onClick={setSignText}>Sign In</Link>
        )}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          className={styles.modalContainor}
          maxW={{ base: "300px", md: "700px", lg: "1200px" }}
        >
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          {/* <ModalBody> */}
          <ModalCloseButton />

          <div className={styles.containerLogin}>
            <div className={styles.left}>
              <img
                src="https://modesens-web15.vercel.app/assets/login.2d1c8a59.png"
                alt=""
              />
            </div>
            {user ? (
              <div className={styles.rightWrapper}>
                <div className={styles.right}>
                  <h2>Login to your account</h2>
                  <p>Compare across 500+ stores</p>
                  <p className={styles.adjust}>to find the best price.</p>
                  <form className={styles.formData} onSubmit={handleLogin}>
                    <input
                      type="text"
                      id="email"
                      placeholder="Email"
                      name="email"
                      className={styles.email}
                      value={email}
                      onChange={handleChangeLogin}
                    />
                    <input
                      type="password"
                      id="pass"
                      name="password"
                      placeholder="Password"
                      className={styles.password}
                      value={password}
                      onChange={handleChangeLogin}
                    />
                    <br />

                    <input
                      className={styles.login}
                      type="submit"
                      value={"LOG IN"}
                    />
                  </form>
                  <div className={styles.orDiv}>
                    <div className={styles.firsthr}>
                      <hr />
                    </div>
                    <div className={styles.or}>or</div>
                    <div className={styles.secondhr}>
                      <hr />
                    </div>
                  </div>
                  <div className={styles.logos}>
                    <div onClick={signInWithGoogle}>
                      <img
                        src="https://modesens.com/static/img/login-icon/20210617google.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://modesens.com/static/img/login-icon/20210617facebook.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://modesens.com/static/img/login-icon/20210617apple.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://modesens.com/static/img/login-icon/20210617wechat.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <p
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setUser(false)}
                  >
                    Don't have an account? Please Sign up
                  </p>
                </div>
              </div>
            ) : (
              <div className={styles.rightWrapper}>
                <div className={styles.right}>
                  <h2>Create an account</h2>
                  <p>Compare across 500+ stores</p>
                  <p className={styles.adjust}>to find the best price.</p>
                  <form className={styles.formData} onSubmit={handleSignup}>
                    <input
                      type="text"
                      id="email"
                      placeholder="Email"
                      name="email"
                      className={styles.email}
                      value={email}
                      onChange={handleChangeSignup}
                    />
                    <input
                      type="password"
                      id="pass"
                      placeholder="Password"
                      className={styles.password}
                      name="password"
                      value={password}
                      onChange={handleChangeSignup}
                    />
                    <br />
                    <label className={styles.radioBtn} htmlFor="radioA">
                      <input type="radio" name="radio1" value="A" required />{" "}
                      &nbsp; Subscribe to personalized sale updates and offers
                    </label>
                    <br />
                    <input
                      className={styles.login}
                      type="submit"
                      value={"Sign Up"}
                    />
                  </form>
                  <div className={styles.orDiv}>
                    <div className={styles.firsthr}>
                      <hr />
                    </div>
                    <div className={styles.or}>or</div>
                    <div className={styles.secondhr}>
                      <hr />
                    </div>
                  </div>
                  <div className={styles.logos}>
                    <div onClick={signInWithGoogle}>
                      <img
                        src="https://modesens.com/static/img/login-icon/20210617google.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://modesens.com/static/img/login-icon/20210617facebook.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://modesens.com/static/img/login-icon/20210617apple.svg"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://modesens.com/static/img/login-icon/20210617wechat.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <p
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => setUser(true)}
                  >
                    Already have an account? Please sign in.
                  </p>
                  <div className={styles.signinfooter}>
                    By creating an account, I agree to the{" "}
                    <a href="#">Terms Of Use</a>
                    and the <a href="##">Privacy Policy</a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* </ModalBody> */}
        </ModalContent>
      </Modal>
    </>
  );
}
