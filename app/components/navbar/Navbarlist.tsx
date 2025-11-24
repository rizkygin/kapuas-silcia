import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from 'react';

export default function NavbarList(props: { name: string ,href:string }, ) {
  return (
    <li>
      
      <a
        href={props.href}
        className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 hover:bg-amber-40
        hover:animate-bounce"
        aria-current="page"
      >
        {props.name}
      </a>
    </li>
  );
}
