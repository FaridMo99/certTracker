export type Category = {
  name: string;
  done: boolean;
};

export type Skill = {
  title: string;
  path: string;
};

export type CantrillAwsProps = {
  categories: Category[];
  lessonAmount: number;
  images: string[];
  initialCount: number;
  certName:string
};