module.exports = {
	tags: ["posts"],
	layout: "post.njk",
	permalink: "/blog/{{ (locationTitle or title) | slugify }}/",
    author: "Therese",
    authorUrl: "https://thereseambrosismith.com/"
};
