'use client'
import CourseData from "@/data/music_courses.json"
import Link from "next/link"
import { BackgroundGradient } from "./ui/background-gradient"
import { Button } from "./ui/moving-border"

interface course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    // image: "guitar-fundamentals.jpg"
}

function FeaturedCourses() {
    const FeaturedCourses = CourseData.courses.filter
    ((course:course) => course.isFeatured)
      


  return (

      <div className="py-12 bg-gray-800">
        
       <div className="text-center">
       <h2 className="text-base text-teal-500 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
       <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
       </div>

       <div className="mt-10">
     <div className="grid grid-cols-1 sm:grid-cols-3 lg:gird-cols-3 gap-8 justify-center">
       {FeaturedCourses.map((course:course) =>(
        
        <div key={course.id} className="flex justify-center">
          <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
          <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
         <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
         <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
       
        <Link href={`/courses/${course.slug}`}>
        
            <Button
            borderRadius='5.75rem'
            className= " bg-white dark:bg-zinc-900 text-black dark:text-white border-neutral-200 dark:border-slate-800" >
            Learn More
            </Button>
            </Link>
          </div>
            </BackgroundGradient>
        </div>
       ))}
     </div>

       </div>

       <div className="mt-20 text-center">
 
        <Link href={"/courses"} >
        
            <Button
            borderRadius='5.75rem'
            className= " bg-white text-black border-neutral-200 dark:border-slate-800" >
            View All 
            </Button>
            </Link>

        </div>
        
        </div>
  )
}

export default FeaturedCourses