const structuredData = (post, imgPath) => {
	let data = {
		"@context": "http://schema.org/",
		"@type": "NewsArticle",
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": "https://google.com/article",
		},
		headline: "Article headline",
		image: ["https://example.com/photos/1x1/photo.jpg"],
		datePublished: "2015-02-05T08:00:00+08:00",
		dateModified: "2015-02-05T09:20:00+08:00",
		author: {
			"@type": "Person",
			name: "Vivian Liu",
		},
		publisher: {
			"@type": "Person",
			name: "Vivian Liu",
			logo: {
				"@type": "ImageObject",
				url: "https://google.com/logo.jpg",
			},
		},
	};

	return JSON.stringify(data);
};
export default structuredData;
