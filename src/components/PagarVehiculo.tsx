"use client"
import { ArrowLeft, Car, User } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function FinVehiculo() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="System Parking Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="font-semibold text-xl">System Parking</span>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="grid md:grid-cols-2 gap-8 p-6">
            {/* Left Section - User Info */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-32 h-32 rounded-full border-2 flex items-center justify-center bg-gray-50">
                <User className="w-16 h-16 text-gray-400" />
              </div>
              <div className="text-center">
                <h2 className="font-semibold mb-1">Nombre:</h2>
                <p className="text-lg">Emilio Diaz</p>
              </div>
              <Button variant="outline" className="mt-4" asChild>
                <Link href="/parquimetro">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver
                </Link>
              </Button>
            </div>

            {/* Right Section - Vehicle Info */}
            <div className="flex flex-col">
              <div className="mb-6 flex justify-center">
                <Car className="w-24 h-24 text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Patente:</div>
                  <div className="font-medium">XX-CC-43</div>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Hora de Inicio:</div>
                  <div className="font-medium">14:30</div>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Hora de Fin:</div>
                  <div className="font-medium">16:00</div>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-600">Monto:</div>
                  <div className="font-medium">$3000</div>
                </div>
                <Button onClick={()=> router.push('/parquimetro/pagar/finpago')} className="w-full mt-6" size="lg">
                  Pagar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          Copyright 2024, System Parking
        </div>
      </footer>
    </div>
  )
}