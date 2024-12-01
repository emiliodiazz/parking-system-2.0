'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { LogOut, ParkingCircle } from 'lucide-react'
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function DashParquimetros() {
  const router = useRouter()



  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/50 to-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <ParkingCircle className="h-8 w-8 text-primary" />
            <span className="text-xl font-semibold">System Parking</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Parquímetro</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage alt="User avatar" src="/placeholder.svg" />
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={()=> signOut()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar Sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="container py-8">
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <div className="flex flex-col items-center gap-4 text-center">
              <Avatar className="h-24 w-24">
                <AvatarImage alt="Profile picture" src="/placeholder.svg" />
                <AvatarFallback className="text-2xl">ED</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <h1 className="text-3xl font-bold tracking-tight">¡Bienvenido Emilio!</h1>
                <p className="text-muted-foreground">Gestiona tu estacionamiento de manera fácil y rápida</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Nombre</label>
                <div className="rounded-lg border bg-muted/50 px-3 py-2">Emilio Díaz</div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">Ubicación</label>
                <div className="rounded-lg border bg-muted/50 px-3 py-2">Manuel Montt</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button onClick={() => router.push('/parquimetro/agregar')}>Agregar Vehículo</Button>     
                <Button onClick={() => router.push('/parquimetro/ver')} variant="secondary">Ver Vehículos</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="border-t">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} System Parking. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}

