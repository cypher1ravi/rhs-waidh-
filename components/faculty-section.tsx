"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Award, BookOpen } from "lucide-react"

interface FacultyMember {
  id: number
  name: string
  position: string
  department: string
  qualification: string
  experience: string
  subjects: string[]
  email: string
  phone: string
  image: string
  achievements: string[]
}

const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    position: "Principal",
    department: "Administration",
    qualification: "Ph.D. in Education, M.Ed.",
    experience: "25+ years",
    subjects: ["Educational Leadership", "School Management"],
    email: "principal@rhs.edu",
    phone: "+91 9876543210",
    image: "/placeholder.svg?height=300&width=300",
    achievements: ["Best Principal Award 2022", "Educational Excellence Award"],
  },
  {
    id: 2,
    name: "Mrs. Priya Sharma",
    position: "Vice Principal",
    department: "Academic Affairs",
    qualification: "M.Ed., M.A. English",
    experience: "20+ years",
    subjects: ["English Literature", "Communication Skills"],
    email: "vp@rhs.edu",
    phone: "+91 9876543211",
    image: "/placeholder.svg?height=300&width=300",
    achievements: ["Outstanding Teacher Award", "Literary Excellence Recognition"],
  },
  {
    id: 3,
    name: "Mr. Amit Verma",
    position: "Head of Science Department",
    department: "Science",
    qualification: "M.Sc. Physics, B.Ed.",
    experience: "18+ years",
    subjects: ["Physics", "Mathematics"],
    email: "amit.verma@rhs.edu",
    phone: "+91 9876543212",
    image: "/placeholder.svg?height=300&width=300",
    achievements: ["Science Teacher of the Year", "Innovation in Teaching Award"],
  },
  {
    id: 4,
    name: "Mrs. Sunita Gupta",
    position: "Senior Mathematics Teacher",
    department: "Mathematics",
    qualification: "M.Sc. Mathematics, B.Ed.",
    experience: "15+ years",
    subjects: ["Mathematics", "Statistics"],
    email: "sunita.gupta@rhs.edu",
    phone: "+91 9876543213",
    image: "/placeholder.svg?height=300&width=300",
    achievements: ["Best Mathematics Teacher", "Student Favorite Award"],
  },
  {
    id: 5,
    name: "Mr. Ravi Patel",
    position: "Computer Science Teacher",
    department: "Computer Science",
    qualification: "MCA, B.Tech CSE",
    experience: "12+ years",
    subjects: ["Computer Science", "Information Technology"],
    email: "ravi.patel@rhs.edu",
    phone: "+91 9876543214",
    image: "/placeholder.svg?height=300&width=300",
    achievements: ["Technology Integration Award", "Coding Excellence Recognition"],
  },
  {
    id: 6,
    name: "Mrs. Kavita Singh",
    position: "Hindi Teacher",
    department: "Languages",
    qualification: "M.A. Hindi, B.Ed.",
    experience: "14+ years",
    subjects: ["Hindi Literature", "Sanskrit"],
    email: "kavita.singh@rhs.edu",
    phone: "+91 9876543215",
    image: "/placeholder.svg?height=300&width=300",
    achievements: ["Language Excellence Award", "Cultural Contribution Recognition"],
  },
]

export default function FacultySection() {
  return (
    <div className="space-y-8">
      {/* Faculty Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">50+</h3>
          <p className="text-gray-600">Faculty Members</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">15+</h3>
          <p className="text-gray-600">Years Avg. Experience</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">25+</h3>
          <p className="text-gray-600">Awards Won</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
          <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">100%</h3>
          <p className="text-gray-600">Qualified Teachers</p>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <CardTitle className="text-xl">{member.name}</CardTitle>
              <CardDescription className="text-blue-600 font-semibold">{member.position}</CardDescription>
              <Badge variant="outline" className="w-fit mx-auto">
                {member.department}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Qualification</h4>
                <p className="text-sm text-gray-600">{member.qualification}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                <p className="text-sm text-gray-600">{member.experience}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Subjects</h4>
                <div className="flex flex-wrap gap-1">
                  {member.subjects.map((subject, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Achievements</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {member.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Award className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
