//En este archivo estan las rutas del backend de la aplicacion
import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({message: "Listando Productos"})
}

export function POST(){
    return NextResponse.json({message: "Creando producto"})
}