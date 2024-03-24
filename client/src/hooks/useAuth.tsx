const useAuth = () => {
  const user = localStorage.getItem("user");
  return !!user;
};

export default useAuth;
