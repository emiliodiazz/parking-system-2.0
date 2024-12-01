"use client"

import { useState, useEffect } from "react"
import { CarFront, Plus, Settings, Clock, Timer } from 'lucide-react'
import Link from "next/link"


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

// Helper function to format duration
function formatDuration(milliseconds: number) {
  const seconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}d ${hours % 24}h`
  if (hours > 0) return `${hours}h ${minutes % 60}m`
  if (minutes > 0) return `${minutes}m ${seconds % 60}s`
  return `${seconds}s`
}

export default function ViewVehicleDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [vehicles, setVehicles] = useState() as any
  const router = useRouter()
  const now = new Date()

  useEffect(() => {
    async function getData() {
      const response = await fetch("/api/parquimetro")
      const data = await response.json()
      setVehicles(data.data)
    }
    console.log(vehicles)

    getData()
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Vehicle Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Emilio Diaz</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-8">
          <Button onClick={() => router.push('/parquimetro/agregar')}>
            <Plus className="mr-2 h-4 w-4" /> Add Vehicle
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          { vehicles && vehicles.length > 0 && vehicles.map((vehicle: {
            id: string,
            patente: string,
            entrada: string,
            salida: string,
            costo: number,
          }) => (
            <Card key={vehicle.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                <CardTitle className="flex items-center justify-between text-2xl">
                  <span>{vehicle.patente}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <CarFront className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      PATENTE: {vehicle.patente}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>Agregado: {new Date(vehicle.entrada).toLocaleDateString('es-CL', {
                      year: 'numeric', month: 'long', day: 'numeric'
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
                    <Timer className="h-4 w-4" />
                    <p>
                      Duración: {formatDuration(now.getTime() - new Date(vehicle.entrada).getTime())}
                    </p>
                  </div>
                  <Button onClick={()=> router.push('/parquimetro/pagar')} variant="destructive" className="w-full mt-4">
                    Finalizar
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="mt-12 bg-white dark:bg-gray-800 shadow-inner">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-300">
          <p>&copy; 2024 System Parking. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}