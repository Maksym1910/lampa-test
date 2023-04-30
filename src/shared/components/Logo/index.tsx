import React, { SVGProps } from 'react';
import LogoSVG from 'shared/assets/logo.svg';

import styles from './styles.module.scss';

type LogoProps = SVGProps<SVGSVGElement> & {
  onClick?: () => void;
};

export const Logo = (props: LogoProps) => <LogoSVG className={styles.root} {...props} />;
