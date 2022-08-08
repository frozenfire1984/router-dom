import {createContext} from "react";

const fakeApi = [
	{
		id: 1,
		title: "Lorem",
		more: "Lorem Lorem Lorem Lorem"
	},
	{
		id: 2,
		title: "ipsum",
		more: "ipsum ipsum ipsum ipsum"
	},
	{
		id: 3,
		title: "dolor",
		more: "dolor dolor dolor dolor"
	},
	{
		id: 4,
		title: "sit",
		more: "sit sit sit sit sit"
	},
	{
		id: 5,
		title: "amen",
		more: "amen amen amen amen"
	},
]


const NewsContext = createContext()

export {NewsContext, fakeApi}