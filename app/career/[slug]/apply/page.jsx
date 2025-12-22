import { use } from 'react';
import JobApplyWrapper from '@/components/career/job-apply-wrapper';
import { formatSeoMeta } from '@/utils/seo/format-seo-meta';

export async function generateMetadata() {
  const seo = await formatSeoMeta('apply-now');
  return seo;
}

export default function JobApplyPage({ params }) {
  const { slug } = use(params);

  return <JobApplyWrapper slug={slug} />;
}
