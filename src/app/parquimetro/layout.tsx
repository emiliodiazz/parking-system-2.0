import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import DashboardTest from "@/components/Sidebar";
import VehiculoSidebar from "@/components/sidebar-parquimetro";


export default async function SessionParquimetro(
  { children }: { children: React.ReactNode }
) {
  const session = await auth()
  console.log("SALISTE", session)
  if(!session){
    return redirect("/")
  }

    if(session?.user && (session?.user?.rol?.Nombre_rol === "Administrador" || session?.user?.rol?.Nombre_rol === "Parquimetro")){
        return (
            <SessionProvider session={session}>
              <VehiculoSidebar>
                {children} 
              </VehiculoSidebar>  
            </SessionProvider>
          )
    }


  return redirect("/for")

  
}