import React, { useContext, useEffect, useState } from 'react';

import { LogoImage } from './styles';

export default function Logo(props) {

	return <>
		<LogoImage {...props} />
	</>
};