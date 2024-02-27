"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function ProjectCard() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="w-[350px]">
          <CardHeader className="flex flex-col gap-2">
            <CardTitle>
              <Image
                src="/ecom-mern.png"
                alt="ecom"
                // fill={true}
                style={{ objectFit: "cover" }}
                width={500}
                height={500}
              />
            </CardTitle>
            <CardDescription>
              <span className="bg-[#231E36] text-[#854CE6] text-xs px-2 py-1 rounded-lg">
                React Js
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[625px] z-[1200]">
        <DialogHeader>
          <DialogTitle>
            <Image
              src="/ecom-mern.png"
              alt="ecom"
              // fill={true}
              style={{ objectFit: "cover" }}
              width={500}
              height={500}
            />
          </DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
