"use client"
import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ParkingCircle, ArrowLeft, Plus } from "lucide-react"
import { useRouter } from "next/navigation"


export default function AddVehicleForm() {
  const [name, setName] = useState("Emilio Díaz")
  const [licensePlate, setLicensePlate] = useState("")
  const [startTime, setStartTime] = useState("13:30")
  const router = useRouter()
  
  
  useEffect(() => {
    const intervalId   
 = setInterval(() => {
      setStartTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/parquimetro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          entrada: new Date().toISOString(),
          salida: null,
          costo: 0,
          patente: licensePlate,
         }),
      })

      if (res.ok) {
        alert("Vehículo agregado correctamente") // pedirle a v0 que te haga un alert de shadcnui bonito.
      } else {
        alert("Error al agregar el vehículo") // pedirle a v0 que te haga un alert de shadcnui bonito.
      }
    } catch (error: any) {
      console.log("Error", error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white dark:from-slate-800 dark:to-slate-900">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur dark:bg-slate-900/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <ParkingCircle className="h-8 w-8 text-sky-500 dark:text-sky-400" />
            <span className="text-xl font-bold">System Parking</span>
          </div>
        </div>
      </header>
      <main className="container w-full flex items-center justify-center py-8">
        <Card className="overflow-hidden w-[35rem]">
          <CardHeader className="bg-gradient-to-r from-sky-400 to-blue-500 text-white">
            <CardTitle className="text-2xl">Agregar Vehículo</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 flex justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage alt="User avatar" src="/placeholder.svg" />
                  <AvatarFallback>ED</AvatarFallback>
                </Avatar>
              </div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingrese su nombre"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="licensePlate">Patente</Label>
                  <Input
                    id="licensePlate"
                    value={licensePlate}
                    onChange={(e) => setLicensePlate(e.target.value)}
                    placeholder="Ingrese la patente del vehículo"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={()=> router.push('/parquimetro')} variant="outline" className="w-[45%]">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver
            </Button>
            <Button type="submit" className="w-[45%]" onClick={handleSubmit}>
              <Plus className="mr-2 h-4 w-4" /> Agregar
            </Button>
          </CardFooter>
        </Card>
      </main>
      <footer className="border-t bg-white/80 backdrop-blur dark:bg-slate-900/80">
        <div className="container py-4 text-center text-sm text-muted-foreground">
          Copyright © {new Date().getFullYear()} System Parking. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}