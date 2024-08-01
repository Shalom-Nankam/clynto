import Image from "next/image";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Dummy from "./components/Dummy";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="grid grid-cols-4 gap-12 px-16 pt-12 ">
        <div className="col-span-3">
        <Balance/>
        </div>
        <div>
          <Dummy/>
        </div>
      </div>
       
    </main>
  );
}
