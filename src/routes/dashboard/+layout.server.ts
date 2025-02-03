import { api } from '$lib/api'

type Account = {
	uid: string
	name: string
}

type Section = {
	uid: string
	name: string
}

type File = {
	uid: string
	name: string
	date: string
	size: number
}

export async function load({ locals, params }) {
	const accounts = await api.get<Account[]>('accounts', locals.token)
	const account = accounts[0]
	const sections = await api.get<Section[]>(`accounts/${account.uid}/folders`, locals.token)

	const section_id = params.section_id ?? sections[0].uid
	const section = sections.find((section) => section.uid === section_id)

	const files = await api.get<File[]>(
		`accounts/${account.uid}/folders/${section_id}/files`,
		locals.token
	)

	console.log(files)

	return {
		account,
		section,
		sections,
		files
	}
}
