import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("isAdmin", "true");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-1">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-yellow-600">
          Login
        </h1>

        <div className="border-yellow-600 border-4 w-[250px] h-[200px] rounded-2xl flex items-center justify-center">
          <div className="flex flex-col space-y-5">
            <input
              className="border-black border-2 h-[35px] text-yellow-600 p-2 rounded-[10px] outline-none"
              placeholder="Username"
              type="text"
            />
            <input
              className="border-black border-2 h-[35px] text-yellow-600 p-2 rounded-[10px] outline-none"
              placeholder="Password"
              type="password"
            />

            <button
              onClick={handleSubmit}
              className="bg-yellow-600 text-white px-4 py-2 rounded-[10px] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
