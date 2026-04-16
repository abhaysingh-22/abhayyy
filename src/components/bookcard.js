import Image from 'next/image'
import Link from 'next/link'

export default function BookCard({ id, title, author, description, coverImage }) {
  return (
    <Link href={`/books/${id}`} scroll={false}>
      <div 
        className="flex flex-col h-full bg-[#f8eadd] rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
      >
        <Image 
          src={coverImage} 
          alt={title} 
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-1 text-gray-800">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{author}</p>
          <p className="text-sm text-gray-700 flex-grow">{description}</p>
        </div>
      </div>
    </Link>
  );
}