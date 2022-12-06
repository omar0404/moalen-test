import React, {  useEffect } from 'react';
import { FaShieldAlt, FaGem, FaClipboardCheck, FaUsers } from "react-icons/fa";
import { BsFillPlayCircleFill } from "react-icons/bs";

import Layout from '../../common/HomeLayout'

import { Section, SectionContent,SectionContent2, FeaturesList, Feature, SectionTitle, SectionTitle2, VideoPlay, SectionImage, ClickToPlay, VideoSquare2, VideoSquare, Shape1, Shape2, Shape3, SectionActions, SectionSubTitle, Footer } from './styles';
import Image from 'next/image';
import { myLoader } from '../../../utils/loader';

export default function Flow() {
	useEffect(() => {
		init();
	}, []);

	const init = async () => {

	};

	return <Layout title={"عن معلن"} backLink={"/"}>
		<Section grey={true}>
			{/* <Shape1 /> */}
			<SectionContent>
				<SectionActions>
					<SectionTitle>أنت متخيل أن إعلانك يكون ضدك !</SectionTitle>
					<SectionSubTitle>يمكن الموضوع يكون غريب.. لكنه حقيقي!
					</SectionSubTitle>
					<SectionSubTitle>
					الكل الآن يعمل لأجل تكون حملته الإعلانية لصالح مشروعه.. والإعلانات عالم متجدد، وكل يوم يتطور أكثر وأكثر، وتزيد الأبحاث والدراسات لأجل تحقيق أعلى نسبة فائدة من الإعلان، وهنا ممكن يكون إعلانك ضدك!
إذا ضيَّع جهدك وما حقق توقعاتك، وأخذ وقتك بدون لا يوصل جمهورك...
لكن ما لنا بالمشاكل.. علينا بالحلول !
					</SectionSubTitle>
				</SectionActions>
				<SectionImage>
					<Image src={'/assets/images/home-icon.png'} alt={'about-image'} loader={myLoader} width={220} height={220}/>
					</SectionImage>
			</SectionContent>
		</Section>
		<Section >
			<SectionContent2>
				<Shape2 />
				<SectionImage>
					<VideoPlay>
						<VideoSquare />
						<VideoSquare2>
							<BsFillPlayCircleFill />
						</VideoSquare2>
					</VideoPlay>
				</SectionImage>
				<SectionActions>
					<SectionTitle>مين معلن؟
</SectionTitle>
					<SectionSubTitle>
					منصة سعودية، تجمع أكبر المؤثرين في كل المجالات!
					</SectionSubTitle>
					<SectionSubTitle>		
مهمتها ربط المؤثرين بالعديد من العلامات التجارية لصناعة حملات ترويجية، وتغطيات تضمن الوصول إلى الفئات المستهدفة، وتحقق أفضل النتائج في قياسات أداء الحملة، وبطريقة ذكية وسهلة

					</SectionSubTitle>
					<SectionSubTitle>
					تساعدك منصة معلن على اختيار أنسب المؤثرين لحملتك الإعلانية من خلال التحليلات الدقيقة التي تساعدك على التعرف عليهم وعلى جمهورك المستهدف
					</SectionSubTitle>
					<ClickToPlay>
						<BsFillPlayCircleFill />
						<span>
							اعرف اكثر
						</span>
					</ClickToPlay>
				</SectionActions>
			</SectionContent2>
		</Section>
		<Section grey={true}>
			<SectionContent>
				<Shape3 />
				<SectionActions>
					<SectionTitle>تحديات تواجهك كمعلن !
</SectionTitle>
					<SectionSubTitle >
					كل حملة لأجل تنجح تمر فيها بتحديات ممكن تأثر على مسار حملتك وتعيقها عن تحقيق أهدافها ولعدة أسباب:
					</SectionSubTitle>
					<SectionSubTitle>
					-	عملية التنسيق تستنزف جهد كبير ووقت طويل
					<br></br>
-	ما تتوفر معلومات كافية تساعدك على الاختيار الأنسب
<br></br>
-	التحليلات غير دقيقة
<br></br>
-	تأخر في جمع وإنهاء متطلبات الحملة 

					</SectionSubTitle>
				</SectionActions>
				<SectionImage>
				<Image src={'/assets/images/home-flag.png'} alt={'home-flag'} loader={myLoader} height={220} width={220}/>
			</SectionImage>
			</SectionContent>
		</Section>
		<Section >
			<SectionTitle2>ماذا يميزنا؟</SectionTitle2>
			<SectionContent>
				<FeaturesList>
					<Feature>
					ذكية وسهلة
						<FaGem />
					</Feature>
					<Feature>
					الاختيار الأنسب
						<FaClipboardCheck />
					</Feature>
					<Feature>
					مجالات متعددة
						<FaShieldAlt />
					</Feature>
					<Feature>
					أقرب للجمهور
						<FaUsers />
					</Feature>
				</FeaturesList>
			</SectionContent>
		</Section>
		
		<Footer>
		جميع الحقوق محفوظة © 2021 | معلن
		</Footer>
	</Layout>
};