import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { User, Mail, Phone, MapPin, Edit } from "lucide-react";

const user = {
   name: "Sarah Johnson",
   email: "sarah.johnson@example.com",
   phone: "+1 (555) 123-4567",
   address: "123 Main Street, San Francisco, CA 94102",
   avatar: "/public/user.png",
};

export default function UserProfileCard() {
   return (
      <div className="min-h-screenp-4 flex items-center justify-center">
         <div className="w-full max-w-md">
            <Card className="w-full rounded-xl shadow border border-gray-200">
               <div className="flex flex-col items-center p-6 border-b">
                  <Image
                     src={user.avatar}
                     alt={user.name}
                     className="w-24 h-24 rounded-full mb-4 border"
                  />
                  <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
                  <Button
                     size="sm"
                     //   variant="outline"
                     className="mt-2"
                  >
                     Edit Profile
                  </Button>
               </div>

               <div className="p-6 space-y-4">
                  {/* Name */}
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                     <User className="w-5 h-5 text-gray-500 flex-shrink-0" />
                     <div>
                        <p className="text-xs text-gray-500 uppercase font-medium">Name</p>
                        <p className="text-gray-900 font-medium">{user.name}</p>
                     </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                     <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                     <div>
                        <p className="text-xs text-gray-500 uppercase font-medium">Email</p>
                        <p className="text-gray-900 font-medium">{user.email}</p>
                     </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
                     <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                     <div>
                        <p className="text-xs text-gray-500 uppercase font-medium">Phone</p>
                        <p className="text-gray-900 font-medium">{user.phone}</p>
                     </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 p-3 bg-gray-100 rounded-lg">
                     <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                     <div>
                        <p className="text-xs text-gray-500 uppercase font-medium">Address</p>
                        <p className="text-gray-900 font-medium leading-relaxed">{user.address}</p>
                     </div>
                  </div>
               </div>
            </Card>
         </div>
      </div>
   );
}