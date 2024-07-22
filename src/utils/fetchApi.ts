type FetchAPIParameters = {
	url: string;
	method?: "GET" | "POST" | "PUT" | "DELETE";
	body?: any;
};

const fetchApi = async ({ url, method="GET", body }: FetchAPIParameters) => {
	try {
		const options: RequestInit = {
			method,
		};

		if (body) {
			options.body = JSON.stringify(body);
			options.headers = { "Content-Type": "application/json" };
		}

		const response = await fetch(url, options);

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.message);
		}

		return await response.json();
	} catch (error: any) {
		console.error("Fetch API error:", error);
		throw error;
	}
};

export default fetchApi;
