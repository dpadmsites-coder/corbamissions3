import Image from "next/image";
import { cn } from "@/lib/utils";

const WavingFlag = ({ src, alt, className }) => {
    return (
        <div className={cn("relative overflow-hidden rounded-2xl shadow-xl", className)}>
            {/* Wave container */}
            <div className="w-full h-full relative">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    style={{
                        filter: "brightness(1.1) contrast(1.1)",
                    }}
                />
                {/* Shine overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-[200%] h-full animate-flag-shine pointer-events-none mix-blend-overlay z-10" />
            </div>
        </div>
    );
};

export default WavingFlag;
