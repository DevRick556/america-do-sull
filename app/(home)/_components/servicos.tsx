import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";

const Servicos = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="flex justify-between pt-6">
          <div className="h-[100px] w-[100px] bg-white text-black">
            serviço 1
          </div>
          <div className="w-36 space-y-6">
            <h4>Serviço 1</h4>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-violet-600 to-sky-400">
                  Ver Galeira
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Serviço</DialogTitle>
                  <DialogDescription>
                    Serviço danad di bom
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Servicos;
