import React, { useEffect, useState } from 'react';
import IndexSectionLayout from '@/components/IndexSectionLayout';
import type { Nav } from '@/interfaces/NavInterface'; 
import type { Course } from '@/interfaces/CourseInterface'; 
import type { News } from '@/interfaces/NewsInterface'; 
import Header from '@/components/Header';

// Import your API fetching functions (replace with your actual imports)
// import { fetchNavigation, fetchCourses, fetchNews } from '@/api';

const Index: React.FC = () => {
  const [navData, setNavData] = useState<Nav[] | null>(null);
  const [courseData, setCourseData] = useState<Course[] | null>(null);
  const [newsData, setNewsData] = useState<News[] | null>(null);

  useEffect(() => {
    // Replace these with your actual API fetching logic
    const fetchAllData = async () => {
      try {
        // Example using placeholder fetch functions
        const navResponse = await Promise.resolve({
          data: [
            { id: 1, attributes: { documentId: '...', title: 'Home', order: 1, url: '/', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
            { id: 2, attributes: { documentId: '...', title: 'About', order: 2, url: '/about', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
            { id: 3, attributes: { documentId: '...', title: 'Services', order: 3, url: '/services', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
            { id: 4, attributes: { documentId: '...', title: 'Contact', order: 4, url: '/contact', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
            { id: 5, attributes: { documentId: '...', title: 'Blog', order: 5, url: '/blog', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
          ],
        });
        setNavData(navResponse.data as Nav[]); // Type assertion

        const courseResponse = await Promise.resolve({
          data: [
            { id: 1, attributes: { documentId: '...', title: 'Course 1', description: [{ type: 'paragraph', children: [{ text: 'Desc 1' }] }], createdAt: '...', updatedAt: '...', publishedAt: '...', slug: null, summary: null, isFeatured: true, coursePeriod: null, application: null, costs: null, moreInformation: null, place: null } },
            { id: 2, attributes: { documentId: '...', title: 'Course 2', description: [{ type: 'paragraph', children: [{ text: 'Desc 2' }] }], createdAt: '...', updatedAt: '...', publishedAt: '...', slug: null, summary: null, isFeatured: false, coursePeriod: null, application: null, costs: null, moreInformation: null, place: null } },
            { id: 3, attributes: { documentId: '...', title: 'Course 3', description: [{ type: 'paragraph', children: [{ text: 'Desc 3' }] }], createdAt: '...', updatedAt: '...', publishedAt: '...', slug: null, summary: null, isFeatured: true, coursePeriod: null, application: null, costs: null, moreInformation: null, place: null } },
            { id: 4, attributes: { documentId: '...', title: 'Course 4', description: [{ type: 'paragraph', children: [{ text: 'Desc 4' }] }], createdAt: '...', updatedAt: '...', publishedAt: '...', slug: null, summary: null, isFeatured: false, coursePeriod: null, application: null, costs: null, moreInformation: null, place: null } },
            { id: 5, attributes: { documentId: '...', title: 'Course 5', description: [{ type: 'paragraph', children: [{ text: 'Desc 5' }] }], createdAt: '...', updatedAt: '...', publishedAt: '...', slug: null, summary: null, isFeatured: true, coursePeriod: null, application: null, costs: null, moreInformation: null, place: null } },
          ],
        });
        setCourseData(courseResponse.data as Course[]); // Type assertion

        const newsResponse = await Promise.resolve({
          data: [
            { id: 1, attributes: { documentId: '...', title: 'News 1', description: [{ type: 'paragraph', children: [{ text: 'Content 1' }] }], publishedDate: '2025-05-09', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
            { id: 2, attributes: { documentId: '...', title: 'News 2', description: [{ type: 'paragraph', children: [{ text: 'Content 2' }] }], publishedDate: '2025-05-08', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
            { id: 3, attributes: { documentId: '...', title: 'News 3', description: [{ type: 'paragraph', children: [{ text: 'Content 3' }] }], publishedDate: '2025-05-07', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
            { id: 4, attributes: { documentId: '...', title: 'News 4', description: [{ type: 'paragraph', children: [{ text: 'Content 4' }] }], publishedDate: '2025-05-06', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
            { id: 5, attributes: { documentId: '...', title: 'News 5', description: [{ type: 'paragraph', children: [{ text: 'Content 5' }] }], publishedDate: '2025-05-05', createdAt: '...', updatedAt: '...', publishedAt: '...' } },
          ],
        });
        setNewsData(newsResponse.data as News[]); // Type assertion

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAllData();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <Header/>
      {navData && <IndexSectionLayout type="nav" data={navData} />}
      {courseData && <IndexSectionLayout type="course" data={courseData} title="Our Courses" />}
      {newsData && <IndexSectionLayout type="news" data={newsData} title="Latest News" />}
      {/* Add more sections as needed */}
    </div>
  );
};

export default Index;

// const Index = () => {
//   return (
//     <main>
//       Home

//       {/* HERO */}

//       {/* Home navigation cards */}

//       {/* Featured course cards */}

//       {/* News cards */}
//     </main>
//   )
// }

// export default Index