import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import Orders from '../src/components/scenes/Orders'

export default function OrdersPage() {
	return <Orders />
}
