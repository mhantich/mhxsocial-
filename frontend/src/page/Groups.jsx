import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";


function Groups() {

    const demoGroups = [
        {
          id: 1,
          avatar: "https://example.com/avatars/group1.jpg",
          name: "Mountain Adventurers",
          numberOfPeople: 15,
          description: "A group for those who love hiking and mountain climbing. Join us for weekly adventures and explore new heights!",
        },
        {
          id: 2,
          avatar: "https://example.com/avatars/group2.jpg",
          name: "Book Lovers Club",
          numberOfPeople: 24,
          description: "A community of book enthusiasts who meet monthly to discuss their favorite reads and share recommendations.",
        },
        {
          id: 3,
          avatar: "https://example.com/avatars/group3.jpg",
          name: "Tech Innovators",
          numberOfPeople: 30,
          description: "Join us to stay updated on the latest in tech. We organize regular meetups, hackathons, and workshops.",
        },
        {
          id: 4,
          avatar: "https://example.com/avatars/group4.jpg",
          name: "Fitness Friends",
          numberOfPeople: 20,
          description: "A supportive group for fitness enthusiasts. Whether you're a beginner or a pro, join us for workouts, tips, and motivation.",
        },
        {
          id: 5,
          avatar: "https://example.com/avatars/group5.jpg",
          name: "Culinary Explorers",
          numberOfPeople: 12,
          description: "A group for foodies who love to cook and try new recipes. We host monthly potlucks and cooking classes.",
        },
        {
          id: 6,
          avatar: "https://example.com/avatars/group6.jpg",
          name: "Photography Enthusiasts",
          numberOfPeople: 18,
          description: "Join our group of photography lovers to share tips, techniques, and showcase your work. We organize photo walks and contests.",
        },
        {
          id: 7,
          avatar: "https://example.com/avatars/group7.jpg",
          name: "Travel Buddies",
          numberOfPeople: 22,
          description: "A group for those who love to travel. Share your travel experiences, tips, and plan trips with fellow travel enthusiasts.",
        },
      ];
      

      

  return (
    <div className="mt-20 min-h-screen md:w-4/6 md:mx-auto flex items-center">
  
 
  { 
          <div className="grid grid-cols-1 sm:grid-cols-2 py-1  md:grid-cols-3 lg:grid-cols-4 gap-3 ">
            {demoGroups.map((item, index) => (
              <Card
                className="relative text-center gap-2 py-2 flex flex-col justify-between items-center"
                key={index}
              >
                <dev className='flex w-full px-4 py-2 justify-between items-center'>
                    <img className=" rounded-full w-20 h-20" src='https://picsum.photos/200' alt="" />
                   <CardTitle className="text-sm">{item.name}</CardTitle>
                </dev>
                <CardContent className="  text-xs overflow-hidden placeholder-gray-700 p-2">
                <p>{item.description}</p>
                </CardContent>
               
                <div className="flex gap-1 items-center  text-xs lg:text-sm">
                <p className="capitalize font-semibold text-sm">   number Of People: {item.numberOfPeople}</p> 
                  <Star size={16} color="#f0f278" />
                </div>
                  <Button className="text-sm capitalize gap-4 bg-red flex w-1/2 bg-black  ">
                  Join Us <Heart  size={13}/>  
                  </Button>
              
             
              </Card>
            ))}
          </div>
        }
    </div>
  )
}

export default Groups