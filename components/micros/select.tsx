'use client';

import { IOptions } from '@/types';
import { Button } from 'flowbite-react';

export default function Select({
  options,
  selectedOptions,
  maxSelect,
  onChange,
}: {
  options: IOptions[];
  selectedOptions: Array<number | string>;
  maxSelect: number;
  onChange: (
    id: string | number,
    maxSelect: number,
    linkedTo?: string | number,
  ) => void;
}) {
  return (
    <div className="flex w-full flex-col gap-4 md:w-[calc(326px)]">
      {options.map(({ id, name, linkedTo }, inx) => (
        <Button
          key={'button-' + inx}
          size={'lg'}
          className={`cursor-pointer !justify-start border-custom-7 bg-inherit !p-0 text-left !transition-none hover:!bg-inherit focus:ring-0 ${
            selectedOptions?.includes(id) &&
            'border-custom-10 bg-custom-9 hover:!bg-custom-9'
          }`}
          onClick={() => onChange(id, maxSelect, linkedTo)}
        >
          <p className="py-[calc(6px)] text-lg text-custom-8">{name}</p>
        </Button>
      ))}
    </div>
  );
}
