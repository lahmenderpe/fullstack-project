import { useEffect } from "react";
import "./style/_main.scss";
import CustomRouter from "./router/CustomRouter";
import { ToastContainer, Bounce } from "react-toastify";
import useLocalStorage from "./hooks/useLocalStorage";
import useAuth from "./hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { getItem } = useLocalStorage("user");
  const { setUserAuthenticated } = useAuth();

  useEffect(() => {
    const user = getItem();
    if (user) {
      setUserAuthenticated(user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CustomRouter />;
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
