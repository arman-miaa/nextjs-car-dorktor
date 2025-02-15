// "use client"
import MyAllBookings from '@/components/tables/MyBookingsTable'
import { headers } from 'next/headers';
// import React, { useEffect, useState } from 'react'
     const fetchMyBooking = async () => {
         const res = await fetch(
           `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/service`,
           {
                    headers: new Headers(await headers()),
            
           }
         );
       const d = await res.json();
         return d;
     };
export default async function MyBookingsPage() {
    const data = await fetchMyBooking();
    // const [data, setData] = useState([]);
    // useEffect(() => {
   
    //     fetchMyBooking();
    // },[])
  return (
      <div>
          <MyAllBookings data={data} />
    </div>
  )
}
