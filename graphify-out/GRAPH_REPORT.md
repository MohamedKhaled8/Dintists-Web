# Graph Report - dintists  (2026-10-17)

## Corpus Check
- Corpus is ~29,873 words - fits in a single context window. You may not need a graph.

## Summary
- 621 nodes · 1306 edges · 40 communities (32 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 11 edges (avg confidence: 0.85)
- Token cost: 120 input · 80 output

## Community Hubs (Navigation)
- Routing and Page Components
- Core UI Dependencies
- Input and Separator Components
- Breadcrumb and Tabs Navigation
- Package Metadata Configuration
- TypeScript Compiler Configuration
- Code Quality and Linting Setup
- Popover and Interactive UI Primitives
- Routing Error Capture System
- Command Palette Dialogs
- Shadcn Component Config
- Accordion and Form Controls
- Form Management and Validation
- Menubar Navigation Components
- Carousel Slider Components
- Alert Dialog and Calendar Pickers
- Badge and Toggle Components
- Recharts Visualization Setup
- Context Menu Primitives
- Dropdown Menu Components
- Buttons and Pagination Controls
- Build and Dev NPM Scripts
- Navigation Menu Primitives
- Select Dropdown Controls
- Drawer and Sheet Modals
- ESLint Configuration
- Lovable Error Reporting
- One-Time Password Inputs
- Avatar Profile Components
- Alert Notification Cards
- Vite and Test Configuration
- Scroll Area Custom Containers
- Sonner Toast Notifications
- Clinic Launch and Demo Gating
- Package Overrides Configuration
- Vite TanStack Integration
- Aspect Ratio Layouts
- Collapsible Disclosure Panels
- Jest DOM Testing Setup
- Lovable Git Sync Requirements

## God Nodes (most connected - your core abstractions)
1. `cn()` - 220 edges
2. `react` - 48 edges
3. `useI18n()` - 33 edges
4. `lucide-react` - 25 edges
5. `meta()` - 23 edges
6. `PageHero()` - 22 edges
7. `compilerOptions` - 22 edges
8. `CtaBand()` - 18 edges
9. `@tanstack/react-router` - 16 edges
10. `t` - 13 edges

## Surprising Connections (you probably didn't know these)
- `AccordionItem` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts
- `AccordionTrigger` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts
- `AccordionContent` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/accordion.tsx → src/lib/utils.ts
- `AlertDialogHeader()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts
- `AlertDialogFooter()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/alert-dialog.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (40 total, 8 thin omitted)

### Community 0 - "Routing and Page Components"
Cohesion: 0.07
Nodes (76): @tanstack/react-query, @tanstack/react-router, ContactList(), CtaBand(), DoctorCard(), DraftBadge(), Footer(), Header() (+68 more)

### Community 1 - "Core UI Dependencies"
Cohesion: 0.04
Nodes (53): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @hookform/resolvers, input-otp (+45 more)

### Community 2 - "Input and Separator Components"
Cohesion: 0.06
Nodes (42): @radix-ui/react-separator, @radix-ui/react-tooltip, Input, Separator, SheetContent, SheetContentProps, SheetDescription, SheetFooter() (+34 more)

### Community 3 - "Breadcrumb and Tabs Navigation"
Cohesion: 0.11
Nodes (27): @radix-ui/react-slot, @radix-ui/react-tabs, Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage (+19 more)

### Community 4 - "Package Metadata Configuration"
Cohesion: 0.08
Nodes (25): name, private, sideEffects, type, date-fns, eslint, eslint-config-prettier, @hookform/resolvers (+17 more)

### Community 5 - "TypeScript Compiler Configuration"
Cohesion: 0.08
Nodes (23): compilerOptions, allowImportingTsExtensions, exactOptionalPropertyTypes, jsx, lib, module, moduleResolution, noEmit (+15 more)

### Community 6 - "Code Quality and Linting Setup"
Cohesion: 0.09
Nodes (22): devDependencies, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+14 more)

### Community 7 - "Popover and Interactive UI Primitives"
Cohesion: 0.12
Nodes (14): clsx, @radix-ui/react-hover-card, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-slider, @radix-ui/react-switch, react, tailwind-merge (+6 more)

### Community 8 - "Routing Error Capture System"
Cohesion: 0.16
Nodes (14): @tanstack/react-start, consumeLastCapturedError(), describeError(), describeStatus(), originalConsoleError, safeStringify(), renderErrorPage(), fetch() (+6 more)

### Community 9 - "Command Palette Dialogs"
Cohesion: 0.13
Nodes (17): cmdk, @radix-ui/react-dialog, Command, CommandDialog(), CommandEmpty, CommandGroup, CommandInput, CommandItem (+9 more)

### Community 10 - "Shadcn Component Config"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 11 - "Accordion and Form Controls"
Cohesion: 0.12
Nodes (13): lucide-react, @radix-ui/react-accordion, @radix-ui/react-checkbox, @radix-ui/react-radio-group, react-resizable-panels, AccordionContent, AccordionItem, AccordionTrigger (+5 more)

### Community 12 - "Form Management and Validation"
Cohesion: 0.18
Nodes (14): @radix-ui/react-label, react-hook-form, FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext (+6 more)

### Community 13 - "Menubar Navigation Components"
Cohesion: 0.12
Nodes (11): Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator, MenubarShortcut() (+3 more)

### Community 14 - "Carousel Slider Components"
Cohesion: 0.17
Nodes (15): embla-carousel-react, Button, Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem (+7 more)

