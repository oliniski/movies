import { UpdateIcon } from '@radix-ui/react-icons';

const Update = () => {

    return (
      <button
        className="border border-tomato11 font-semibold rounded-lg px-5 py-3 flex items-center gap-3 hover:border-tomato9 transition-colors focus:outline-none focus:ring-2 focus:ring-tomato11 focus:ring-offset-2 focus:ring-offset-background"
        onClick={() => {
          console.log('o')
        }}
      >
        <UpdateIcon />
        Update Catalog
      </button>
  )
}

export default Update