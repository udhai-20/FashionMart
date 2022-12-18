import {
  Modal,
  ModalOverlay,
  ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  ModalCloseButton,
} from '@chakra-ui/modal';
import React, { useState } from "react"
import styles from "./Login.module.css"
import {useNavigate} from "react-router-dom"
import {Button,useDisclosure} from "@chakra-ui/react"


export default function Login(){

  
  const navigate=useNavigate()
  const [user,setUser] = useState(true)
  const [text,setText] = useState(true)

  // const [visibility,setVisibility] = useState(false)
  const [loginForm,setLoginForm] = useState({})
  const [signupForm, setSignupForm] = useState({});
  const [token,setToken] = useState(false)

  const handleChangeLogin = (e) => {
      const name = e.target.name;
      setLoginForm({...loginForm,[name]:e.target.value})
  }

  const handleLogin = (e) => {
      e.preventDefault();
      // check the login form data with the server 

      if(token){
          alert("Login Success")
          // setVisibility(false)
          navigate("/")        
      }else{
          alert("Please enter correct details")
      }
  }

  const handleChangeSignup = (e) => {
      const name = e.target.name;
      setSignupForm({...signupForm,[name]:e.target.value})
  }

  const handleSignup =(e) => {
      e.preventDefault();

      // post the data to the server 

      if(signupForm){
          navigate("/")
          // setVisibility(false)
          alert("Signup Successful")
      }else{
          alert("Please fill the details correctly")
      }
  }

 

  // const popupCloseHandler = (e) => {
  //     setVisibility(e);
  //   };

  const setSignText =() => {
      onOpen();
  }

  const { isOpen, onOpen, onClose } = useDisclosure()
return (
  <>
  <div>
  <Button onClick={setSignText}>{text ? "Sign In" : "Sign Out"}</Button>
  </div>
 
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className={styles.modalContainor} maxW={{ base: '300pxpx', md: '700px', lg: '1200px' }}>
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
                      // value={formData.email}
                      onChange={handleChangeLogin}
                      required
                    />
                    <input
                      type="password"
                      id="pass"
                      name="password"
                      placeholder="Password"
                      className={styles.password}
                      // value={formData.password}
                      onChange={handleChangeLogin}
                      required
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
                    <div>
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
                    onClick={() => setUser(false)}                    >
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
                      // value={formData.email}
                      onChange={handleChangeSignup}
                      required
                    />
                    <input
                      type="password"
                      id="pass"
                      placeholder="Password"
                      className={styles.password}
                      name="password"
                      // value={formData.password}
                      onChange={handleChangeSignup}
                      required
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
                    <div>
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
                    <a href="##">Terms Of Use</a>
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
)
}