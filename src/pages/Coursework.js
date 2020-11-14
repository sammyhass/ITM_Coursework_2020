import React, { useEffect } from 'react';

import styles from './Coursework.module.css';

import img from '../assets/PSD_Lab.jpg';
import courseworkPDF from '../assets/Coursework.docx';

const Coursework = () => {
	useEffect(() => {
		document.title = 'Coursework';
	}, []);
	return (
		<div className={styles.Coursework}>
			<h1>Labs</h1>
			<div className={styles.CourseworkDisplay}>
				<ul>
					<li>
						<a href="http://users.sussex.ac.uk/~sh858/IM/labwork/Bounce/">
							Bounce (Lab 4)
						</a>
					</li>
					<li>
						<a href="http://users.sussex.ac.uk/~sh858/IM/labwork/HtmlCssLab/">
							HTML and CSS Lab (Lab 3)
						</a>
					</li>
				</ul>
				<figure>
					<img alt={'Photoshop Lab'} src={img} />
					<>
						<figcaption>
							<b>Photoshop Lab</b>
							<br />I produced this image in photoshop as part of the photoshop
							lab, I used masking to create the effects.
							<br />
							<a
								className={styles.ReportDownload}
								href={courseworkPDF}
								download
							>
								<i className="fa fa-download"></i> Download Report
							</a>
						</figcaption>
					</>
				</figure>
			</div>
		</div>
	);
};

export default Coursework;
