import Image from "next/image";
import LogoBarber from "../../assets/bardeylogo.svg"

export default function Header() {
    return (
        <header className="w-full h-32 bg-black flex items-center justify-between px-14">
            <Image src={LogoBarber} alt="Logo-header" />
            <div className="flex items-center gap-6">
                <ul className="flex gap-5">
                    <li className="text-white">Inicio</li>
                    <li className="text-white">Productos</li>
                    <li className="text-white">Servicios</li>
                    <li className="text-white">Contáctanos</li>
                </ul>
                <div className="h-8 w-[1px] bg-white"/>
                <div>
                    <button className="bg-white text-black">Iniciar sesión</button>
                </div>

            </div>
        </header>
    )
}