import { Check, X } from 'lucide-react';

type FinishedCertButtonProps = {
    isFinished: boolean;
    clickHandler:(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

function FinishedCertButton({ isFinished, clickHandler }: FinishedCertButtonProps) {


  return (
    <button
      onClick={clickHandler}
      className="rounded-full z-10 bg-neutral-800 outline flex justify-center items-center absolute -top-2 -right-2"
    >
      {isFinished ? <Check className='text-green-900' /> : <X className='text-red-900'/>}
    </button>
  );
}

export default FinishedCertButton