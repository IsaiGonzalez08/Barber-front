import Image from "next/image"
import Logo from "../../assets/icons/logo-login.svg"
import Logo2 from "../../assets/icons/bardeylogo.svg"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Login() {
    return(
        <div className="flex w-full h-screen">
            <div className="bg-custom-login bg-center bg-blend-overlay h-screen w-full basis-1/2">
                <Image src={Logo2} alt="logo-2" className="m-4"/>
            </div>
            <div className="flex flex-col basis-1/2 items-center justify-center gap-5">
                <Image src={Logo} alt="logo"/>
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl font-semibold">Bienvenido de vuelta</h2>
                    <h3 className="text-base font-light">Ingresa tus datos para entrar</h3>
                </div>
                <Input type="email" placeholder="Ingresa tu correo" className="w-[446px]" />
                <Input type="password" placeholder="Ingresa tu contraseña" className="w-[446px]" />
                <Button variant="outline" className="w-[446px]">Iniciar Sesión</Button>
                <span className="flex text-base gap-3">
                    <span>¿No tienes cuenta aún?</span>
                    <span className="font-bold"><Link href="/register">Regístrate aquí</Link></span>
                </span>
            </div>
        </div>
    )
}