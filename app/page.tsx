import Header from "./components/Header";
import Image from "next/image";
import InitImage from "../assets/images/init-image.png"
import { Button } from "@/components/ui/button"
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col bg-black/70 bg-custom-pattern bg-center bg-blend-overlay h-screen w-full">
      <Header />
      <div className="flex w-full h-full items-center justify-center">
          <div className="flex flex-col gap-5">
            <span className="w-[664px]">
              <h2 className="text-white text-6xl">Llévate la experiencia de nuestro excelente servicio</h2>
            </span>
            <span className="max-w-[560px]">
              <h2 className="text-base font-light text-white">Bienvenido a Bardey, contamos con múltiples servicios para ti, recuerda que
              Bardey tú eres nuestra prioridad.</h2>
            </span>
            <Button className="w-72"><Link href="/login">Comenzar ahora</Link></Button>
          </div>
          <Image src={InitImage} alt="init-image" className="w-[446px] h-[575px]"/>
      </div>
    </div>
  );
}
