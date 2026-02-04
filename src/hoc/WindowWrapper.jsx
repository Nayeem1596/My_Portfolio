import React, { useLayoutEffect, useRef } from "react";
import useWindowStore from "@store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
	const Wrapped = (props) => {
		const { focusWindow, windows } = useWindowStore();

		const { isOpen, zIndex } = windows[windowKey] ?? {
			isOpen: false,
			zIndex: 1,
		};
		const ref = useRef(null);

		// for making window openable
		useGSAP(() => {
			const el = ref.current;
			if (!el || !isOpen) return;

			el.style.display = "block";

			gsap.fromTo(
				el,
				{ scale: 0.8, opacity: 0, y: 40 },
				{
					scale: 1,
					opacity: 1,
					y: 0,
					duration: 0.4,
					ease: "power3.out",
				},
			);
		}, [isOpen]);

		// for making window draggable
		useGSAP(() => {
			const el = ref.current;
			if (!el) return;

			const [instance] = Draggable.create(el, {
				onPress: () => focusWindow(windowKey),
			});

			return () => instance.kill();
		}, []);

		// for making window closable
		useLayoutEffect(() => {
			const el = ref.current;
			if (!el) return;
			el.style.display = isOpen ? "block" : "none";
		}, [isOpen]);

		return (
			<section
				id={windowKey}
				ref={ref}
				style={{ zIndex }}
				className="absolute"
			>
				<Component {...props} />
			</section>
		);
	};

	Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

	return Wrapped;
};

export default WindowWrapper;
