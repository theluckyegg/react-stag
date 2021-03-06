import React, { useState } from 'react';

import { AriaCommon } from '../../lib';
import { BoxProps } from '../base/Box';

export type HeadingProps = {
	size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & BoxProps;

const Heading = React.forwardRef((props: HeadingProps, ref: React.Ref<HTMLHeadingElement>) => {

	const [ focus ] = useState(false);
	
	const style: React.CSSProperties = {
		...props.style
	};

	const aria: AriaCommon = {
		...props.aria
	};

	return (
		<props.size ref={ref} {...aria}
			className={props.class ? props.class : undefined}
			style={style} hidden={focus}>
			{props.children}
		</props.size>
	);
});

Heading.displayName = 'Heading';

export { Heading };