import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import colors from 'tailwindcss/colors'

import { PieChart, 
    Pie,
    ResponsiveContainer, 
    Cell
} from 'recharts';

const data = [
    {product:'Pepperoni', amount:40},
    {product:'Mussalera', amount:30},
    {product:'Marguerita', amount:50},
    {product:'4 Queijos', amount:16},
    {product:'Frango frito', amount:26},
]

const COLORS = [
    colors.sky[500], 
    colors.amber[500], 
    colors.violet[500], 
    colors.emerald[500],
    colors.rose[500]
];


const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }:any) => {
    const RADIAN = Math.PI / 180
    const radius = 12 + innerRadius + (outerRadius - innerRadius)
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
  
    return (
      <text
        x={x}
        y={y}
        className="fill-muted-foreground text-xs"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {data[index].product.length > 12
          ? data[index].product.substring(0, 12).concat('...')
          : data[index].product}{' '}
        ({`${value}%`})
      </text>
    )
};

export function PopularProductsChart(){
    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8 ">
                <div className="space-y-1 flex items-center gap-3">
                    <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground"></BarChart>
                </div>
            </CardHeader>

            <CardContent>
                <ResponsiveContainer width={"100%"} height={258}>
                    
                    <PieChart data={data} style={{fontSize:12}}>
                        
                        <Pie 
                            innerRadius={60}
                            outerRadius={80}
                            data={data} 
                            dataKey={"amount"} 
                            nameKey={"product"} 
                            labelLine={false} 
                            label={renderCustomizedLabel}
                            cy={"50%"}
                            cx={"50%"}
                            >

                            {data.map((entry, index)=>(
                                <Cell key={`cell-${index}`} fill={COLORS[index]} className="stroke-background"/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}

