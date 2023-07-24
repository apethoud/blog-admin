type button = {
  label: string;
  onClick?: () => void;
  primary?: boolean;
  type: "button" | "submit";
}

export default function Button({ label, onClick, primary, type }: button) {
  return (
    <button 
      className={primary
        ? `bg-sky-900 dark:bg-sky-700 
          text-sky-100 dark:text-sky-100 
          mt-4 p-2 
          font-bold`
        : `bg-sky-100 dark:bg-slate-800 
          text-sky-900 dark:text-sky-100 
          mt-4 p-2 
          font-bold`
      }
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}