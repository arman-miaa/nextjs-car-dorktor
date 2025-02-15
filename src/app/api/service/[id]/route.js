import { NextResponse } from "next/server";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { revalidatePath } from "next/cache";


export const DELETE = async (req, { params }) => {
  const p = await params;
  const bookingCollection = dbConnect(collectionNamesObj.bookingCollection);
  const query = { _id: new ObjectId(p.id) };

  // validation
  const session = await getServerSession(authOptions);
  const currentBooking = await bookingCollection.findOne(query);

  const isOwnerOK = session?.user?.email == currentBooking.email;

  if (isOwnerOK) {
    
    //Deleting User specific booking
    const deleteResponse = await bookingCollection.deleteOne(query);
  revalidatePath("/my-bookings")
    // return NextResponse(deleteResponse)
    return NextResponse.json({
      success: true,
      message: "Deleted successfully",
    });

  } else {
    return NextResponse.json({success: false, message: "Forbidden Action"}, {status: 401})
  }

}


export const GET = async (req, {params}) => {
  const p = await params;
  const serviceCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await serviceCollection.findOne({ _id: new ObjectId(p.id) });
    return NextResponse.json(data);
}