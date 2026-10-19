# Graph Report - dintists  (2026-10-17)

## Corpus Check
- 93 files · ~36,414 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 3, .lock 1, .toml 1)

## Summary
- 664 nodes · 1432 edges · 42 communities (33 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 16 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `14e59af8`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- routeTree.gen.ts
- Core UI Dependencies
- Input and Separator Components
- cn
- Package Metadata Configuration
- TypeScript Compiler Configuration
- Code Quality and Linting Setup
- Popover and Interactive UI Primitives
- Routing Error Capture System
- Command Palette Dialogs
- Shadcn Component Config
- accordion.tsx
- Form Management and Validation
- menubar.tsx
- carousel.tsx
- pagination.tsx
- navigation-menu.tsx
- Recharts Visualization Setup
- carousel.tsx
- breadcrumb.tsx
- sheet.tsx
- Build and Dev NPM Scripts
- avatar.tsx
- Select Dropdown Controls
- Drawer and Sheet Modals
- ESLint Configuration
- lovable-error-reporting.ts
- One-Time Password Inputs
- tabs.tsx
- radio-group.tsx
- Vite and Test Configuration
- scroll-area.tsx
- Sonner Toast Notifications
- Clinic Launch and Demo Gating
- Package Overrides Configuration
- Vite TanStack Integration
- Aspect Ratio Layouts
- Collapsible Disclosure Panels
- Jest DOM Testing Setup
- Lovable Git Sync Requirements
- resizable.tsx
- Routes

## God Nodes (most connected - your core abstractions)
1. `cn()` - 220 edges
2. `react` - 51 edges
3. `useI18n()` - 46 edges
4. `lucide-react` - 28 edges
5. `meta()` - 23 edges
6. `PageHero()` - 22 edges
7. `compilerOptions` - 22 edges
8. `CtaBand()` - 21 edges
9. `@tanstack/react-router` - 16 edges
10. `t` - 14 edges

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

## Communities (42 total, 9 thin omitted)

### Community 0 - "routeTree.gen.ts"
Cohesion: 0.05
Nodes (101): lucide-react, @tanstack/react-query, @tanstack/react-router, CasesSlider(), ClinicTour(), Hero3DTooth(), HowCaseGoes(), steps (+93 more)

### Community 1 - "Core UI Dependencies"
Cohesion: 0.04
Nodes (56): dependencies, class-variance-authority, clsx, cmdk, date-fns, embla-carousel-react, @google/model-viewer, @hookform/resolvers (+48 more)

### Community 2 - "Input and Separator Components"
Cohesion: 0.07
Nodes (31): Input, Separator, SidebarContent, SidebarContext, SidebarContextProps, SidebarFooter, SidebarGroup, SidebarGroupAction (+23 more)

### Community 3 - "cn"
Cohesion: 0.09
Nodes (35): @radix-ui/react-context-menu, @radix-ui/react-dropdown-menu, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle (+27 more)

### Community 4 - "Package Metadata Configuration"
Cohesion: 0.07
Nodes (29): name, private, sideEffects, type, date-fns, eslint, eslint-config-prettier, @google/model-viewer (+21 more)

### Community 5 - "TypeScript Compiler Configuration"
Cohesion: 0.08
Nodes (23): compilerOptions, allowImportingTsExtensions, exactOptionalPropertyTypes, jsx, lib, module, moduleResolution, noEmit (+15 more)

### Community 6 - "Code Quality and Linting Setup"
Cohesion: 0.09
Nodes (22): devDependencies, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+14 more)

### Community 7 - "Popover and Interactive UI Primitives"
Cohesion: 0.11
Nodes (16): clsx, @radix-ui/react-checkbox, @radix-ui/react-hover-card, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-slider, @radix-ui/react-switch, react (+8 more)

### Community 8 - "Routing Error Capture System"
Cohesion: 0.16
Nodes (14): @tanstack/react-start, consumeLastCapturedError(), describeError(), describeStatus(), originalConsoleError, safeStringify(), renderErrorPage(), fetch() (+6 more)

### Community 9 - "Command Palette Dialogs"
Cohesion: 0.13
Nodes (17): cmdk, @radix-ui/react-dialog, Command, CommandDialog(), CommandEmpty, CommandGroup, CommandInput, CommandItem (+9 more)

### Community 10 - "Shadcn Component Config"
Cohesion: 0.11
Nodes (18): aliases, components, hooks, lib, ui, utils, iconLibrary, registries (+10 more)

### Community 11 - "accordion.tsx"
Cohesion: 0.40
Nodes (4): @radix-ui/react-accordion, AccordionContent, AccordionItem, AccordionTrigger

### Community 12 - "Form Management and Validation"
Cohesion: 0.18
Nodes (14): @radix-ui/react-label, react-hook-form, FormControl, FormDescription, FormFieldContext, FormFieldContextValue, FormItem, FormItemContext (+6 more)

### Community 13 - "menubar.tsx"
Cohesion: 0.11
Nodes (12): @radix-ui/react-menubar, Menubar, MenubarCheckboxItem, MenubarContent, MenubarItem, MenubarLabel, MenubarRadioItem, MenubarSeparator (+4 more)

### Community 14 - "carousel.tsx"
Cohesion: 0.19
Nodes (14): @radix-ui/react-alert-dialog, react-day-picker, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter(), AlertDialogHeader() (+6 more)

### Community 15 - "pagination.tsx"
Cohesion: 0.24
Nodes (9): ButtonProps, Pagination(), PaginationContent, PaginationEllipsis(), PaginationItem, PaginationLink(), PaginationLinkProps, PaginationNext() (+1 more)

