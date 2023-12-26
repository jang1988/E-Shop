'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useShoppingCart } from 'use-shopping-cart';
import Logo from '@/public/logo2.svg';
import Image from 'next/image';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Haiwell', href: '/Haiwell' },
    { name: 'Xinje', href: '/Xinje' },
    { name: 'Sensors', href: '/Sensors' },
];

export default function Navbar() {
    const pathname = usePathname();
    const {handleCartClick} = useShoppingCart()

    return (
        <header className="mb-8 border-b">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <Image src={Logo} alt='logo' width={250} />
                </Link>

                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {links.map((link, ind) => (
                        <div key={ind}>
                            {pathname === link.href ? (
                                <Link
                                    className="text-sky-500 text-lg font-semibold text-primary"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link
                                    className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                                    href={link.href}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="flex divide-x border-r sm:border-l">
                    <Button
                        variant={'outline'}
                        className="flex flex-col gap-y-1.5 h-12 w-12 sm:h20 sm:w-20 md:h-24 md:w-24 rounded-none"
                        onClick={() => handleCartClick()}
                    >
                        <ShoppingBag />
                        <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                            Cart
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
