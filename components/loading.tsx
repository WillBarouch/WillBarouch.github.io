import React, { useState } from 'react';
import { Skeleton} from "@/components/ui/skeleton";
import Image from 'next/image';

interface LoadingProps {
  src: string;
  alt: string;
}

const Loading: React.FC<LoadingProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {loading && (
        <Skeleton className="absolute inset-0 flex items-center justify-center">
        </Skeleton>
      )}
      <Image
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className="w-40vmin h-56vmin object-cover object-right-center image"
        style={{ opacity: loading ? 0 : 1 }}
        width={"3000"}
        height={"3000"}
      />
    </div>
  );
};

export default Loading;
