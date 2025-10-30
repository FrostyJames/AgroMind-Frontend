import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img
            src="/agromind-logo.png"
            alt="AgroMind Logo"
            className="h-32 w-auto mb-4" // Increased from h-24 to h-32
          />
          <h2 className="text-2xl font-bold text-green-700 text-center">
            Welcome to AgroMind
          </h2>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}