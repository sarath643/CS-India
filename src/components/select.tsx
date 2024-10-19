import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

interface IOption {
  id: string;
  label: string;
}

interface ISelectProps {
  id?: string;
  value: IOption;
  options: IOption[];
  onChange: (value: IOption) => void;
  label?: string;
  className?: string;
}

export default function Select({ value, options, onChange, label, id, className }: ISelectProps) {
  return (
    <div>
      <label htmlFor={id} className='text-sm font-medium leading-8 text-blackT dark:text-white'>
        {label}
      </label>

      <Listbox value={value} onChange={onChange}>
        <ListboxButton
          className={clsx(
            'relative block h-10 sm:h-12 dark:bg-accent/70 text-base font-medium  dark:border rounded-lg capitalize bg-accent/70  dark:bg-gray-900  py-1.5 pr-8 pl-3 text-left  text-white dark:text-white',
            'focus:outline-none focus:ring-2 focus:ring-accent data-[focus]:ring-2 data-[focus]:ring-accent data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
            className
          )}>
          {value.label}
          <ChevronDownIcon
            className='absolute pointer-events-none group top-2.5 sm:top-3.5 right-2 size-4 dark:fill-white/60'
            aria-hidden='true'
          />
        </ListboxButton>
        <ListboxOptions
          anchor='bottom'
          transition
          className={clsx(
            'w-[var(--button-width)] z-50 h-[40vh]  rounded-md border border-white/5 bg-gray-100  dark:bg-gray-900  p-1 mt-2 [--anchor-gap:var(--spacing-1)] focus:outline-none focus:ring-2 focus:ring-accent',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}>
          {options.map((item) => (
            <ListboxOption
              key={item.label}
              value={item}
              className='group flex h-10 cursor-default items-center gap-2 data-[selected]:bg-accent/30 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-gray-300 dark:data-[focus]:bg-white/10'>
              <CheckIcon className='invisible size-4 fill-black dark:fill-white group-data-[selected]:visible' />
              <div className='text-black capitalize dark:text-white text-sm/6 '>{item.label}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  );
}
