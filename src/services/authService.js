import AxioInstance from "./AxioInstance";

const register = async userData => {
  const { data } = await AxioInstance.post("/auth/register", userData);
  let config = AxioInstance.interceptors.request.use(res => {
    res.headers = {
      Authorization: `Bearer ${userData}`,
    };
  return data;
})};

const login = async userData => {
  const { data } = await AxioInstance.post("/auth/login", userData);
  if (data) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

const logout = async token => {
  let config = AxioInstance.interceptors.request.use(res => {
    res.headers = {
      Authorization: `Bearer ${token}`,
    };
    return res;
  });
  const { data } = await AxioInstance.get("/auth/logout", config);
  if (data) {
    localStorage.removeItem("user");
  }
  return data;
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
