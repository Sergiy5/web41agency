import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export const SocialList: React.FC = () => {

    return (
      <ul className="flex flex-col items-center gap-8">
        <li className="flex justify-center items-center text-base text-white">
          <Link
            href={"https://www.instagram.com/web41.agency/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="icon-instagram" width={34} height={34} />
          </Link>
        </li>
        <li className="flex justify-center items-center text-base text-white">
          <Link
            href={"https://www.dribbble.com/web41"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="icon-dribbble" width={34} height={34} />
          </Link>
        </li>
        <li className="flex justify-center items-center text-base text-white">
          <Link
            href={"mailto:hello@web41.agency"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id="icon-email" width={34} height={34} />
          </Link>
        </li>
      </ul>
    );
}