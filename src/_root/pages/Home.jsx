import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto w-[900px] p-5 pt-14 min-h-full relative">
      <div className="">
        <h1 className="text-5xl font-extrabold">Welcome back 👋</h1>
        <h2 className="text-5xl font-bold mt-2 text-blue-400 ">{user.name}</h2>
        <p className="text-xl mt-2">
          We&apos;re thrilled to have you on board! ✨
        </p>
      </div>

      <h2 className="text-4xl font-bold mt-[100px] ">
        Some other projects to look into
      </h2>
      <div className="rounded-2xl h-full flex flex-wrap">
        <Link to="https://keep-notes-ui.vercel.app/" target="_blank">
          <img
            src="/src/assets/project1.png"
            alt="project 1"
            className="max-w-full pt-10 px-16"
          />
          <p className="text-xl font-bold text-center hover:text-red-600">
            KeepNotes: A simple application to manage your notes
          </p>
        </Link>
        <Link to="https://tasks-zeta-two.vercel.app/" target="_blank">
          <img
            src="/src/assets/project2.png"
            alt="project 1"
            className="max-w-full pt-10 px-16"
          />
          <p className="text-xl font-bold text-center hover:text-blue-600">
            KeepNotes: A simple application to manage your notes
          </p>
        </Link>
        <Link>
          <img src="" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
