import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'الدعم على مدار الساعة',
    Svg: require('@site/static/img/advantage-icon-1.svg').default,
    description: (
      <>
        ماذا لو احتجت إلى مساعدة؟ سيكون دعمنا دائمًا إلى جانبك.
      </>
    ),
  },
  {
    title: 'لا تحتاج إلى خبرة في البرمجة',
    Svg: require('@site/static/img/advantage-icon-2.svg').default,
    description: (
      <>
        يمكنك إنشاء صفحات هبوط احترافية دون الحاجة إلى مطور.
      </>
    ),
  },
  {
    title: 'إنشاء صفحات هبوط بسهولة',
    Svg: require('@site/static/img/advantage-icon-3.svg').default,
    description: (
      <>
        يمكنك إنشاء صفحات هبوط باستخدام الماوس فقط أو استيراد صفحات جاهزة لمعظم المنتجات.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
