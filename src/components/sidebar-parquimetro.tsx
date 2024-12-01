'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { Car, Eye, Home } from 'lucide-react'
import { useRouter } from "next/navigation"

export default function VehiculoSidebar({
  children
}: {
  children: React.ReactNode
}) {
    const router = useRouter()
  return (
    <section className='relative pl-64'>
      <div className="flex flex-col h-screen w-64 bg-gray-100 p-4 shadow-lg absolute left-0 top-0">
        <h1 className="text-2xl font-bold mb-6 text-center">Gestión de Vehículos</h1>
        <nav className="space-y-4">
          <Button onClick={()=> router.push('/parquimetro/agregar')} className="w-full justify-start" variant="ghost">
            <Car className="mr-2 h-4 w-4" />
            Agregar Vehículo
          </Button>
          <Button onClick={()=>router.push('/parquimetro/ver')} className="w-full justify-start" variant="ghost">
            <Eye className="mr-2 h-4 w-4" />
            Ver Vehículos
          </Button>
          <Button onClick={()=> router.push('/parquimetro')} className="w-full justify-start" variant="ghost">
            <Home className="mr-2 h-4 w-4" />
            Inicio
          </Button>
        </nav>
      </div>
      <section>
        {children}
      </section>
    </section>

  )
}

