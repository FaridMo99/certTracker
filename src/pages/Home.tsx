import CertCard from '@/components/CertCard';
import { skills } from '@/lib/constants';

function Home() {

  return (
    <div className="w-full h-full flex flex-col items-center pt-30">
      <h1 className="mb-20 text-white text-2xl">Zertifikate</h1>
      <section className="grid grid-cols-2 gap-4">
        {skills.map((skill) => (
          <CertCard skill={skill} />
        ))}
      </section>
    </div>
  );
}

export default Home