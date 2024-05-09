import { useState, FC, useEffect } from "react";
import { Card, LoginContent, RegisterContent } from "../../components";
import { setPageTitle } from "../../utils/utils";
import useTranslate from "../../hooks/useTranslate";
import useAppContext from "../../hooks/useAppContext";
import useAuth from "../../hooks/useAuth";
import cover from "../../assets/login-cover.jpg";
import { login, register } from "../../services/backend/backend";
import { toast } from "react-toastify";
import "./authpage.style.scss";

const AuthPage: FC = () => {
  const { translate, language } = useTranslate();
  const { isLogin, updateIsLogin } = useAppContext();
  const [isProcessing, setIsProcessing] = useState(false);

  const { setIsAuthenticated } = useAuth();

  const handleLogin = () => {
    updateIsLogin(true);
  };

  const handleUserLogin = async (data: any) => {
    try {
      console.log(data);
      setIsProcessing(true);
      const result = await login(data);
      setIsAuthenticated(result.data);
      toast.success("Logged in sucessfully!");
      setIsProcessing(false);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

  const handleUserRegister = async (data: any) => {
    try {
      setIsProcessing(true);
      const payload = { ...data, username: data.userName };
      delete payload.userName;
      await register(payload);
      toast.success("Acount created successfully");
      updateIsLogin(true);
      setIsProcessing(false);
    } catch (error: any) {
      console.error(error);
      if (error.response.status === 400) {
        toast.error(error.response.data);
      }
    }
  };

  const handleDemo = () => {};

  const handleRegister = () => {
    updateIsLogin(false);
  };

  useEffect(() => {
    const title = isLogin ? "page_title_login" : "page_title_register";

    setPageTitle(translate(title));
  }, [translate, language, isLogin]);

  return (
    <section className="login-page page">
      <Card width={1000}>
        {isLogin ? (
          <LoginContent
            handleDemo={handleDemo}
            handleLogin={handleUserLogin}
            handleRegister={handleRegister}
          />
        ) : (
          <RegisterContent
            handleRegister={handleUserRegister}
            handleLogin={handleLogin}
            isProcessing={isProcessing}
          />
        )}
        <section>
          <img src={cover} alt="cover" />
        </section>
      </Card>
    </section>
  );
};

export default AuthPage;
