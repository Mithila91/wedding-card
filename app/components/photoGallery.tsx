"use client";
import React from "react";
import Image from "next/image";
import { PhotoGallery } from "@/types";



interface GalleryProps {
  data: PhotoGallery[];
}

export default function Gallery({ data }: GalleryProps) {
  return (
    <div className="bg-blue-800 mx-auto px-5 py-20 lg:px-32 lg:pt-24">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {data.flatMap((item, index) => 
          item.gallery.images.map((imageUrl, imageIndex) => (
            <div key={`${item._id}-${imageIndex}`} className="overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt={`Gallery image ${imageIndex ++}`}
                layout="responsive"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}