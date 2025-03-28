import Menu from "@/components/shared/header/menu";
import { APP_NAME } from "@/lib/constants";

import Image from "next/image";
import Link from "next/link";
import MainNav from "../(root)/order/main-nav";

export default function UserLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="flex flex-col">
                <div className="border-b container mx-auto">
                    <div className="flex items-center h-16 px-4">
                        <Link href='/' className="w-22">
                            <Image src='/images/favicon.png' height={48} width={48} alt={APP_NAME}></Image>
                        </Link>
                        {/* {main nav} */}
                        <MainNav />
                        <div className="ml-auto items-center flex space-x-4">
                            <Menu />
                        </div>
                    </div>
                </div>
                <div className="flex space-y-4 p-8 pt-6 container mx-auto">
                    <div className="w-full">{children}</div>
                </div>
            </div>
        </>
    );
}
