import { UpdateIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';

const Update = () => {
  
    const [open, setOpen] = React.useState(false);
    const eventDateRef = React.useRef(new Date());
    const timerRef = React.useRef(0);

    React.useEffect(() => {
      return () => clearTimeout(timerRef.current);
    }, []);

    return (
    <Toast.Provider swipeDirection="right">
      <button
        className="border border-tomato11 font-semibold rounded-lg px-5 py-3 flex items-center gap-3 hover:border-tomato9 transition-colors focus:outline-none focus:ring-2 focus:ring-tomato11 focus:ring-offset-2 focus:ring-offset-background"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            
            setOpen(true);
          }, 100);
        }}
      >
        <UpdateIcon />
        Update Catalog
      </button>

      <Toast.Root
        className="bg-black rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
        duration={3000}
      >
        <Toast.Title className="[grid-area:_title] font-medium text-white  text-[15px]">
          Updating Catalog...
        </Toast.Title>

      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_15px] fixed bottom-0  p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  )
}

export default Update