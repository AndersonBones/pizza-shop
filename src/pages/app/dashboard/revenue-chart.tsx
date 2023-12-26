import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { LineChart, 
    Line, XAxis, 
    YAxis, CartesianGrid, 
    Tooltip, 
    ResponsiveContainer 
} from 'recharts';

const data = [
    {date:'12/12', revenue:1200},
    {date:'13/12', revenue:1600},
    {date:'14/12', revenue:1300},
    {date:'15/12', revenue:1100},
    {date:'16/12', revenue:900},
    {date:'17/12', revenue:1500},
    {date:'18/12', revenue:1800},

]
export function RevenueChart(){
    return (
        <Card className="col-span-6">
            <CardHeader className="flex-row items-center jutify-between pb-8 ">
                <div className="space-y-1">
                    <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
                    <CardDescription>Receita diária no periodo</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width={"100%"} height={248}>
                    
                    <LineChart data={data} style={{fontSize:12}}>
                        <CartesianGrid className="stroke-muted" vertical={false}></CartesianGrid>
                        <Line type={'linear'} strokeWidth={2} dataKey={'revenue'}  ></Line>
                        <YAxis width={80} tickLine={false} axisLine={false} tickFormatter={(value:number)=>value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})} />
                        <XAxis dy={18} axisLine={false} tickLine={false} dataKey={'date'} ></XAxis>
                        <Tooltip />

                        
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

