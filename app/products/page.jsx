import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div className="w-full h-screen relative">
      <Link href="/">
        <Image
          src="/images/product-banner.png"
          alt="product"
          fill
          className="object-cover"
          priority
        />
      </Link>
    </div>
  );
}
