import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import { TaskArea } from '../components';
import { withLayout } from '../layout/Layout';
import { TaskItem } from '../interfaces/task.interface';
import { API } from '../helpers/api';
import Link from 'next/link';

function TaskListPage({tasks}: TaskProps): JSX.Element {

  return (
    <>		
		<Head>
			<title>Helper</title>
			<meta name="description" content="Helper" />
			<link rel="icon" href="/favicon.ico" />
		</Head>	

		{
			tasks.map(t => (
				<TaskArea key={t.id} taskitem={t}/>
				))	
		}	
	</>    
  );
}

export default withLayout(TaskListPage);

export const getStaticProps = async () => {
    
	try {
		
		const { data: tasks } = await axios.get<TaskItem[]>(API.tasks.all);

		return {
			props: {
				tasks
			}
		};
		
	} catch (e) {
		console.log(`😱 Axios request failed: ${e}`);

		return {
			notFound: true
		};
	}
};

interface TaskProps extends Record<string, unknown> {
	tasks: TaskItem[];
}