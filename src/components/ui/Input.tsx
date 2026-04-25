import * as React from "react";
import { cn } from "@/lib/utils";

const baseFieldClasses =
  "flex w-full bg-cream border border-emerald-deep/15 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus-visible:outline-none focus-visible:border-emerald-deep transition-colors rounded-sm aria-[invalid=true]:border-red-700/60";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function Input({ className, type = "text", ...props }, ref) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(baseFieldClasses, "h-11", className)}
      {...props}
    />
  );
});

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, rows = 5, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(baseFieldClasses, "min-h-32 resize-y", className)}
      {...props}
    />
  );
});

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        baseFieldClasses,
        "h-11 appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22%23006241%22%3E%3Cpath%20d=%22M7%2010l5%205%205-5z%22/%3E%3C/svg%3E')] bg-no-repeat bg-[right_0.75rem_center] pr-10",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
});

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(function Label({ className, ...props }, ref) {
  return (
    <label
      ref={ref}
      className={cn(
        "label-eyebrow text-emerald-deep block mb-2",
        className,
      )}
      {...props}
    />
  );
});
