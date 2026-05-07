Read "Agents.md" before starting.

We're adding the design system and UI primitive components.

Install and configure 'shadcn/ui'

Add these shadcn components:
-Button
-Card
-Dialog
-Input
-Tabs
-Textarea
-ScrollArea

Do not modify the generated 'components/ui/\*' files after installation.

install "lucide-react".

create 'lib/utils.ts' with a reusable 'cn()' helper for merging tailwind classes.

Ensure all the components match the existing dark theme in 'globals.css'.

### Check when done

-All components imported without errors.
-'cn()' works properly.
-No default light styling appears.
