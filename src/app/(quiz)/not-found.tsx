"use client";
import RedirectLink from "@/components/RedirectLink";

const NotFound = () => {
	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="inline-flex flex-col gap-5 items-center">
				<p className="text-2xl font-bold uppercase">No data is available</p>
				<RedirectLink href="/" text="Go Home" />
			</div>
		</div>
	);
};

export default NotFound;
