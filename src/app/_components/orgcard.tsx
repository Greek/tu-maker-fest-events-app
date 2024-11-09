import React from "react";
import { useRouter } from "next/navigation";
import type { Org_Involved } from "~/types/Organization";

interface OrgCardProps {
  org: Org_Involved;
}

const OrgCard = ({ org }: OrgCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    window.open(`${org.originalUrl}`, "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="flex w-full transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg"
    >
      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-center p-4">
        <h2 className="mb-3 text-xl font-bold">{org.name}</h2>
        <p className="mb-2 text-sm text-gray-500">{org.shortName}</p>
        <p className="line-clamp-3 text-sm text-gray-600">{org.summary}</p>
      </div>

      {/* Image Section */}
      <div className="relative w-1/3 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#ffffff]/70" />
        <img
          src={org.profilePicture || "/api/placeholder/400/320"}
          alt={org.name}
          className="hover:scale-120 h-full w-full transform object-cover transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};

export default OrgCard;