import dayjs from "dayjs";

import { navLinks, navIcons } from "@constants/index.js";
import React from "react";
import useWindowStore from "@store/window.js";

const Navbar = () => {
	const { openWindow } = useWindowStore();
	return (
		<nav>
			<div>
				<img src="/images/logo.svg" alt="logo" />
				<p className="font-bold">Nayeem's Portfolio</p>
				<ul>
					{navLinks.map(({ id, name, type }) => (
						<li key={id}>
							<button
								type="button"
								className="cursor-pointer"
								onClick={() => openWindow(type)}
							>
								{name}
							</button>
						</li>
					))}
				</ul>
			</div>

			<div>
				<ul>
					{navIcons.map(({ id, img }) => (
						<li key={id}>
							<img
								src={img}
								className="icon-hover"
								alt={`icon-${id}`}
							/>
						</li>
					))}
				</ul>

				<time>{dayjs().format("ddd D MMM h:mm A")}</time>
			</div>
		</nav>
	);
};

export default Navbar;
