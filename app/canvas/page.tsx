"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Download, Eraser, PenLine, Square } from "lucide-react"

export default function CanvasPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState("#4f46e5")
  const [brushSize, setBrushSize] = useState(5)
  const [tool, setTool] = useState<"pen" | "eraser" | "rectangle">("pen")
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height

      // Redraw canvas after resize (if needed)
      // This would require saving the drawing state
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    setIsDrawing(true)

    const rect = canvas.getBoundingClientRect()
    let clientX, clientY

    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const x = clientX - rect.left
    const y = clientY - rect.top

    if (tool === "rectangle") {
      setStartPos({ x, y })
    } else {
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color
      ctx.lineWidth = brushSize
    }
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    let clientX, clientY

    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
      e.preventDefault() // Prevent scrolling on touch devices
    } else {
      clientX = e.clientX
      clientY = e.clientY
    }

    const x = clientX - rect.left
    const y = clientY - rect.top

    if (tool === "rectangle" && startPos) {
      // For rectangle, we need to redraw the canvas to show the rectangle as it's being drawn
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.beginPath()
      ctx.strokeStyle = color
      ctx.lineWidth = brushSize
      ctx.rect(startPos.x, startPos.y, x - startPos.x, y - startPos.y)
      ctx.stroke()
    } else {
      ctx.lineTo(x, y)
      ctx.stroke()
    }
  }

  const stopDrawing = () => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    if (tool === "rectangle" && startPos) {
      // The rectangle is already drawn in the draw function
      setStartPos(null)
    } else {
      ctx.closePath()
    }

    setIsDrawing(false)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const downloadCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dataURL = canvas.toDataURL("image/png")
    const link = document.createElement("a")
    link.download = "educrm-canvas.png"
    link.href = dataURL
    link.click()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <Navbar />
      <div className="container py-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">EduCRM Canvas</CardTitle>
            <CardDescription>Chizma yarating va saqlang</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Tabs defaultValue="tools" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="tools">Asboblar</TabsTrigger>
                  <TabsTrigger value="settings">Sozlamalar</TabsTrigger>
                </TabsList>
                <TabsContent value="tools" className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Button variant={tool === "pen" ? "default" : "outline"} size="icon" onClick={() => setTool("pen")}>
                      <PenLine className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={tool === "eraser" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setTool("eraser")}
                    >
                      <Eraser className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={tool === "rectangle" ? "default" : "outline"}
                      size="icon"
                      onClick={() => setTool("rectangle")}
                    >
                      <Square className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={clearCanvas}>
                      <Eraser className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={downloadCanvas}>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rang</label>
                    <div className="flex gap-2">
                      {["#4f46e5", "#ef4444", "#10b981", "#f59e0b", "#000000"].map((c) => (
                        <div
                          key={c}
                          className={`h-8 w-8 rounded-full cursor-pointer ${
                            color === c ? "ring-2 ring-offset-2 ring-primary" : ""
                          }`}
                          style={{ backgroundColor: c }}
                          onClick={() => setColor(c)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Chiziq qalinligi: {brushSize}px</label>
                    <Slider
                      value={[brushSize]}
                      min={1}
                      max={20}
                      step={1}
                      onValueChange={(value) => setBrushSize(value[0])}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <div className="relative border rounded-lg overflow-hidden bg-white">
                <canvas
                  ref={canvasRef}
                  className="w-full h-[400px] touch-none"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}
