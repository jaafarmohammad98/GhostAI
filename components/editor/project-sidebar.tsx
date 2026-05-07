"use client"

import { X, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <div
      className={`fixed top-12 left-0 z-40 h-[calc(100vh-3rem)] w-72 flex flex-col bg-surface border-r border-surface-border transition-transform duration-200 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 h-12 border-b border-surface-border shrink-0">
        <span className="text-sm font-medium text-copy-primary">Projects</span>
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="my-projects" className="flex-1 overflow-hidden pt-3">
        <TabsList className="mx-4 w-[calc(100%-2rem)] shrink-0">
          <TabsTrigger value="my-projects" className="flex-1">
            My Projects
          </TabsTrigger>
          <TabsTrigger value="shared" className="flex-1">
            Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-projects" className="overflow-y-auto">
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-sm text-copy-muted">No projects yet</p>
          </div>
        </TabsContent>

        <TabsContent value="shared" className="overflow-y-auto">
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-sm text-copy-muted">No shared projects</p>
          </div>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <div className="p-4 shrink-0 border-t border-surface-border">
        <Button variant="outline" className="w-full gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  )
}
