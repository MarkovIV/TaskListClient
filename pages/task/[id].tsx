//import { useRouter } from 'next/router';
import React from 'react';
import Head from 'next/head';
import { TaskArea, Button } from '../../components';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { TaskItem } from '../../interfaces/task.interface';
import { API } from '../../helpers/api';

function TaskPage({tasks}: TaskProps): JSX.Element {
	{/*const router = useRouter();
	const { id } = router.query;*/
	}

	const closeClick = () => {			
		location.href='/';			
		return;
	};

	return (
		<>		
			<Head>
				<title>Helper</title>
				<meta name="description" content="Helper" />
				<link rel="icon" href="/favicon.ico" />
			</Head>	
			<div>
				{
					tasks.map(t => (
					<TaskArea key={t.id} taskitem={t}/>
				))}				
				<Button appearance='close' onClick={closeClick}/>
			</div>			
		</>    
	);
}

export default withLayout(TaskPage);

export const getStaticProps = async (context) => {

	try {
		let tasks: TaskItem[] = [];
		const { data: task } = await axios.get<TaskItem>(API.tasks.all + context.params.id);
		tasks = tasks.concat(task);

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

export const getStaticPaths = async () => {
  const res = await fetch(API.tasks.all);
  const tasksItems = await res.json();

  const paths = tasksItems.map((item) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

interface TaskProps extends Record<string, unknown> {
	tasks: TaskItem[];
}
