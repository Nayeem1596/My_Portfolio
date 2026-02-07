import { Draggable } from "gsap/Draggable";
import gsap from "gsap";

import React from "react";
import { Navbar, Welcome, Dock, Home } from "@components";
import {
	Terminal,
	Safari,
	Resume,
	Finder,
	Text,
	Image,
	Contact,
	Photos,
} from "@windows";

import { StarsCanvas, EarthCanvas } from "@components/canvas";

gsap.registerPlugin(Draggable);

const App = () => {
	return (
		<main className="relative z-0 bg-black">
			<div className="relative z-0 h-full w-full">
				<Navbar />
				<Welcome />
				<Dock />

				<Terminal />
				<Safari />
				<Resume />
				<Finder />
				<Text />
				<Image />
				<Contact />
				<Photos />

				<Home />
				<StarsCanvas />
				<EarthCanvas />
			</div>
		</main>
	);
};

export default App;
