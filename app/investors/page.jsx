import Image from "next/image";
import Link from "next/link";

export default function investors() {
  return (
    <div className=" w-full h-screen relative">
      <Link href="/">
        <Image
          src="/images/investors.png"
          alt="product"
          fill
          className="object-cover"
          priority
        />
      </Link>
    </div>
  );
}
