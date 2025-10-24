import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">Welcome to AgroMind</h2>
        <LoginForm />
      </div>
    </div>
  );
}