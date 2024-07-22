import Link from "next/link";
import { RedirectLinkProps } from "./types";

const RedirectLink: React.FC<RedirectLinkProps> = ({ href, text, classes }) => {
	return (
		<Link
			href={href}
			className={`dark-button-link ${classes ? classes : "w-max"}`}
		>
			{text}
		</Link>
	);
};

export default RedirectLink;
