import Image from "next/image";
import Link from "next/link";

export default function inquiries() {
  return (
    <div className="-mt-[90px] w-full h-screen relative">
      <Link href="/">
        <Image
          src="/images/Inquiries.jpg"
          alt="product"
          fill
          className="object-cover"
          priority
        />
      </Link>
    </div>
  );
}
