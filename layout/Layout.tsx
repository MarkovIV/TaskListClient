import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
//import { Toolbar } from './Toolbar/Toolbar';
import { Footer } from './Footer/Footer';
import { AppContextProvider, IAppContext } from '../context/app.context';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header}/>
			{//<Toolbar className={styles.toolbar}/>
			}
			<div className={styles.body}>
				{children}
			</div>
			<Footer className={styles.footer}/>			
		</div>	
	);	
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider tasks={props.tasks} >
				<Layout>
				<Component {...props} />
				</Layout>
			</AppContextProvider>
		);
	};
};