import Header from "@/components/Header";
import { mockData } from "@/mock/post";
import * as I from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-center">
        {mockData.map((post) => (
          <div key={post.id} className="mb-4">
            <div className="flex items-center gap-2 bg-[#121212] py-1 pl-1">
              <I.BsFillPersonFill className="text-white h-[25px] w-[25px]" />
              <p className="text-white text-sm">matheusosan</p>
            </div>
            <img src={post.imageUrl} alt={post.description} />
            <div className="flex flex-col pl-1 py-3 gap-2">
              <button>
                <I.BsFillHeartFill />
              </button>
              <p className="font-bold text-sm">matheusosan</p>
              <h2 className="text-sm">{post.description}</h2>
              <p className="text-xs">Há 2 dias</p>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}
