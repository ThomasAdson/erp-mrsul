import * as React from "react"

import * as ToastPrimitives from "@radix-ui/react-toast"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Cross2Icon } from "@radix-ui/react-icons"
import { Icons } from "@/components/icons"

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(
        "bg-background border rounded-md shadow-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:zoom-in-90 data-[state=closed]:zoom-out-90 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-value)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=end]:animate-out data-[swipe=end]:fade-out-80 data-[swipe=end]:slide-out-right-full group",
        className
      )}
      {...props}
    >
      <div className="grid gap-1 pr-7">
        <ToastPrimitives.Title className="text-sm font-semibold">
          {props.title}
        </ToastPrimitives.Title>
        <ToastPrimitives.Description className="text-sm mt-0.5 opacity-50">
          {props.description}
        </ToastPrimitives.Description>
      </div>
      <ToastPrimitives.Close asChild>
        <Button
          variant="ghost"
          className="absolute right-2 top-2 rounded-md opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:opacity-100 data-[state=open]:bg-secondary"
        >
          <Cross2Icon className="h-4 w-4" />
        </Button>
      </ToastPrimitives.Close>
    </ToastPrimitives.Root>
  )
})
Toast.displayName = "Toast"

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn(buttonVariants({ variant: "outline" }), className)}
      {...props}
    />
  )
})
ToastAction.displayName = "ToastAction"

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Close
      ref={ref}
      className={cn(
        "absolute right-2 top-2 rounded-md opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:opacity-100 data-[state=open]:bg-secondary",
        className
      )}
      {...props}
    >
      <Cross2Icon className="h-4 w-4" />
    </ToastPrimitives.Close>
  )
})
ToastClose.displayName = "ToastClose"

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Title
      ref={ref}
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
})
ToastTitle.displayName = "ToastTitle"

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn("text-sm mt-0.5 opacity-50", className)}
      {...props}
    />
  )
})
ToastDescription.displayName = "ToastDescription"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => {
  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        "fixed bottom-0 right-0 flex flex-col gap-y-2 p-4 sm:p-6 list-none z-[100] outline-none",
        className
      )}
      {...props}
    />
  )
})
ToastViewport.displayName = "ToastViewport"

export {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  ToastAction,
}
