import React, { useState } from 'react';
import { Skeleton} from "@/components/ui/skeleton";

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
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className="w-full h-full object-cover rounded-lg"
        style={{ opacity: loading ? 0 : 1 }}
      />
    </div>
  );
};

export default Loading;
