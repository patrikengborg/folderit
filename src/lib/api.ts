import { PUBLIC_API_URL } from '$env/static/public'

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

class API {
	private baseURL: string

	constructor(baseURL: string) {
		this.baseURL = baseURL
	}

	private async request<T>(
		method: RequestMethod,
		endpoint: string,
		token?: string,
		data?: unknown,
		headers: Record<string, string> = {}
	): Promise<T> {
		const res = await fetch(`${this.baseURL}/${endpoint}`, {
			method,
			headers: {
				'Content-Type': 'application/json',
				...(token ? { Authorization: `Bearer ${token}` } : {}),
				...headers
			},
			body: data ? JSON.stringify(data) : undefined
		})

		if (!res.ok) {
			throw new Error(`API Error: ${res.status} ${res.statusText}`)
		}

		return res.json() as Promise<T>
	}

	get<T>(endpoint: string, token?: string, headers?: Record<string, string>) {
		return this.request<T>('GET', endpoint, token, undefined, headers)
	}

	post<T>(endpoint: string, data: unknown, token?: string, headers?: Record<string, string>) {
		return this.request<T>('POST', endpoint, token, data, headers)
	}

	put<T>(endpoint: string, data: unknown, token?: string, headers?: Record<string, string>) {
		return this.request<T>('PUT', endpoint, token, data, headers)
	}

	delete<T>(endpoint: string, token?: string, headers?: Record<string, string>) {
		return this.request<T>('DELETE', endpoint, token, undefined, headers)
	}
}

// Initialize API instance
export const api = new API(PUBLIC_API_URL)
