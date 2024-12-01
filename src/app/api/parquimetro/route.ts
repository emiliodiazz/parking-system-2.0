import {NextRequest, NextResponse} from 'next/server'
import { prisma } from '@/lib/prisma'

export const GET = async (req: Request, res: NextResponse) => {
  try {
    const res = await prisma.registro.findMany()
    console.log(res)
    return NextResponse.json({
      data: res
    }, { status: 200})
  } catch (error: any) {
    return NextResponse.json(res, error)
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()

    const { entrada, costo, patente } = body

    const res = await prisma.registro.create({
      data: {
        entrada: new Date(entrada),
        salida: new Date(entrada),
        costo: costo.toString(),
        patente: patente
      }
    })

    return NextResponse.json({
      message: 'Registro creado correctamente',
      data: res
    }, { status: 201})
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({
      message: 'Error al crear el registro'
    }, { status: 500})
  }
}