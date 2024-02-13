import { useState } from 'react';

export const useDrawer = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return { showDrawer, setShowDrawer };
};
