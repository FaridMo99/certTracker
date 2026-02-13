import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import FinishedCertButton from './FinishedCertButton';
import type { Skill } from '@/lib/types';
import { useState } from 'react';

function CertCard({ skill }: { skill: Skill }) {
          const localStorageFinishedKey = skill.title + "finished";
          const localStorageFinished = localStorage.getItem(
            localStorageFinishedKey,
          );

          const [isFinished, setIsFinished] = useState<boolean>(
            localStorageFinished
              ? (JSON.parse(localStorageFinished) as boolean)
              : false,
          );

          function clickHandler(
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
          ) {
            e.stopPropagation();
            setIsFinished((pre) => {
              const newVal = !pre;
              localStorage.setItem(
                localStorageFinishedKey,
                JSON.stringify(newVal),
              );
              return newVal;
            });
          }
    
  return (
    <Link to={`/${skill.path}`}>
      <Card
        className={`h-40 relative text-center break-after-all wrap-anywhere px-4 bg-black ${isFinished ? "bg-black/10 hover:bg-black/5" : "hover:bg-black/50"} font-bold text-lg`}
        key={skill.path}
      >
        {skill.title}
        <FinishedCertButton
          isFinished={isFinished}
          clickHandler={clickHandler}
        />
      </Card>
    </Link>
  );
}

export default CertCard