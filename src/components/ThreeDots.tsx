import Link from 'next/link';
import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { IoDuplicateOutline } from 'react-icons/io5';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';
import { RxResume } from 'react-icons/rx';
import { HiEye, HiMiniPencil } from 'react-icons/hi2';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CheckOutsideClick from './CheckOutsideClick';

type Props = {
  data?: {
    id: number;
    icon?: any;
    title: any;
    path?: string;
    onClick?: any;
  }[];
};

const ThreeDots = (p: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10">
      <CheckOutsideClick onClickOutside={() => setIsOpen(false)}>
        <BsThreeDotsVertical
          size={20}
          className="mb-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <div
          className={`bg-[#f0f0f1f1] p-2 rounded absolute ${
            isOpen
              ? 'top-5 opacity-100 scale-100'
              : 'top-2 opacity-10 scale-0 invisible'
          } right-0 origin-top-right transition-all duration-300 min-w-[120px]`}
        >
          {(p.data || threeDotsData).map((item) => (
            <Link
              key={item.id}
              href={item.path || '#'}
              // onClick={item?.onClick}
              className="g-2 text-c2 hover:text-c1 p-2 rounded min-w-max text-base font-semibold"
            >
              {item.icon && <item.icon size={20} />}
              {item.title}
            </Link>
          ))}
        </div>
      </CheckOutsideClick>
    </div>
  );
};

export default ThreeDots;

const threeDotsData = [
  {
    id: 1,
    icon: HiEye,
    title: 'View',
    path: '/sa/',
  },
  {
    id: 2,
    icon: MdEdit,
    title: 'Edit',
    path: '/sa/',
  },

  {
    id: 3,
    icon: RiDeleteBin6Line,
    title: 'Delete',
    path: '/sa/',
  },
];
