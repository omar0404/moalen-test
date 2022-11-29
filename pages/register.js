import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import Register from '../src/components/scenes/Register'

export async function getServerSideProps(context) {
	return {
		props: {
			query: context.query
		}
	}
}

export default function RegisterPage(props) {
	return <Register {...props} />
}
