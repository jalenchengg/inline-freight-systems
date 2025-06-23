import Image from 'next/image'
import React from 'react'

import Link from 'next/link'


export default function Footer() {
  return (
    <div className="w-full bg-white py-2 px-2 flex flex-col items-center justify-between gap-2 md:flex-row md:px-12">
        <div className="flex items-center gap-6">
      <Image
        src="/home.png"
        alt="IFS footer logo"
        width={147}
        height={86}
        className="object-contain"
      />
      
      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-6 text-xl text-black font-medium">
        <Link href="/about">About</Link>
        <Link href="/agent-directory">Agent Directory</Link>
        <a href="mailto:gordon@inlinefsi.com">Contact</a>
      </div>
      </div>

      <div className="">
        <p className="text-xs text-black font-medium text-center md:flex-row md:items-end">
          © Inline Freight Systems Inc. All rights reserved.
        </p>
      </div>
    </div>
  )
}