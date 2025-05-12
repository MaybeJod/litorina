interface CourseCardProps {
  title: string;
  imageUrl?: string;
}

export default function CourseCard({ title, imageUrl }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={imageUrl || "https://placehold.co/400"}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-l text-center font-semibold" title={title}>
          {title}
        </h3>
      </div>
    </div>
  );
}
