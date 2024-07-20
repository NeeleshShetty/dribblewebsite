import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export function LandingHero() {
  return (
    <Card className="w-auto  ml-14 rounded-2xl bg-[#EEEBFE] p-4 mr-10 ">
      <CardContent className="flex flex-col lg:flex-row md:items-center md:justify-between gap-3">
        {/* left */}
        <div className="space-y-4 lg:ml-52 mt-5 md:mt-0">
          <h3>Ahead app</h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Master your life <br/> by mastering <br />emotions
          </h1>

          <div className="flex">
            <div>
              <img
                src="/apple.png"
                alt="download img"
                className="w-auto h-20"
              />
            </div>
            <div>
              <img
                src="/rating.png"
                alt="rating"
                className="w-auto h-24 -mt-[27px]"
              />
              <p className="-mt-[30px] ml-3 text-[0.9rem]">100+ AppStore reviews</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="border-[5px] mt-10 md:mt-0 md:mr-52 border-white border-dashed w-96 rounded-full p-8">
        <div className="bg-[#E2DBFD] rounded-full w-[300px] h-[290px]">
            <div className="w-32  ml-28 ">
                    <img src="/mobile.png" alt="mobile" className="h-72 overflow-y-visible"  />
                </div>
            </div>
        </div>
            
               
       
      </CardContent>
    </Card>
  );
}
