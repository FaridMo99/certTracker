import Categories from '@/components/Categories'
import Count from '@/components/Count';
import Images from '@/components/Images';
import type { CantrillAwsProps } from '@/lib/types';



function CantrillAws(props: CantrillAwsProps) {

  const { categories, initialCount, lessonAmount, images, certName } = props
  
    return (
      <>
        <Categories categories={categories} certName={certName} />
        <Count
          initialCount={initialCount}
          maxLessons={lessonAmount}
          certName={certName}
        />
        <Images images={images} />
      </>
    );
}

export default CantrillAws