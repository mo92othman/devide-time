// Avatar.js
import React from 'react';

const Avatar = ({ svgString }) => {
  return (
    <div className="w-24 h-auto rounded-full">
      <div dangerouslySetInnerHTML={{ __html: svgString }} />
    </div>
  );
};

export default Avatar;
