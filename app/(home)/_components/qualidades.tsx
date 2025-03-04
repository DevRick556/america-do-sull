import { Card, CardContent } from "@/app/_components/ui/card";
import { BadgeCheckIcon, HandHelpingIcon } from "lucide-react";

const Qualidades = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Card>
                <CardContent className=" bg-gray-950 flex flex-col items-center text-gray-200 p-6 rounded-xl">
                    <HandHelpingIcon/>
                    <h1 className="text-lg">Valores</h1>
                    <ul>
                        <li>Segurança</li>
                        <li>Qualidade</li>
                        <li>Transparência</li>
                        <li>Compromisso</li>
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardContent className=" bg-gray-950 flex flex-col items-center text-gray-200 p-6 rounded-xl">
                    <BadgeCheckIcon/>
                    <h1 className="text-lg" >Missão</h1>
                    <ul  className="list-disc">
                        <li>Segurança</li>
                        <li>Qualidade</li>
                        <li>Transparência</li>
                        <li>Compromisso</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

export default Qualidades;