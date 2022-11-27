import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import Account from '../src/components/scenes/Account'
import {requireAuth} from '../src/utils/requireAuth'
export async function getServerSideProps () {
	return requireAuth()
}
export default function AccountPage() {
	return <Account />
}
