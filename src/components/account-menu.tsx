import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuItem } from "./ui/dropdown-menu";


export function AccountMenu(){
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'outline'} className="flex items-center gap-2 select-none">
                    Pizza Shop
                    <ChevronDown className="h- w-4"></ChevronDown>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 ">

                <DropdownMenuLabel className="flex flex-col">
                    <span>Anderson Bones</span>
                    <span className="text=xs font-normal text-muted-foreground">abones19@hotmail.com</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator></DropdownMenuSeparator>

                <DropdownMenuItem className="cursor-pointer">
                    <Building className="w-4 h-4 mr-2"></Building>
                    <span>Perfil da loja</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="text-rose-500 dark:text-rose-400 cursor-pointer">
                    <LogOut className="w-4 h-4 mr-2"></LogOut>
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}