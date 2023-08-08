type button = {
  label: string;
  marginTop?: boolean;
  onClick?: () => void;
  primary?: boolean;
  type: "button" | "submit";
}

export default function Button({ label, marginTop, onClick, primary, type }: button) {
  return (
    <button
      className={`p-2 font-bold ${marginTop && "mt-4"} ${primary
        ? `bg-sky-900 dark:bg-sky-700 
          text-sky-100 dark:text-sky-100`
        : `bg-sky-100 dark:bg-slate-800 
          text-sky-900 dark:text-sky-100`
      }`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}