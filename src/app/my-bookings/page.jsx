"use client"
import MyAllBookings from '@/components/tables/MyBookingsTable'
import React, { useEffect, useState } from 'react'

export default function MyBookingsPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchMyBooking = async () => {
            const res = await fetch("http://localhost:3000/api/service");
            const d = await res.json();
            setData(d)
        }
        fetchMyBooking();
    },[])
  return (
      <div>
          <MyAllBookings data={data} />
    </div>
  )
}
