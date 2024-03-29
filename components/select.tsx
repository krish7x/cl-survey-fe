"use client";
import { IOptions } from "@/types";
import { Button } from "flowbite-react";

export default function Select({
  options,
  selectedOptions,
  maxSelect,
  onChange,
}: {
  options: IOptions[];
  selectedOptions: any[];
  maxSelect: number;
  onChange: (id: string | number, maxSelect: number) => void;
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {options.map(({ id, name }, inx) => (
        <Button
          key={"button-" + inx}
          outline={!selectedOptions?.includes(id)}
          size={"lg"}
          className={`items-start hover:opacity-70 ${
            selectedOptions?.includes(inx) ? "bg-starStroke" : ""
          }`}
          gradientDuoTone="purpleToBlue"
          onClick={() => onChange(id, maxSelect)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
}
