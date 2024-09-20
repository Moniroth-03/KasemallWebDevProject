/* eslint-disable @next/next/no-img-element */
import React from "react";

type Person = {
  name: string;
  email: string;
  imageUrl: string;
};

const Page: React.FC<{ people: Person[] }> = ({ people }) => (
  <div>
    <p>We have fruits and vegetables</p>
    <ul role="list" className="p-6 divide-y divide-slate-200">
      {people.map((person, index) => (
        <li key={index} className="flex py-4 first:pt-0 last:pb-0">
          <img
            className="h-10 w-10 rounded-full"
            src={person.imageUrl}
            alt={person.name}
          />
          <div className="ml-3 overflow-hidden">
            <p className="text-sm font-medium text-slate-900">{person.name}</p>
            <p className="text-sm text-slate-500 truncate">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

// Sample data for demonstration purposes
const samplePeople: Person[] = [
  { name: "John Doe", email: "john@example.com", imageUrl: "/john.jpg" },
  { name: "Jane Doe", email: "jane@example.com", imageUrl: "/jane.jpg" },
  // Add more people as needed
];

// This is a Next.js page component
const HomePage: React.FC = () => <Page people={samplePeople} />;

export default HomePage;
