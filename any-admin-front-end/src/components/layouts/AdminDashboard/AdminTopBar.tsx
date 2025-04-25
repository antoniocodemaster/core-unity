import Button from '../../UI/Button';
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const AdminTopBar = () => {
  return (
    <div className="flex justify-end p-4 bg-white ">
      <Button variant="transparent">
        <BellIcon className="w-6 h-6" />
      </Button>
      <Button variant="transparent">
        <UserCircleIcon className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default AdminTopBar;
