import { Card } from '@/components/ui/card';
import { skills } from '@/lib/constants';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <div className="w-full h-full flex flex-col items-center pt-30">
      <h1 className="mb-20 text-white text-2xl">Zertifikate</h1>
      <section className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <Link to={`/${skill.path}`}>
            <Card className='h-40 text-center break-after-all wrap-anywhere px-4 hover:bg-black/50 font-bold text-lg' key={skill.path}>{skill.title}</Card>
          </Link>
        ))}
      </section>
    </div>
  );
}

export default Home