
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface OrderDetailsProps {

}

export function OrderDetails(props: OrderDetailsProps) {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 2323ds55dsd4</DialogTitle>
                <DialogDescription>
                    Detalhes do pedido
                </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">Status</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Nome do cliente</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">

                                    <span className="font-medium text-muted-foreground">Anderson Bones</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">Telefone</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">

                                    <span className="font-medium text-muted-foreground">(65) 99623-7611</span>
                                </div>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell className="text-muted-foreground">E-mail</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">

                                    <span className="font-medium text-muted-foreground">abones19@hotmail.com</span>
                                </div>
                            </TableCell>
                        </TableRow>


                        <TableRow>
                            <TableCell className="text-muted-foreground">Realizado há</TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">

                                    <span className="font-medium text-muted-foreground">há 3 minutos</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Table>
                    
                    <TableHeader>
                        
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead className="text-right">Qtd.</TableHead>
                            <TableHead className="text-right">Preço</TableHead>
                            <TableHead className="text-right">Subtotal</TableHead>
                        </TableRow>

                        <TableRow>
                            <TableCell >Pizza Pepperoni Familia</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 69,00</TableCell>
                            <TableCell className="text-right">R$ 138,00</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell >Pizza Muarla Familia</TableCell>
                            <TableCell className="text-right">2</TableCell>
                            <TableCell className="text-right">R$ 69,00</TableCell>
                            <TableCell className="text-right">R$ 138,00</TableCell>
                        </TableRow>
                    </TableBody>

                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total do pedido</TableCell>
                            <TableCell className="text-right font-medium">R$ 207,00</TableCell>

                        </TableRow>
                    </TableFooter>
                </Table>


            </div>
        </DialogContent>
    )
}