// ListSkeleton.js

import React from 'react';
import Skeleton from 'react-loading-skeleton'; // You can use a library like react-loading-skeleton for skeleton UI
import 'react-loading-skeleton/dist/skeleton.css';

const ListSkeleton = ({ count }: {count: number}) => {
  // Generate an array of count length for placeholders
  const skeletonItems = Array.from({ length: count }).map((_, index) => (
    <div key={index} className="skeleton-item">
      <Skeleton/>
    </div>
  ));

  return (
    <>
      {skeletonItems}
    </>
  );
};

export default ListSkeleton;