### Community 16 - "navigation-menu.tsx"
Cohesion: 0.09
Nodes (23): class-variance-authority, @radix-ui/react-navigation-menu, @radix-ui/react-toggle, @radix-ui/react-toggle-group, Alert, AlertDescription, AlertTitle, alertVariants (+15 more)

### Community 17 - "Recharts Visualization Setup"
Cohesion: 0.24
Nodes (11): recharts, ChartConfig, ChartContainer, ChartContext, ChartContextProps, ChartLegendContent, ChartStyle(), ChartTooltipContent (+3 more)

### Community 18 - "carousel.tsx"
Cohesion: 0.17
Nodes (14): embla-carousel-react, Carousel, CarouselApi, CarouselContent, CarouselContext, CarouselContextProps, CarouselItem, CarouselNext (+6 more)

### Community 19 - "breadcrumb.tsx"
Cohesion: 0.22
Nodes (8): @radix-ui/react-slot, Breadcrumb, BreadcrumbEllipsis(), BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator()

### Community 20 - "sheet.tsx"
Cohesion: 0.31
Nodes (9): SheetContent, SheetContentProps, SheetDescription, SheetFooter(), SheetHeader(), SheetOverlay, SheetTitle, sheetVariants (+1 more)

### Community 21 - "Build and Dev NPM Scripts"
Cohesion: 0.22
Nodes (9): scripts, build, build:dev, dev, format, lint, preview, test (+1 more)

### Community 22 - "avatar.tsx"
Cohesion: 0.40
Nodes (4): @radix-ui/react-avatar, Avatar, AvatarFallback, AvatarImage

### Community 23 - "Select Dropdown Controls"
Cohesion: 0.28
Nodes (8): @radix-ui/react-select, SelectContent, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger

### Community 24 - "Drawer and Sheet Modals"
Cohesion: 0.25
Nodes (7): vaul, DrawerContent, DrawerDescription, DrawerFooter(), DrawerHeader(), DrawerOverlay, DrawerTitle

### Community 25 - "ESLint Configuration"
Cohesion: 0.29
Nodes (6): @eslint/js, eslint-plugin-prettier, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, typescript-eslint

### Community 26 - "lovable-error-reporting.ts"
Cohesion: 0.33
Nodes (6): describeThrown(), LovableErrorOptions, LovableEvents, reportLovableError(), Window, ErrorComponent()

### Community 27 - "One-Time Password Inputs"
Cohesion: 0.33
Nodes (5): input-otp, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot

### Community 28 - "tabs.tsx"
Cohesion: 0.40
Nodes (4): @radix-ui/react-tabs, TabsContent, TabsList, TabsTrigger

### Community 29 - "radio-group.tsx"
Cohesion: 0.50
Nodes (3): @radix-ui/react-radio-group, RadioGroup, RadioGroupItem

### Community 31 - "scroll-area.tsx"
Cohesion: 0.67
Nodes (3): @radix-ui/react-scroll-area, ScrollArea, ScrollBar

### Community 33 - "Clinic Launch and Demo Gating"
Cohesion: 0.67
Nodes (3): Clinic Approval Checklist, Demo Mode, Site Content Config

### Community 40 - "resizable.tsx"
Cohesion: 0.50
Nodes (3): react-resizable-panels, ResizableHandle(), ResizablePanelGroup()

## Knowledge Gaps
- **25 isolated node(s):** `@hookform/resolvers`, `@tailwindcss/vite`, `@tanstack/router-plugin`, `@types/three`, `date-fns` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 243 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Popover and Interactive UI Primitives` to `routeTree.gen.ts`, `Input and Separator Components`, `cn`, `Package Metadata Configuration`, `Command Palette Dialogs`, `accordion.tsx`, `Form Management and Validation`, `menubar.tsx`, `carousel.tsx`, `pagination.tsx`, `navigation-menu.tsx`, `Recharts Visualization Setup`, `carousel.tsx`, `breadcrumb.tsx`, `sheet.tsx`, `avatar.tsx`, `Select Dropdown Controls`, `Drawer and Sheet Modals`, `One-Time Password Inputs`, `tabs.tsx`, `radio-group.tsx`, `scroll-area.tsx`?**
  _High betweenness centrality (0.232) - this node is a cross-community bridge._
- **What connects `@hookform/resolvers`, `@tailwindcss/vite`, `@tanstack/router-plugin` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `routeTree.gen.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05160628844839371 - nodes in this community are weakly interconnected._
- **Why does `cn()` connect `cn` to `Input and Separator Components`, `Popover and Interactive UI Primitives`, `Command Palette Dialogs`, `accordion.tsx`, `Form Management and Validation`, `menubar.tsx`, `carousel.tsx`, `pagination.tsx`, `navigation-menu.tsx`, `Recharts Visualization Setup`, `carousel.tsx`, `breadcrumb.tsx`, `sheet.tsx`, `avatar.tsx`, `Select Dropdown Controls`, `Drawer and Sheet Modals`, `One-Time Password Inputs`, `tabs.tsx`, `radio-group.tsx`, `scroll-area.tsx`, `resizable.tsx`?**
  _High betweenness centrality (0.184) - this node is a cross-community bridge._
- **Should `Core UI Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.03571428571428571 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `Core UI Dependencies` to `Package Metadata Configuration`?**
  _High betweenness centrality (0.147) - this node is a cross-community bridge._
- **Should `Input and Separator Components` be split into smaller, more focused modules?**
  _Cohesion score 0.06585365853658537 - nodes in this community are weakly interconnected._