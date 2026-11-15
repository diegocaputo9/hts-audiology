import type { Metadata } from 'next';
import { Assessment } from '@/components/assessment';
export const metadata: Metadata = { title: 'Private tinnitus check-in' };
export default function AssessmentPage() { return <Assessment />; }
