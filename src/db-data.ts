

export const COURSES: any = [

    {
        id: 1,
        title : "CSci 160: Computer Science - I",
        iconUrl: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        longDescription: "A introductory programming class",
        Level: '100 level',
        credits: 4
    },
    {
        id: 2,
        title: "CSci 161: Computer Science - II",
        iconUrl: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        longDescription: "Introduction to data structures, algorithms and program complexity",
        Level: '100 level',
        credits: 4
    },

    {
        id: 3,
        title: 'CSci 213: Modern Software Development ',
        longDescription: "Introduction to modern software developemnt. C#",
        iconUrl: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        Level: '200 level',
        credits: 3
    },

    {
        id: 4,
        title: "CSci 313: Advanced Software Development",
        iconUrl: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        longDescription: "Introduction to modern software frameworks",
        Level: '200 level',
        credits: 3
    },
    {
        id: 5,
        title: 'CSci 222: Discrete Math',
        longDescription: "Discrete Math",
        iconUrl: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        Level: '200 level',
        credits: 3
    },
    {
        id: 6,
        title: 'CSci 374: Computer Organization',
        longDescription: 'Computer Architecture and organization',
        iconUrl: 'https://www.ndsu.edu/themes/ndsu/logo.svg',
        Level: '300 level',
        credits: 3
    },
 
];


export function findCourseById(courseId:number) {
    return COURSES.find(course => course.id === courseId);
}