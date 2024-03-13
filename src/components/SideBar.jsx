import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 flex flex-col min-h-screen">
      <div className="p-4">
        <h2 className="text-lg font-bold">Sidebar</h2>
        <ul className="mt-4">
          <li className="py-2">Menu Item 1</li>
          <li className="py-2">Menu Item 2</li>
          <li className="py-2">Menu Item 3</li>
        </ul>
      </div>
      {/* This empty div will push the content to the bottom */}
      <div className="flex-grow"></div>
    </aside>
  );
};

export default Sidebar;