### Community 15 - "Alert Dialog and Calendar Pickers"
Cohesion: 0.18
Nodes (13): @radix-ui/react-alert-dialog, react-day-picker, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader() (+5 more)

### Community 16 - "Badge and Toggle Components"
Cohesion: 0.20
Nodes (11): class-variance-authority, @radix-ui/react-toggle, @radix-ui/react-toggle-group, Badge(), BadgeProps, badgeVariants, ToggleGroup, ToggleGroupContext (+3 more)

### Community 17 - "Recharts Visualization Setup"
Cohesion: 0.24
Nodes (11): recharts, ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartStyle(), ChartTooltipContent (+3 more)

### Community 18 - "Context Menu Primitives"
Cohesion: 0.18
Nodes (10): @radix-ui/react-context-menu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut() (+2 more)

### Community 19 - "Dropdown Menu Components"
Cohesion: 0.18
Nodes (10): @radix-ui/react-dropdown-menu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut() (+2 more)

### Community 20 - "Buttons and Pagination Controls"
Cohesion: 0.24
Nodes (9): ButtonProps, Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem, PaginationLink(), PaginationLinkProps, PaginationNext() (+1 more)

### Community 21 - "Build and Dev NPM Scripts"
Cohesion: 0.22
Nodes (9): scripts, build, build:dev, dev, format, lint, preview, test (+1 more)

### Community 22 - "Navigation Menu Primitives"
Cohesion: 0.28
Nodes (8): @radix-ui/react-navigation-menu, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuViewport

### Community 23 - "Select Dropdown Controls"
Cohesion: 0.28
Nodes (8): @radix-ui/react-select, SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 24 - "Drawer and Sheet Modals"
Cohesion: 0.25
Nodes (7): vaul, DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 25 - "ESLint Configuration"
Cohesion: 0.29
Nodes (6): @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, typescript-eslint

### Community 26 - "Lovable Error Reporting"
Cohesion: 0.33
Nodes (6): describeThrown(), LovableErrorOptions, LovableEvents, reportLovableError(), Window, ErrorComponent()

### Community 27 - "One-Time Password Inputs"
Cohesion: 0.33
Nodes (5): input-otp, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 28 - "Avatar Profile Components"
Cohesion: 0.40
Nodes (4): @radix-ui/react-avatar, Avatar, AvatarFallback, AvatarImage

### Community 29 - "Alert Notification Cards"
Cohesion: 0.50
Nodes (4): Alert, AlertDescription, AlertTitle, alertVariants

### Community 31 - "Scroll Area Custom Containers"
Cohesion: 0.67
Nodes (3): @radix-ui/react-scroll-area, ScrollArea, ScrollBar

### Community 33 - "Clinic Launch and Demo Gating"
Cohesion: 0.67
Nodes (3): Clinic Approval Checklist, Demo Mode, Site Content Config

## Knowledge Gaps
- **23 isolated node(s):** `@hookform/resolvers`, `@tailwindcss/vite`, `@tanstack/router-plugin`, `date-fns`, `react-dom` (+18 more)
  These have ≤1 connection - possible missing edges. (Counts symbols only; 228 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Popover and Interactive UI Primitives` to `Routing and Page Components`, `Input and Separator Components`, `Breadcrumb and Tabs Navigation`, `Package Metadata Configuration`, `Command Palette Dialogs`, `Accordion and Form Controls`, `Form Management and Validation`, `Menubar Navigation Components`, `Carousel Slider Components`, `Alert Dialog and Calendar Pickers`, `Badge and Toggle Components`, `Recharts Visualization Setup`, `Context Menu Primitives`, `Dropdown Menu Components`, `Buttons and Pagination Controls`, `Navigation Menu Primitives`, `Select Dropdown Controls`, `Drawer and Sheet Modals`, `One-Time Password Inputs`, `Avatar Profile Components`, `Alert Notification Cards`, `Scroll Area Custom Containers`?**
  _High betweenness centrality (0.221) - this node is a cross-community bridge._
- **What connects `@hookform/resolvers`, `@tailwindcss/vite`, `@tanstack/router-plugin` to the rest of the system?**
  _23 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Routing and Page Components` be split into smaller, more focused modules?**
  _Cohesion score 0.07006101409636019 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `Breadcrumb and Tabs Navigation` to `Input and Separator Components`, `Popover and Interactive UI Primitives`, `Command Palette Dialogs`, `Accordion and Form Controls`, `Form Management and Validation`, `Menubar Navigation Components`, `Carousel Slider Components`, `Alert Dialog and Calendar Pickers`, `Badge and Toggle Components`, `Recharts Visualization Setup`, `Context Menu Primitives`, `Dropdown Menu Components`, `Buttons and Pagination Controls`, `Navigation Menu Primitives`, `Select Dropdown Controls`, `Drawer and Sheet Modals`, `One-Time Password Inputs`, `Avatar Profile Components`, `Alert Notification Cards`, `Scroll Area Custom Containers`?**
  _High betweenness centrality (0.208) - this node is a cross-community bridge._
- **Should `Core UI Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03773584905660377 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Core UI Dependencies` to `Package Metadata Configuration`?**
  _High betweenness centrality (0.148) - this node is a cross-community bridge._
- **Should `Input and Separator Components` be split into smaller, more focused modules?**
  _Cohesion score 0.05587808417997097 - nodes in this community are weakly interconnected._