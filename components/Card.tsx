interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 text-center">
        {title}
      </h2>
    </div>
  );
}
