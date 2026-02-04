import React, { useState } from "react";

import WindowWrapper from "@hoc/WindowWrapper";
import WindowControls from "@components/WindowControls";
import { Download } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url,
).toString();

const Resume = () => {
	const [numPages, setNumPages] = useState(null);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	return (
		<>
			<div id="window-header">
				<WindowControls target="resume" />
				<h2>Resume.pdf</h2>
				<a
					href="files/resume.pdf"
					download
					className="cursor-pointer"
					title="Download Resume"
				>
					<Download className="icon" />
				</a>
			</div>

			<div style={{ height: "calc(100vh - 100px)", overflowY: "auto" }}>
				<Document
					file="files/resume.pdf"
					onLoadSuccess={onDocumentLoadSuccess}
				>
					{Array.from({ length: numPages ?? 0 }, (_, index) => (
						<Page
							key={`page_${index + 1}`}
							pageNumber={index + 1}
							renderTextLayer={true}
							renderAnnotationLayer={true}
						/>
					))}
				</Document>
			</div>
		</>
	);
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
