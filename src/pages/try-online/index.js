import React from 'react';
import Layout from '@theme/Layout';
import { useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
// import Card from '../components/Card';
import Card from '../../Components/Card';
import FormField from '../../Components/FormField';
import MethodButton from '../../Components/MethodButton';
import MethodField from '../../Components/MethodField';

const options = `const options = {
    el: '#datepicked'
}`;

const TryOnline = () => {
	// useEffect(() => {
	// 	const MCDatepicker = window.MCDatepicker;
	// 	const calendar = MCDatepicker.create({ el: '#datepicker', bodyType: 'modal' });
	// 	return () => {
	// 		calendar.destroy();
	// 	};
	// }, []);
	return (
		<Layout title={'Try Online'}>
			<main className="try-online page">
				<div className="container row">
					<Card name="Demo ">
						<input id="datepicker" readOnly type="text" />
						<SyntaxHighlighter language="javascript" useInlineStyles={false} wrapLongLines={true}>
							{options}
						</SyntaxHighlighter>
					</Card>
					<Card name="Options ">
						<FormField type="input" name="el" />
						<FormField type="input" name="dateFormat" />
						<FormField type="select" options={['modal', 'inline', 'permanent']} name="bodyType" />
						<FormField type="select" options={['true', 'false']} name="showCalendarDisplay" />
						<FormField type="input" name="customWeekDays" />
						<FormField type="input" name="customMonths" />
						<FormField type="input" name="selectedDate" />
						<FormField type="select" options={['true', 'false']} name="disableWeekends" />
						<FormField type="input" name="disableWeekDays" />
						<FormField type="input" name="disableDates" />
						<FormField type="input" name="markDates" />
						<FormField type="select" options={['true', 'false']} name="daterange" />
						<FormField type="input" name="events" />
						<FormField type="input" name="eventColorScheme" />
					</Card>
					<Card name="Methods ">
						{/* MethodField */}
						<MethodField name="getDay" onClickHandler={() => 'getDay'} />
						<MethodField name="getDate" onClickHandler={() => 'getDate'} />
						<MethodField name="getMonth" onClickHandler={() => 'getMonth'} />
						<MethodField name="getYear" onClickHandler={() => 'getYear'} />
						<MethodField name="getFullDate" onClickHandler={() => 'getFullDate'} />
						<MethodField name="getEvents" onClickHandler={() => 'getEvents'} />
						<MethodField name="getFormatedDate" onClickHandler={() => 'getFormatedDate'} />
						<div className="card__row">
							<MethodButton name="open" onClickHandler={() => console.log('open')} />
							<MethodButton name="close" onClickHandler={() => console.log('close')} />
						</div>
						<div className="card__row">
							<MethodButton name="reset" onClickHandler={() => console.log('reset')} />
							<MethodButton name="destroy" onClickHandler={() => console.log('destroy')} />
						</div>
					</Card>
				</div>
			</main>
		</Layout>
	);
};

export default TryOnline;