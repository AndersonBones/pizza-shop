import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";


export function OrderTableRow() {

    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size={"xs"}>
                            <Search className="h-3 w-3"></Search>
                            <span className="sr-only">Detalhes do pedido</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails></OrderDetails>
                </Dialog>

            </TableCell>

            <TableCell className="font-mono text-xs font-medium">ghbdff555885df</TableCell>
            <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>

            <TableCell className="font-medium">Anderson Bones</TableCell>
            <TableCell className="font-medium">R$ 149,98</TableCell>

            <TableCell>
                <Button variant={'outline'} size={'xs'}>
                    <ArrowRight className="h-3 w-3 mr-2"></ArrowRight>
                    Aprovar
                </Button>
            </TableCell>

            <TableCell>
                <Button variant={'ghost'} size={'xs'}>
                    <X className="h-3 w-3 mr-2"></X>
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}