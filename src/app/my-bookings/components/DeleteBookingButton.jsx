"use client"
import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";
export default function DeleteBookingButton({ id }) {
  const router = useRouter();
    const handleDelete = async (id) => {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/api/service/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await res.json();
     
      router.refresh();
    }
  return (
    <>
      <MdDelete
        onClick={() => handleDelete(id)}
        className="h-8 w-8 font-bold cursor-pointer"
      />
    </>
  );
}
