import dbConnect, { collectionNamesObj } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetailsPage({ params }) {
    const p = await params;
    const serviceCollection = dbConnect(collectionNamesObj.servicesCollection);
    const data = await serviceCollection.findOne({_id: new ObjectId(p.id)})
  return (
    <div>
      <section className="flex justify-center">
        <figure className="  relative">
          <Image
            src={"/assets/images/checkout/checkout.png"}
            width={1137}
            height={300}
            alt="banner"
          />
          <div className="transparent-layer overlay-bg absolute w-full h-full border-2 border-red-400 top-0">
            <div className='w-full h-full flex items-center font-bold text-2xl ps-16'>
              <div>
                <h1 className="text-white">Services Details</h1>
              </div>
            </div>
          </div>
        </figure>
          </section>
          <section>
              <Image src={data.img} width={400} height={280} alt={data.title} />
              <h2 className="font-bold">{ data.title}</h2>
          </section>
      <p>{p.id}</p>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
